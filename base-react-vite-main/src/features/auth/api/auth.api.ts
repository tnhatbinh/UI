import axiosClient from '@config/axios-instance';
import type {
  BaseResponse,
  LoginRequest,
  LoginResponseData,
  RegisterRequest,
  UserProfileDto,
  UpdateProfileRequest,
  CineMatchAiDto,
} from '@shared/types/api.types';

/**
 * Đăng nhập hệ thống bằng email và mật khẩu
 * Endpoint: POST /api/v1/auth/login
 */
export const loginApi = async (body: LoginRequest): Promise<LoginResponseData> => {
  const res = (await axiosClient.post<BaseResponse<LoginResponseData>>(
    '/auth/login',
    body,
  )) as unknown as BaseResponse<LoginResponseData>;

  return res.data;
};

/**
 * Đăng ký tài khoản mới
 * Endpoint: POST /api/v1/auth/register
 */
export const registerApi = async (
  body: RegisterRequest,
): Promise<LoginResponseData> => {
  const res = (await axiosClient.post<BaseResponse<LoginResponseData>>(
    '/auth/register',
    body,
  )) as unknown as BaseResponse<LoginResponseData>;

  return res.data;
};

/**
 * Lấy thông tin người dùng đang đăng nhập
 * Endpoint: GET /api/v1/auth/me
 */
export const getMeApi = async (): Promise<UserProfileDto> => {
  // Vì axios-instance trả về data.data cho GET request
  return (await axiosClient.get('/auth/me')) as unknown as UserProfileDto;
};

/**
 * Lấy thông tin hồ sơ & điểm tích lũy thành viên
 * Endpoint: GET /api/v1/profile
 */
export const getProfileApi = async (): Promise<UserProfileDto> => {
  return (await axiosClient.get('/profile')) as unknown as UserProfileDto;
};

/**
 * Cập nhật thông tin hồ sơ người dùng
 * Endpoint: PUT /api/v1/profile
 */
export const updateProfileApi = async (
  body: UpdateProfileRequest,
): Promise<boolean> => {
  const res = (await axiosClient.put<BaseResponse<boolean>>(
    '/profile',
    body,
  )) as unknown as BaseResponse<boolean>;

  return res.data;
};

/**
 * Lấy dữ liệu phân tích khẩu vị điện ảnh CineMatch AI
 * Endpoint: GET /api/v1/profile/taste-ai
 */
export const getCineMatchAiApi = async (): Promise<CineMatchAiDto> => {
  return (await axiosClient.get('/profile/taste-ai')) as unknown as CineMatchAiDto;
};

