import DesktopNavbar from "@/components/navigation/DesktopNavbar";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";
import MobileTopbar from "@/components/navigation/MobileTopbar";

export default function Navbar() {
  return (
    <>
      <header className="site-navbar">
        <div className="navbar-desktop-wrap">
          <DesktopNavbar />
        </div>
        <MobileTopbar />
      </header>
      <MobileBottomNav />
    </>
  );
}
