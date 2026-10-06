import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Bell,
  Check,
  ChevronDown,
  Film,
  LogIn,
  LogOut,
  MapPin,
  Search,
  User,
} from "lucide-react";
import { BiCameraMovie } from "react-icons/bi";
import tokenManager from "@shared/utils/tokenManager";
import {
  ActionsGroup,
  InnerContainer,
  LocationBadge,
  LocationDropdown,
  LocationItem,
  LocationWrapper,
  LoginBtn,
  LogoWrapper,
  NavigationMenu,
  NavItem,
  NavLeftGroup,
  NotificationBtn,
  OuterHeader,
  ProfileDivider,
  ProfileDropdown,
  ProfileHeader,
  ProfileLogoutItem,
  ProfileMenuItem,
  ProfileWrapper,
  SearchBox,
  TicketPassBtn,
  UserProfileBadge,
} from "./header.styles";

const CITIES = ["Hà Nội", "TP. HCM", "Đà Nẵng"];

const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchVal, setSearchVal] = useState("");
  const [selectedCity, setSelectedCity] = useState("TP. HCM");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  const [, setAuthTick] = useState(0);
  const isLoggedIn = Boolean(tokenManager.getAccessToken());
  const userName = localStorage.getItem("user_name") || "VIP Elite";
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      setAuthTick((prev) => prev + 1);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        locationRef.current &&
        !locationRef.current.contains(event.target as Node)
      ) {
        setIsLocationOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    tokenManager.removeAccessToken();
    localStorage.removeItem("user_name");
    setAuthTick((prev) => prev + 1);
    setIsProfileOpen(false);
    navigate("/");
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <OuterHeader>
      <InnerContainer>
        {/* Left Side: Brand Logo + Main Navigation Menu */}
        <NavLeftGroup>
          <LogoWrapper onClick={() => navigate("/")}>
            <div className="logo-icon">
              <Film size={20} strokeWidth={2.2} />
            </div>
            <div className="logo-text">
              <div className="brand-name">
                <span className="brand-phim">PHIM</span>
                <span className="brand-book">BOOK</span>
              </div>
              <span className="brand-tag">CINEMATIC LOUNGE</span>
            </div>
          </LogoWrapper>

          <NavigationMenu>
            <NavItem $isActive={isActive("/")} onClick={() => navigate("/")}>
              Trang chủ
            </NavItem>
            <NavItem
              $isActive={isActive("/kham-pha")}
              onClick={() => navigate("/kham-pha")}
            >
              Khám phá phim
            </NavItem>
            <NavItem
              $isActive={isActive("/lich-chieu")}
              onClick={() => navigate("/lich-chieu")}
            >
              Lịch chiếu
            </NavItem>
            <NavItem
              $isActive={isActive("/uu-dai")}
              onClick={() => navigate("/uu-dai")}
            >
              Ưu đãi
            </NavItem>
            <NavItem
              $isActive={isActive("/rap-chieu")}
              onClick={() => navigate("/rap-chieu")}
            >
              Rạp chiếu
            </NavItem>
            <NavItem
              $isActive={isActive("/ai-tro-ly")}
              onClick={() => navigate("/ai-tro-ly")}
            >
              <div className="ai-dot" />
              AI Trợ Lý
            </NavItem>
          </NavigationMenu>
        </NavLeftGroup>

        {/* Right Side: Actions & Profile */}
        <ActionsGroup>
          <SearchBox>
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Tìm phim..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </SearchBox>

          <LocationWrapper ref={locationRef}>
            <LocationBadge
              $isOpen={isLocationOpen}
              onClick={() => setIsLocationOpen(!isLocationOpen)}
            >
              <MapPin size={12} className="loc-icon" />
              <span>{selectedCity}</span>
              <ChevronDown size={10} className="chevron-icon" />
            </LocationBadge>

            {isLocationOpen && (
              <LocationDropdown>
                {CITIES.map((city) => (
                  <LocationItem
                    key={city}
                    $isSelected={selectedCity === city}
                    onClick={() => {
                      setSelectedCity(city);
                      setIsLocationOpen(false);
                    }}
                  >
                    <span>{city}</span>
                    {selectedCity === city && (
                      <Check size={12} className="check-icon" />
                    )}
                  </LocationItem>
                ))}
              </LocationDropdown>
            )}
          </LocationWrapper>

          <TicketPassBtn onClick={() => navigate("/ve-cua-toi")}>
            <BiCameraMovie className="ticket-icon" />
            <span>Vé của tôi</span>
          </TicketPassBtn>

          <NotificationBtn title="Thông báo">
            <Bell size={14} className="bell-icon" />
            <span className="badge-dot" />
          </NotificationBtn>

          {isLoggedIn ? (
            <ProfileWrapper ref={profileRef}>
              <UserProfileBadge
                $isOpen={isProfileOpen}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="avatar-circle">
                  <User size={12} strokeWidth={3} />
                </div>
                <div className="user-info">
                  <span className="vip-tag">{userName}</span>
                  <span className="points-text">1.250 Điểm</span>
                </div>
                <ChevronDown size={10} className="profile-chevron" />
              </UserProfileBadge>

              {isProfileOpen && (
                <ProfileDropdown>
                  <ProfileHeader>
                    <div className="profile-name">{userName}</div>
                    <div className="profile-membership">
                      VIP Elite • 1.250 Điểm
                    </div>
                  </ProfileHeader>
                  <ProfileDivider />
                  <ProfileMenuItem
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/ho-so-vip");
                    }}
                  >
                    <User size={13} />
                    <span>Hồ sơ cá nhân</span>
                  </ProfileMenuItem>
                  <ProfileMenuItem
                    onClick={() => {
                      setIsProfileOpen(false);
                      navigate("/ve-cua-toi");
                    }}
                  >
                    <BiCameraMovie size={13} />
                    <span>Vé đã đặt</span>
                  </ProfileMenuItem>
                  <ProfileDivider />
                  <ProfileLogoutItem onClick={handleLogout}>
                    <LogOut size={13} />
                    <span>Đăng xuất</span>
                  </ProfileLogoutItem>
                </ProfileDropdown>
              )}
            </ProfileWrapper>
          ) : (
            <LoginBtn onClick={() => navigate("/login")}>
              <LogIn size={13} />
              <span>Đăng nhập</span>
            </LoginBtn>
          )}
        </ActionsGroup>
      </InnerContainer>
    </OuterHeader>
  );
};

export default Header;
