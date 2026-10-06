import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "गैलरी",
  description:
    "श्री पारदेश्वर महादेव मंदिर से जुड़ी पूजा और अनुष्ठान की तस्वीरें।",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}