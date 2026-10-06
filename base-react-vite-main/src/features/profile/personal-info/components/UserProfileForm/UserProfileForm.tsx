import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import {
  User,
  Lock,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  MapPin,
} from 'lucide-react';
import * as S from './UserProfileForm.styles';

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
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <label>Biệt danh hiển thị</label>
          <div className="input-wrap">
            <span className="icon" style={{ fontSize: '13px' }}>
              @
            </span>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
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
              onChange={(e) => setDob(e.target.value)}
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
              onClick={() => setGender('male')}
            >
              ♂ Nam
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === 'female' ? 'active' : ''}`}
              onClick={() => setGender('female')}
            >
              ♀ Nữ
            </button>
            <button
              type="button"
              className={`gender-btn ${gender === 'other' ? 'active' : ''}`}
              onClick={() => setGender('other')}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="status-badge linked">Đã liên kết OTP</span>
        </div>
      </S.FormGroup>

      <S.FormRow>
        <S.FormGroup>
          <label>Thành phố </label>
          <div className="input-wrap">
            <MapPin size={14} className="icon" />
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Bình Dương">Bình Dương</option>
            </select>
          </div>
        </S.FormGroup>

        <S.FormGroup>
          <label>Cụm rạp yêu thích nhất</label>
          <div className="input-wrap">
            <span className="icon">📽</span>
            <select
              value={favoriteCinema}
              onChange={(e) => setFavoriteCinema(e.target.value)}
            >
              <option value="PhimBook IMAX Landmark 81">
                PhimBook IMAX Landmark 81
              </option>
              <option value="CGV Vincom Đồng Khởi">CGV Vincom Đồng Khởi</option>
              <option value="Galaxy Sala Thủ Thiêm">
                Galaxy Sala Thủ Thiêm
              </option>
              <option value="Lotte Cinema Diamond Plaza">
                Lotte Cinema Diamond Plaza
              </option>
            </select>
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
