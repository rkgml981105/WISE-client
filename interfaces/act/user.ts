import {
    loadMyInfoRequest,
    loadMyInfoSuccess,
    loadMyInfoFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    oauthLoginRequest,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    emailCheckRequest,
    emailCheckSuccess,
    emailCheckFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    registerServiceRequest,
    registerServiceSuccess,
    registerServiceFailure,
} from '../../reducers/user';

export type UserAction =
    | ReturnType<typeof loadMyInfoRequest>
    | ReturnType<typeof loadMyInfoSuccess>
    | ReturnType<typeof loadMyInfoFailure>
    | ReturnType<typeof loginRequest>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailure>
    | ReturnType<typeof oauthLoginRequest>
    | ReturnType<typeof logoutRequest>
    | ReturnType<typeof logoutSuccess>
    | ReturnType<typeof logoutFailure>
    | ReturnType<typeof emailCheckRequest>
    | ReturnType<typeof emailCheckSuccess>
    | ReturnType<typeof emailCheckFailure>
    | ReturnType<typeof signupRequest>
    | ReturnType<typeof signupSuccess>
    | ReturnType<typeof signupFailure>
    | ReturnType<typeof registerServiceRequest>
    | ReturnType<typeof registerServiceSuccess>
    | ReturnType<typeof registerServiceFailure>;
