import {
    loginRequest,
    loginSuccess,
    loginFailure,
    logoutRequest,
    logoutSuccess,
    logoutFailure,
    emailCheckRequest,
    emailCheckSuccess,
    emailCheckFailure,
    signupRequest,
    signupSuccess,
    signupFailure,
    loadProfileRequest,
    loadProfileSuccess,
    loadProfileFailure,
    changeProfileRequest,
    changeProfileSuccess,
    changeProfileFailure,
} from '../../actions/user';

export type UserAction =
    | ReturnType<typeof loginRequest>
    | ReturnType<typeof loginSuccess>
    | ReturnType<typeof loginFailure>
    | ReturnType<typeof logoutRequest>
    | ReturnType<typeof logoutSuccess>
    | ReturnType<typeof logoutFailure>
    | ReturnType<typeof emailCheckRequest>
    | ReturnType<typeof emailCheckSuccess>
    | ReturnType<typeof emailCheckFailure>
    | ReturnType<typeof signupRequest>
    | ReturnType<typeof signupSuccess>
    | ReturnType<typeof signupFailure>
    | ReturnType<typeof loadProfileRequest>
    | ReturnType<typeof loadProfileSuccess>
    | ReturnType<typeof loadProfileFailure>
    | ReturnType<typeof changeProfileRequest>
    | ReturnType<typeof changeProfileSuccess>
    | ReturnType<typeof changeProfileFailure>;
