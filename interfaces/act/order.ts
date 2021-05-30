import {
    addOrderRequest,
    addOrderSuccess,
    addOrderFailure,
    loadOrderInfoRequest,
    loadOrderInfoSuccess,
    loadOrderInfoFailure,
    acceptOrderRequest,
    acceptOrderSuccess,
    acceptOrderFailure,
    rejectOrderRequest,
    rejectOrderSuccess,
    rejectOrderFailure,
    loadOrdersRequest,
    loadOrdersSuccess,
    loadOrdersFailure,
} from '../../actions/order';

export type OrderAction =
    | ReturnType<typeof addOrderRequest>
    | ReturnType<typeof addOrderSuccess>
    | ReturnType<typeof addOrderFailure>
    | ReturnType<typeof loadOrdersRequest>
    | ReturnType<typeof loadOrdersSuccess>
    | ReturnType<typeof loadOrdersFailure>
    | ReturnType<typeof loadOrderInfoRequest>
    | ReturnType<typeof loadOrderInfoSuccess>
    | ReturnType<typeof loadOrderInfoFailure>
    | ReturnType<typeof acceptOrderRequest>
    | ReturnType<typeof acceptOrderSuccess>
    | ReturnType<typeof acceptOrderFailure>
    | ReturnType<typeof rejectOrderRequest>
    | ReturnType<typeof rejectOrderSuccess>
    | ReturnType<typeof rejectOrderFailure>;
