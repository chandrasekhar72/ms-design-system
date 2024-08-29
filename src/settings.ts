const API_URL = import.meta.env.VITE_APP_API_URL;

export const API_SETTINGS = {
    LOGIN: `${API_URL}/login`,
    TWO_FACTOR_AUTH_VERIFY: `${API_URL}/2fa/verify`,
    TWO_FACTOR_AUTH_RESEND: `${API_URL}/2fa/resend`,
    FORGOT_PASSWORD: `${API_URL}/forgot-password`,
    LOGOUT: `${API_URL}/logout`,
    REFRESH: `${API_URL}/refresh`,
    ME: `${API_URL}/me`,
    WEATHER: `${API_URL}/weather`,
    SIDE_MENU: `${API_URL}/side-menu`,
    PASSWORD_POLICY: `${API_URL}/password-policy`,
    SET_PASSWORD: `${API_URL}/set-password`,
    ACCESS_CONTROL: `${API_URL}/access-control`,
};