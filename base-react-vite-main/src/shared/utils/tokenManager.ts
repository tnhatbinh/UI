import { LOCAL_STORAGE_KEYS } from '../constants/storage-key';
import { decryptDES, encryptDES } from './desEncrypt';
import { lcStorage } from './storage';

const tokenManager = () => {
  let accessToken: string | undefined = lcStorage.get(
    LOCAL_STORAGE_KEYS.accessToken,
  );
  let refreshToken: string | undefined = lcStorage.get(
    LOCAL_STORAGE_KEYS.refreshToken,
  );

  const isDev = import.meta.env.MODE === 'development';

  const getAccessToken = (): string | undefined => {
    if (!accessToken) return undefined;
    try {
      return isDev ? accessToken : decryptDES(accessToken);
    } catch {
      return undefined;
    }
  };

  const setAccessToken = (token: string): void => {
    accessToken = isDev ? token : encryptDES(token);
    lcStorage.set(LOCAL_STORAGE_KEYS.accessToken, accessToken);
  };

  const removeAccessToken = (): void => {
    accessToken = undefined;
    localStorage.removeItem(LOCAL_STORAGE_KEYS.accessToken);
  };

  const getRefreshToken = (): string | undefined => {
    if (!refreshToken) return undefined;
    return isDev ? refreshToken : decryptDES(refreshToken);
  };

  const setRefreshToken = (token: string): void => {
    refreshToken = isDev ? token : encryptDES(token);
    lcStorage.set(LOCAL_STORAGE_KEYS.refreshToken, refreshToken);
  };

  const removeRefreshToken = (): void => {
    refreshToken = undefined;
    localStorage.removeItem(LOCAL_STORAGE_KEYS.refreshToken);
  };

  return {
    getAccessToken,
    setAccessToken,
    removeAccessToken,
    getRefreshToken,
    setRefreshToken,
    removeRefreshToken,
  };
};

export default tokenManager();
