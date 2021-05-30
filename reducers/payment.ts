/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import produce from 'immer';
import { CHECK_OUT_REQUEST, CHECK_OUT_SUCCESS, CHECK_OUT_FAILURE } from '../actions/payment';
import { PaymentAction } from '../interfaces/act/payment';
import { PaymentState } from '../interfaces/data/payment';

/* ------- initial state ------ */
export const initialState: PaymentState = {
    checkoutDone: false,
    checkoutStatus: null,
    checkoutError: null,
};

/* ------- reducer ------ */
const reducer = (state = initialState, action: PaymentAction) =>
    produce(state, (draft: PaymentState) => {
        switch (action.type) {
            case CHECK_OUT_REQUEST:
                draft.checkoutDone = false;
                draft.checkoutError = null;
                break;
            case CHECK_OUT_SUCCESS:
                draft.checkoutDone = true;
                draft.checkoutStatus = action.status;
                break;
            case CHECK_OUT_FAILURE:
                draft.checkoutError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
