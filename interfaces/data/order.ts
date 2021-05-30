export interface Order {
    _id: string;
    customer: { _id: string; name: string; mobile: string };
    assistant: { _id: string; name: string; mobile?: string };
    service: { _id: string; images: string[]; location: string };
    pickup: string;
    content: string;
    hospital: string;
    message: string;
    date: string;
    time: string;
    hours: number;
    totalPayment: number;
    state: string;
    isReviewed: boolean;
}

export type OrderState = {
    customerProgressOrders: null | Order[];
    customerCompleteOrders: null | Order[];
    assistantApplyOrders: null | Order[];
    assistantAcceptOrders: null | Order[];
    assistantCompleteOrders: null | Order[];
    orderInfo: null | Order;
    acceptOrder: null | Order;
    addOrderLoading: boolean;
    addOrderDone: boolean;
    addOrderError: null | string;
    loadOrdersLoading: boolean;
    loadOrdersDone: boolean;
    loadOrdersError: null | string;
    loadOrderInfoLoading: boolean;
    loadOrderInfoDone: boolean;
    loadOrderInfoError: null | string;
    acceptOrderLoading: boolean;
    acceptOrderDone: boolean;
    acceptOrderError: null | string;
    rejectOrderLoading: boolean;
    rejectOrderDone: boolean;
    rejectOrderError: null | string;
};
