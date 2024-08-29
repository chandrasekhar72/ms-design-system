import axios from "axios";
import { API_SETTINGS } from "../settings/settings";
import { ForgotPassword, LoginInterface, TwoFactorAuthResend, TwoFactorAuthVerify } from "./common.interface";

export const getPasswordPolicy = async () => {
    return await axios({
        method: "GET",
        url: API_SETTINGS.PASSWORD_POLICY,
        withCredentials: true
    }).then((res) => res['data'])
}

export const setPassword = async (body: Record<string, string>) => {
    return await axios({
        url: API_SETTINGS.SET_PASSWORD,
        method: "POST",
        data: body
    }).then((res) => res['data'])
}

export const userLogin = async (body: LoginInterface) => {
    return await axios({
        method: "POST",
        url: API_SETTINGS.LOGIN,
        data: body,
        withCredentials: true,
    }).then((res) => res['data'])
}

export const resendOTP = async (body: TwoFactorAuthResend) => {
    return await axios({
        method: "POST",
        url: API_SETTINGS.TWO_FACTOR_AUTH_RESEND,
        data: body,
        withCredentials: true,
    }).then((res) => res['data'])
}

export const verifyOTP = async (body: TwoFactorAuthVerify) => {
    return await axios({
        method: "POST",
        url: API_SETTINGS.TWO_FACTOR_AUTH_VERIFY,
        data: body,
        withCredentials: true,
    }).then((res) => res['data'])
}

export const forgotPassword = async (body: ForgotPassword) => {
    return await axios({
        method: "POST",
        url: API_SETTINGS.FORGOT_PASSWORD,
        data: body,
        withCredentials: true,
    }).then((res) => res['data'])
}

export const getCurrentUser = async () => {
    return await axios({
        method: "GET",
        url: API_SETTINGS.ME,
        withCredentials: true,
    }).then((res) => res['data']).catch((error) => { throw new Error(error['response']['data']['message']) })
}

export const getCurrentMenus = async () => {
    return await axios({
        method: "GET",
        url: `${API_SETTINGS.SIDE_MENU}/menus`,
        withCredentials: true,
    }).then((res) => res['data'])
}

export const getCurrentWeather = async (location?: Record<string, any>) => {
    let params: Record<string, any> = {}
    if (location?.latitude && location?.location) {
        params = {
            lat: location['lat'] || null,
            lon: location['lon'] || null,
            refresh: location['refresh'] || null,
        }
    }
    if (location?.refresh) {
        params['refresh'] = location['refresh']
    }
    return await axios({
        method: "GET",
        url: `${API_SETTINGS.WEATHER}/me`,
        params: params,
        withCredentials: true,
    }).then((res) => res['data'])
}

export const userLogout = async () => {
    try {
        axios({ url: API_SETTINGS.LOGOUT, method: "POST" })
        sessionStorage.clear()
        localStorage.clear()
    } catch (error) {
        return error
    }
}

export const refreshToken = async () => {
    try {
        const token = sessionStorage.getItem("refreshToken") || localStorage.getItem("refreshToken")
        return await axios.post(API_SETTINGS.REFRESH, { refresh_token: token });
    } catch (error) {
        return error
    }
}


