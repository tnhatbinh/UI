import axiosClient from '@config/axios-instance';
import type {
  BaseResponse,
  GetMoviesParams,
  GetShowtimesParams,
  MovieDetailDto,
  MovieDto,
  TheaterShowtimesGroupDto,
} from '@shared/types/api.types';

/**
 * Lấy danh sách phim (kèm bộ lọc, tìm kiếm, phân trang)
 * Endpoint: GET /api/v1/movies
 */
export const getMoviesApi = async (
  params?: GetMoviesParams,
): Promise<BaseResponse<MovieDto[]>> => {
  const res = (await axiosClient.get('/movies', {
    params,
  })) as unknown as BaseResponse<MovieDto[]> | MovieDto[];

  // Chuẩn hóa: nếu axios interceptor đã bóc data.data ra thành mảng thì bọc lại
  if (Array.isArray(res)) {
    return {
      code: 200,
      success: true,
      message: 'Thành công',
      data: res,
    };
  }

  return res as BaseResponse<MovieDto[]>;
};

/**
 * Lấy chi tiết 1 bộ phim theo slug (ví dụ: 'mai', 'nhim-sonic-3')
 * Endpoint: GET /api/v1/movies/{slug}
 */
export const getMovieDetailBySlugApi = async (
  slug: string,
): Promise<MovieDetailDto> => {
  return (await axiosClient.get(`/movies/${slug}`)) as unknown as MovieDetailDto;
};

/**
 * Lấy danh sách lịch chiếu & cụm rạp theo phim, ngày, thành phố
 * Endpoint: GET /api/v1/showtimes
 */
export const getShowtimesApi = async (
  params?: GetShowtimesParams,
): Promise<TheaterShowtimesGroupDto[]> => {
  const res = (await axiosClient.get('/showtimes', {
    params,
  })) as unknown as
    | BaseResponse<TheaterShowtimesGroupDto[]>
    | TheaterShowtimesGroupDto[];

  if (Array.isArray(res)) {
    return res;
  }

  return (res as BaseResponse<TheaterShowtimesGroupDto[]>).data || [];
};
