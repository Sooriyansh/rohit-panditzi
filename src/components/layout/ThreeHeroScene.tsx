"use client";

import { useEffect, useRef } from "react";
import type * as ThreeTypes from "three";

export default function ThreeHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let animationFrame = 0;

    let activeRenderer: ThreeTypes.WebGLRenderer | null = null;
    let activeTimer: ThreeTypes.Timer | null = null;

    const cleanup = () => {
      disposed = true;

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      if (activeRenderer) {
        activeRenderer.dispose();

        if (activeRenderer.domElement?.parentNode) {
          activeRenderer.domElement.parentNode.removeChild(activeRenderer.domElement);
        }
      }

      activeTimer?.dispose();
      activeTimer = null;
    };

    const init = async () => {
      const THREE = await import("three");

      if (disposed || !containerRef.current) return;

      const container = containerRef.current;

      /* -----------------------------------------------------------
         SCENE
      ----------------------------------------------------------- */

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(
        45,
        Math.max(container.clientWidth, 1) /
          Math.max(container.clientHeight, 1),
        0.1,
        100
      );

      camera.position.set(0, 0, 10);

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      activeRenderer = renderer;

      renderer.setPixelRatio(
        Math.min(window.devicePixelRatio || 1, 1.5)
      );

      renderer.setSize(
        container.clientWidth,
        container.clientHeight
      );

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      renderer.domElement.style.pointerEvents = "none";

      container.appendChild(renderer.domElement);

      /* -----------------------------------------------------------
         LIGHTING
      ----------------------------------------------------------- */

      const ambientLight = new THREE.AmbientLight(
        0xffe5b5,
        0.8
      );

      scene.add(ambientLight);

      const centerLight = new THREE.PointLight(
        0xffc56b,
        3.2,
        9
      );

      centerLight.position.set(0, 0, 1);
      scene.add(centerLight);

      const leftLight = new THREE.PointLight(
        0xc66a36,
        1.2,
        8
      );

      leftLight.position.set(-5, 0, 1);
      scene.add(leftLight);

      const rightLight = new THREE.PointLight(
        0xe3a24a,
        1.2,
        8
      );

      rightLight.position.set(5, 0, 1);
      scene.add(rightLight);

      /* -----------------------------------------------------------
         CENTER AURA
         Very subtle — Guru Ji remains the hero.
      ----------------------------------------------------------- */

      const centerGroup = new THREE.Group();

      scene.add(centerGroup);

      const auraGeometry = new THREE.SphereGeometry(
        2.15,
        32,
        32
      );

      const auraMaterial = new THREE.MeshBasicMaterial({
        color: 0xc98a43,
        transparent: true,
        opacity: 0.045,
        depthWrite: false,
      });

      const aura = new THREE.Mesh(
        auraGeometry,
        auraMaterial
      );

      centerGroup.add(aura);

      /* -----------------------------------------------------------
         INNER GOLDEN RING
      ----------------------------------------------------------- */

      const ringGeometry = new THREE.RingGeometry(
        2.05,
        2.065,
        96
      );

      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xd5a45d,
        transparent: true,
        opacity: 0.32,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const centerRing = new THREE.Mesh(
        ringGeometry,
        ringMaterial
      );

      centerRing.position.z = -0.15;

      centerGroup.add(centerRing);

      /* -----------------------------------------------------------
         SECOND VERY SUBTLE RING
      ----------------------------------------------------------- */

      const secondRingGeometry = new THREE.RingGeometry(
        2.35,
        2.355,
        96
      );

      const secondRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xb77939,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
        depthWrite: false,
      });

      const secondRing = new THREE.Mesh(
        secondRingGeometry,
        secondRingMaterial
      );

      secondRing.rotation.x = 0.08;
      secondRing.rotation.y = -0.12;

      centerGroup.add(secondRing);

      /* -----------------------------------------------------------
         SIDE FLOW PARTICLES
         Particles travel from both sides toward Guru Ji.
      ----------------------------------------------------------- */

      const particleCount = 260;

      const particlePositions = new Float32Array(
        particleCount * 3
      );

      const particleSizes = new Float32Array(
        particleCount
      );

      const particleSide = new Float32Array(
        particleCount
      );

      const particleProgress = new Float32Array(
        particleCount
      );

      const particleOffset = new Float32Array(
        particleCount
      );

      for (let i = 0; i < particleCount; i++) {
        const side = i % 2 === 0 ? -1 : 1;

        particleSide[i] = side;

        particleProgress[i] =
          Math.random();

        particleOffset[i] =
          Math.random() * Math.PI * 2;

        particleSizes[i] =
          0.018 + Math.random() * 0.045;

        const distance =
          3.0 + Math.random() * 4.2;

        particlePositions[i * 3] =
          side * distance;

        particlePositions[i * 3 + 1] =
          (Math.random() - 0.5) * 4.8;

        particlePositions[i * 3 + 2] =
          -0.8 + Math.random() * 1.8;
      }

      const particleGeometry =
        new THREE.BufferGeometry();

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
          particlePositions,
          3
        )
      );

      particleGeometry.setAttribute(
        "aSize",
        new THREE.BufferAttribute(
          particleSizes,
          1
        )
      );

      const particleMaterial =
        new THREE.PointsMaterial({
          color: 0xe4b66d,
          size: 0.055,
          transparent: true,
          opacity: 0.72,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });

      const particles = new THREE.Points(
        particleGeometry,
        particleMaterial
      );

      scene.add(particles);

      /* -----------------------------------------------------------
         SIDE ORBITING DOTS
      ----------------------------------------------------------- */

      const sideDots: ThreeTypes.Mesh<
        ThreeTypes.SphereGeometry,
        ThreeTypes.MeshBasicMaterial
      >[] = [];

      const createSideDot = (
        side: number,
        y: number,
        delay: number,
        scale: number
      ) => {
        const geometry =
          new THREE.SphereGeometry(
            0.045 * scale,
            12,
            12
          );

        const material =
          new THREE.MeshBasicMaterial({
            color: 0xf0c77c,
            transparent: true,
            opacity: 0.8,
          });

        const dot = new THREE.Mesh(
          geometry,
          material
        );

        dot.position.set(
          side * (2.8 + Math.random() * 2.2),
          y,
          0.2
        );

        dot.userData = {
          side,
          y,
          delay,
          phase: Math.random() * Math.PI * 2,
          speed: 0.18 + Math.random() * 0.12,
        };

        scene.add(dot);
        sideDots.push(dot);
      };

      createSideDot(-1, 1.4, 0.2, 1);
      createSideDot(-1, 0.3, 1.0, 0.75);
      createSideDot(-1, -0.9, 1.7, 0.6);
      createSideDot(-1, -1.8, 2.4, 0.8);

      createSideDot(1, 1.2, 0.8, 0.8);
      createSideDot(1, 0.15, 1.5, 1);
      createSideDot(1, -0.8, 2.2, 0.65);
      createSideDot(1, -1.7, 2.8, 0.8);

      /* -----------------------------------------------------------
         FLOWING CURVES
         Elegant golden streams from left/right.
      ----------------------------------------------------------- */

      const flowingLines: ThreeTypes.Line<
        ThreeTypes.BufferGeometry,
        ThreeTypes.LineBasicMaterial
      >[] = [];

      const createFlowLine = (
        side: number,
        yOffset: number,
        delay: number,
        scale: number
      ) => {
        const points: ThreeTypes.Vector3[] = [];

        const startX = side * 6.2;
        const endX = side * 1.55;

        for (let i = 0; i <= 48; i++) {
          const t = i / 48;

          const x =
            startX +
            (endX - startX) * t;

          const curve =
            Math.sin(t * Math.PI * 1.25) *
            0.65 *
            scale;

          const y =
            yOffset +
            curve;

          const z =
            -0.25 +
            Math.sin(t * Math.PI) *
              0.35;

          points.push(
            new THREE.Vector3(
              x,
              y,
              z
            )
          );
        }

        const geometry =
          new THREE.BufferGeometry().setFromPoints(
            points
          );

        const material =
          new THREE.LineBasicMaterial({
            color: 0xb8874d,
            transparent: true,
            opacity: 0.16,
            depthWrite: false,
          });

        const line = new THREE.Line(
          geometry,
          material
        );

        line.userData = {
          side,
          delay,
          baseY: yOffset,
          phase: Math.random() * Math.PI * 2,
        };

        scene.add(line);
        flowingLines.push(line);
      };

      createFlowLine(-1, 1.35, 0, 1);
      createFlowLine(-1, 0.75, 0.7, 0.75);
      createFlowLine(-1, -0.7, 1.4, 0.9);
      createFlowLine(-1, -1.35, 2, 0.65);

      createFlowLine(1, 1.35, 0.4, 0.9);
      createFlowLine(1, 0.65, 1.1, 0.7);
      createFlowLine(1, -0.65, 1.8, 1);
      createFlowLine(1, -1.4, 2.4, 0.7);

      /* -----------------------------------------------------------
         SMALL FLOATING STARS
      ----------------------------------------------------------- */

      const starCount = 100;

      const starPositions =
        new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        const side =
          Math.random() > 0.5 ? -1 : 1;

        starPositions[i * 3] =
          side *
          (3.2 + Math.random() * 3.8);

        starPositions[i * 3 + 1] =
          (Math.random() - 0.5) * 5.5;

        starPositions[i * 3 + 2] =
          -1 +
          Math.random() * 1.5;
      }

      const starGeometry =
        new THREE.BufferGeometry();

      starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
          starPositions,
          3
        )
      );

      const starMaterial =
        new THREE.PointsMaterial({
          color: 0xf3d8a4,
          size: 0.025,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
        });

      const stars = new THREE.Points(
        starGeometry,
        starMaterial
      );

      scene.add(stars);

      /* -----------------------------------------------------------
         SOFT SIDE HALOS
      ----------------------------------------------------------- */

      const createSideHalo = (
        x: number
      ) => {
        const geometry =
          new THREE.CircleGeometry(
            1.3,
            64
          );

        const material =
          new THREE.MeshBasicMaterial({
            color: 0xc88743,
            transparent: true,
            opacity: 0.025,
            depthWrite: false,
          });

        const halo = new THREE.Mesh(
          geometry,
          material
        );

        halo.position.set(
          x,
          0,
          -1
        );

        scene.add(halo);

        return halo;
      };

      const leftHalo =
        createSideHalo(-4.4);

      const rightHalo =
        createSideHalo(4.4);

      /* -----------------------------------------------------------
         ANIMATION
      ----------------------------------------------------------- */

      const timer =
        new THREE.Timer();
      activeTimer = timer;
      timer.connect(document);

      const animate = (timestamp?: number) => {
        if (disposed) return;

        animationFrame =
          requestAnimationFrame(
            animate
          );

        timer.update(timestamp);

        const elapsed =
          timer.getElapsed();

        /* Center aura breathing */
        const breathe =
          1 +
          Math.sin(elapsed * 0.65) *
            0.035;

        aura.scale.setScalar(
          breathe
        );

        centerRing.rotation.z =
          elapsed * 0.025;

        secondRing.rotation.z =
          -elapsed * 0.018;

        /* -------------------------------------------------------
           PARTICLES MOVE TOWARD CENTER
        ------------------------------------------------------- */

        const positions =
          particleGeometry.attributes
            .position.array;

        for (
          let i = 0;
          i < particleCount;
          i++
        ) {
          const side =
            particleSide[i];

          let progress =
            particleProgress[i];

          progress +=
            0.00065;

          if (progress > 1) {
            progress = 0;
          }

          particleProgress[i] =
            progress;

          const startDistance =
            7.2;

          const endDistance =
            2.0;

          const distance =
            startDistance -
            progress *
              (startDistance - endDistance);

          const wave =
            Math.sin(
              elapsed * 0.7 +
                particleOffset[i]
            ) *
            0.18;

          const y =
            Math.sin(
              progress * Math.PI
            ) *
            0.55 +
            wave +
            ((i % 7) - 3) *
              0.12;

          positions[i * 3] =
            side * distance;

          positions[i * 3 + 1] =
            y;

          positions[i * 3 + 2] =
            -0.6 +
            Math.sin(
              elapsed * 0.45 +
                particleOffset[i]
            ) *
              0.25;
        }

        particleGeometry.attributes.position.needsUpdate =
          true;

        /* -------------------------------------------------------
           SIDE DOT MOTION
        ------------------------------------------------------- */

        sideDots.forEach((dot) => {
          const {
            side,
            y,
            phase,
            speed,
          } = dot.userData;

          const movement =
            Math.sin(
              elapsed * speed +
                phase
            );

          const x =
            side *
            (2.5 +
              Math.abs(movement) *
                2.4);

          dot.position.x = x;

          dot.position.y =
            y +
            Math.sin(
              elapsed * 0.5 +
                phase
            ) *
              0.16;

          dot.position.z =
            0.1 +
            Math.sin(
              elapsed * 0.8 +
                phase
            ) *
              0.12;
        });

        /* -------------------------------------------------------
           FLOW LINES BREATHE
        ------------------------------------------------------- */

        flowingLines.forEach(
          (line, index) => {
            const material =
              line.material;

            const pulse =
              Math.sin(
                elapsed * 0.7 +
                  index * 0.55
              );

            material.opacity =
              0.10 +
              (pulse + 1) *
                0.035;

            line.position.y =
              Math.sin(
                elapsed * 0.35 +
                  index
              ) *
              0.025;
          }
        );

        /* Stars gently twinkle */
        starMaterial.opacity =
          0.35 +
          Math.sin(
            elapsed * 0.55
          ) *
            0.12;

        /* Side halos breathe */
        const haloScale =
          1 +
          Math.sin(
            elapsed * 0.45
          ) *
            0.08;

        leftHalo.scale.setScalar(
          haloScale
        );

        rightHalo.scale.setScalar(
          haloScale
        );

        /* Lights subtly move */
        centerLight.intensity =
          3.0 +
          Math.sin(
            elapsed * 0.7
          ) *
            0.35;

        leftLight.position.y =
          Math.sin(
            elapsed * 0.35
          ) *
            0.8;

        rightLight.position.y =
          Math.cos(
            elapsed * 0.35
          ) *
            0.8;

        /* Very subtle camera breathing */
        camera.position.x =
          Math.sin(
            elapsed * 0.12
          ) *
            0.04;

        camera.position.y =
          Math.cos(
            elapsed * 0.1
          ) *
            0.025;

        camera.lookAt(
          0,
          0,
          0
        );

        renderer.render(
          scene,
          camera
        );
      };

      /* -----------------------------------------------------------
         RESPONSIVE
      ----------------------------------------------------------- */

      const resizeObserver =
        new ResizeObserver(() => {
          if (!containerRef.current)
            return;

          const width =
            Math.max(
              containerRef.current
                .clientWidth,
              1
            );

          const height =
            Math.max(
              containerRef.current
                .clientHeight,
              1
            );

          camera.aspect =
            width / height;

          camera.updateProjectionMatrix();

          renderer.setSize(
            width,
            height,
            false
          );
        });

      resizeObserver.observe(
        container
      );

      animate();

      return () => {
        resizeObserver.disconnect();
      };
    };

    init();

    return cleanup;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
      aria-hidden="true"
    />
  );
}