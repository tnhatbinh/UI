import type { FC, FormEvent } from 'react';
import { useState, useRef, useEffect } from 'react';
import {
  User,
  Lock,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  MapPin,
  Film,
  ChevronDown,
  Check,
} from 'lucide-react';
import * as S from './UserProfileForm.styles';

const CITIES = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Bình Dương'];
const CINEMAS = [
  'PhimBook IMAX Landmark 81',
  'CGV Vincom Đồng Khởi',
  'Galaxy Sala Thủ Thiêm',
  'Lotte Cinema Diamond Plaza',
];

interface UserProfileFormProps {
  onSaveSuccess: (message: string) => void;
}

export const UserProfileForm: FC<UserProfileFormProps> = ({
  onSaveSuccess,
}) => {
  // Form states
  const [fullName, setFullName] = useState('Nguyễn Thanh Tùng');
  const [nickname, setNickname] = useState('Tùng Cine');
  const [dob, setDob] = useState('1995-08-18');
  const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');
  const [email, setEmail] = useState('tung.nguyen@gmail.com');
  const [phone, setPhone] = useState('0988 123 456');
  const [city, setCity] = useState('TP. Hồ Chí Minh');
  const [favoriteCinema, setFavoriteCinema] = useState(
    'PhimBook IMAX Landmark 81',
  );
  const [activeDropdown, setActiveDropdown] = useState<'city' | 'cinema' | null>(null);

  const cityDropdownRef = useRef<HTMLDivElement>(null);
  const cinemaDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(target) &&
        cinemaDropdownRef.current &&
        !cinemaDropdownRef.current.contains(target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDob(e.target.value);
  };

  const handleSelectGender =
    (selectedGender: 'male' | 'female' | 'other') => () => {
      setGender(selectedGender);
    };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleToggleCityDropdown = () => {
    setActiveDropdown((prev) => (prev === 'city' ? null : 'city'));
  };

  const handleToggleCinemaDropdown = () => {
    setActiveDropdown((prev) => (prev === 'cinema' ? null : 'cinema'));
  };

  const handleSelectCity = (selectedCity: string) => () => {
    setCity(selectedCity);
    setActiveDropdown(null);
  };

  const handleSelectCinema = (selectedCinema: string) => () => {
    setFavoriteCinema(selectedCinema);
    setActiveDropdown(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSaveSuccess('Đã lưu cập nhật thông tin hồ sơ thành công!');
  };

  return (
    <S.Card as="form" onSubmit={handleSubmit}>
      <div className="card-header">
        <div className="title-group">
          <h3>
            <User size={18} color="#ff535a" />
            <span>Hồ sơ người dùng</span>
          </h3>
          <span className="sub">
            Thông tin được sử dụng cho việc xuất vé điện tử và quyền lợi quà
            tặng thành viên.
          </span>
        </div>
      </div>

      <S.FormRow>
        <S.FormGroup>
          <label>
            <span>Họ và tên</span>
            <span className="req">*Bắt buộc</span>
          </label>
          <div className="input-wrap">
            <User size={14} className="icon" />
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <label>Biệt danh hiển thị</label>
          <div className="input-wrap">
            <span className="icon">@</span>
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
        </S.FormGroup>
      </S.FormRow>

      <S.FormRow>
        <S.FormGroup>
          <label>
            <span>Ngày sinh</span>
            <Lock size={11} color="#ffb955" />
          </label>
          <div className="input-wrap">
            <Calendar size={14} className="icon" />
            <input
              type="date"
              value={dob}
              onChange={handleDobChange}
            />
          </div>
          <span className="helper-text">
            🎁 Tặng ngay 02 vé xem phim 2D vào tuần lễ sinh nhật
          </span>
        </S.FormGroup>

        <S.FormGroup>
          <label>Giới tính</label>
          <S.GenderRow>
            <button
              type="button"
              className={`gender-btn ${gender === 'male' ? 'active' : ''}`}
              onClick={handleSelectGender('male')}
            >
              ♂ Nam
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
              onClick={handleSelectGender('female')}
            >
              ♀ Nữ
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === 'other' ? 'active' : ''}`}
              onClick={handleSelectGender('other')}
            >
              Khác
            </button>
          </S.GenderRow>
        </S.FormGroup>
      </S.FormRow>

      <S.FormGroup>
        <label>Email tài khoản</label>
        <div className="input-wrap">
          <Mail size={14} className="icon" />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="has-badge"
          />
          <span className="status-badge verified">✓ Đã xác minh</span>
        </div>
      </S.FormGroup>

      <S.FormGroup>
        <label>Số điện thoại nhận vé SMS / Zalo</label>
        <div className="input-wrap">
          <Phone size={14} className="icon" />
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="has-badge"
          />
          <span className="status-badge linked">Đã liên kết OTP</span>
        </div>
      </S.FormGroup>

      <S.FormRow>
        <S.FormGroup>
          <label>Thành phố </label>
          <div className="input-wrap" ref={cityDropdownRef}>
            <MapPin size={14} className="icon" />
            <S.SelectTrigger
              type="button"
              $isOpen={activeDropdown === 'city'}
              onClick={handleToggleCityDropdown}
              aria-haspopup="listbox"
              aria-expanded={activeDropdown === 'city'}
            >
              <span className="selected-text">{city}</span>
              <ChevronDown size={14} className="chevron" />
            </S.SelectTrigger>

            {activeDropdown === 'city' && (
              <S.DropdownMenu role="listbox">
                {CITIES.map((c) => (
                  <S.DropdownItem
                    key={c}
                    type="button"
                    role="option"
                    aria-selected={city === c}
                    $isSelected={city === c}
                    onClick={handleSelectCity(c)}
                  >
                    <span>{c}</span>
                    {city === c && <Check size={14} className="check-icon" />}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <label>Cụm rạp yêu thích nhất</label>
          <div className="input-wrap" ref={cinemaDropdownRef}>
            <Film size={14} className="icon" />
            <S.SelectTrigger
              type="button"
              $isOpen={activeDropdown === 'cinema'}
              onClick={handleToggleCinemaDropdown}
              aria-haspopup="listbox"
              aria-expanded={activeDropdown === 'cinema'}
            >
              <span className="selected-text">{favoriteCinema}</span>
              <ChevronDown size={14} className="chevron" />
            </S.SelectTrigger>

            {activeDropdown === 'cinema' && (
              <S.DropdownMenu role="listbox">
                {CINEMAS.map((cin) => (
                  <S.DropdownItem
                    key={cin}
                    type="button"
                    role="option"
                    aria-selected={favoriteCinema === cin}
                    $isSelected={favoriteCinema === cin}
                    onClick={handleSelectCinema(cin)}
                  >
                    <span>{cin}</span>
                    {favoriteCinema === cin && (
                      <Check size={14} className="check-icon" />
                    )}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </div>
        </S.FormGroup>
      </S.FormRow>

      <S.FormFooter>
        <div className="sync-note">
          <Sparkles size={14} color="#ffb955" />
          <span>Dữ liệu đồng bộ tức thì trên app PhimBook</span>
        </div>
        <button type="submit" className="save-btn">
          Lưu thay đổi
        </button>
      </S.FormFooter>
    </S.Card>
  );
};

export default UserProfileForm;
