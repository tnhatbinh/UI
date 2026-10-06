import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header';
import { Footer } from './footer/footer';
import Sidebar from './sidebar/sidebar';

export default function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#0B0B0C] text-white relative">
      {/* 1. Header (Sticky Top, Full-width Glassmorphism với nút menu 3 gạch sát mép màn hình) */}
      <Header
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* 2. Main Body Content */}
      <main className="flex-1 w-full">
        <Outlet />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Full Vertical Sidebar ở mép màn hình */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}
