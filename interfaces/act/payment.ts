import { checkoutRequest, checkoutSuccess, checkoutFailure } from '../../actions/payment';

export type PaymentAction =
    | ReturnType<typeof checkoutRequest>
    | ReturnType<typeof checkoutSuccess>
    | ReturnType<typeof checkoutFailure>;
