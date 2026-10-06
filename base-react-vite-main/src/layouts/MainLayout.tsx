import { Outlet } from "react-router-dom";
import Header from "./header/header";
import { Footer } from "./footer/footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#0B0B0C] text-white">
      {/* 1. Header (Sticky Top, Full-width Glassmorphism) */}
      <Header />

      {/* 2. Main Body Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
