/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios, { AxiosResponse } from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import { checkoutFailure, checkoutRequest, checkoutSuccess, CHECK_OUT_REQUEST } from '../actions/payment';

function checkoutAPI(orderId: string | string[], impUid: string | string[], accessToken: string) {
    return axios.post(
        `api/v1/payments/${orderId}`,
        {
            impUid,
        },
        {
            headers: {
                accessToken,
            },
        },
    );
}

function* checkout(action: ReturnType<typeof checkoutRequest>) {
    try {
        const result: AxiosResponse<{ status: string; message: string }> = yield call(
            checkoutAPI,
            action.orderId,
            action.impUid,
            action.accessToken,
        );
        yield put(checkoutSuccess(result.data.status, result.data.message));
    } catch (err) {
        yield put(checkoutFailure(err.message));
    }
}

function* watchCheckout() {
    yield takeLatest(CHECK_OUT_REQUEST, checkout);
}

export default function* paymentSaga() {
    yield all([fork(watchCheckout)]);
}
