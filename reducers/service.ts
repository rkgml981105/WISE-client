/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

// import { ActionRequest } from '../interfaces/act/services';
import { IActionsService } from '../interfaces/act/service';
import { ServiceState } from '../interfaces/data/service';

import Produce from '../utils/produce';

/* ------- initial state ------ */
export const initialState: ServiceState = {
    services: [],
    service: null,
    reviews: null,
    loadAllServicesLoading: false,
    loadAllServicesDone: false,
    loadAllServicesError: null,
    getSingleServiceLoading: false,
    getSingleServiceDone: false,
    getSingleServiceError: null,
    loadFirstReviewsLoading: false,
    loadFirstReviewsDone: false,
    loadFirstReviewsError: null,
    loadMoreReviewsLoading: false,
    loadMoreReviewsDone: false,
    loadMoreReviewsError: null,
    reservationRequests: [],
    reservationRequestDone: false,
    reservationRequestError: null,
    getReservationInfoDone: false,
    getReservationInfo: null,
    getReservationInfoError: null,
    reservationAcceptedDone: false,
    reservationAccepted: null,
    reservationAcceptedError: null,
    reservationRejectedDone: false,
    reservationRejectedError: null,
    reservationComplete: null,
    reservationCompleteError: null,
};

/* ------- action 상수 ------ */

// 어시스턴트 이름, 지역, 시급, 요일 (가능한 날짜), 시간 (가능한 시간대 - 오전,오후)
export const GET_SERVICE_INFO_REQUEST = 'GET_SERVICE_INFO_REQUEST';
export const GET_SERVICE_INFO_SUCCESS = 'GET_SERVICE_INFO_SUCCESS';
export const GET_SERVICE_INFO_FAILURE = 'GET_SERVICE_INFO_FAILURE';

// 후기
export const LOAD_FIRST_REVIEWS_REQUEST = 'LOAD_FIRST_REVIEWS_REQUEST';
export const LOAD_FIRST_REVIEWS_SUCCESS = 'LOAD_FIRST_REVIEWS_SUCCESS';
export const LOAD_FIRST_REVIEWS_FAILURE = 'LOAD_FIRST_REVIEWS_FAILURE';

export const LOAD_MORE_REVIEWS_REQUEST = 'LOAD_MORE_REVIEWS_REQUEST';
export const LOAD_MORE_REVIEWS_SUCCESS = 'LOAD_MORE_REVIEWS_SUCCESS';
export const LOAD_MORE_REVIEWS_FAILURE = 'LOAD_MORE_REVIEWS_FAILURE';

// 모든 서비스 정보
export const LOAD_ALL_SERVICES_REQUEST = 'LOAD_ALL_SERVICES_REQUEST';
export const LOAD_ALL_SERVICES_SUCCESS = 'LOAD_ALL_SERVICES_SUCCESS';
export const LOAD_ALL_SERVICES_FAILURE = 'LOAD_ALL_SERVICES_FAILURE';

// 날짜, 지역, 시간 (오전/오후), 픽업장소, 병원, 소요 시간(ex. 3시간) post 요청
export const CREATE_RESERVATION_REQUEST = 'CREATE_RESERVATION_REQUEST';
export const CREATE_RESERVATION_SUCCESS = 'CREATE_RESERVATION_SUCCESS';
export const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';

// 날짜, 시간 (오전/오후), 픽업장소, 병원, 소요 시간(ex. 3시간)
export const GET_ALL_RESERVATIONS_REQUEST = 'GET_ALL_RESERVATIONS_REQUEST';
export const GET_ALL_RESERVATIONS_SUCCESS = 'GET_ALL_RESERVATIONS_SUCCESS';
export const GET_ALL_RESERVATIONS_FAILURE = 'GET_ALL_RESERVATIONS_FAILURE';

export const GET_RESERVATION_INFO_REQUEST = 'GET_RESERVATION_INFO_REQUEST';
export const GET_RESERVATION_INFO_SUCCESS = 'GET_RESERVATION_INFO_SUCCESS';
export const GET_RESERVATION_INFO_FAILURE = 'GET_RESERVATION_INFO_FAILURE';

export const RESERVATION_ACCEPT_REQUEST = 'RESERVATION_ACCEPT_REQUEST';
export const RESERVATION_ACCEPT_SUCCESS = 'RESERVATION_ACCEPT_SUCCESS';
export const RESERVATION_ACCEPT_FAILURE = 'RESERVATION_ACCEPT_FAILURE';

export const RESERVATION_REJECT_REQUEST = 'RESERVATION_REJECT_REQUEST';
export const RESERVATION_REJECT_SUCCESS = 'RESERVATION_REJECT_SUCCESS';
export const RESERVATION_REJECT_FAILURE = 'RESERVATION_REJECT_FAILURE';

// 결제 결과
export const CHECK_OUT_REQUEST = 'CHECK_OUT_REQUEST';
export const CHECK_OUT_SUCCESS = 'CHECK_OUT_SUCCESS';
export const CHECK_OUT_FAILURE = 'CHECK_OUT_FAILURE';

/* ------- reducer ------ */
const reducer = (state = initialState, action: IActionsService) =>
    Produce(state, (draft: ServiceState) => {
        switch (action.type) {
            // case LOAD_ALL_SERVICES_REQUEST:
            //     draft.loadAllServicesLoading = true;
            //     draft.loadAllServicesDone = false;
            //     draft.loadAllServicesError = null;
            //     break;
            // case LOAD_ALL_SERVICES_SUCCESS:
            //     draft.loadAllServicesLoading = false;
            //     draft.loadAllServicesDone = true;
            //     draft.services = action.payload;
            //     break;
            // case LOAD_ALL_SERVICES_FAILURE:
            //     draft.loadAllServicesLoading = false;
            //     draft.loadAllServicesError = action.error;
            //     break;
            case GET_SERVICE_INFO_REQUEST:
                draft.getSingleServiceLoading = true;
                draft.getSingleServiceDone = false;
                draft.getSingleServiceError = null;
                break;
            case GET_SERVICE_INFO_SUCCESS:
                console.log(action.payload);
                draft.getSingleServiceLoading = false;
                draft.getSingleServiceDone = true;
                draft.service = action.payload.service;
                break;
            case GET_SERVICE_INFO_FAILURE:
                draft.getSingleServiceDone = false;
                draft.getSingleServiceError = action.error;
                break;
            case LOAD_FIRST_REVIEWS_REQUEST:
                draft.loadFirstReviewsLoading = true;
                draft.loadFirstReviewsDone = false;
                draft.loadFirstReviewsError = null;
                break;
            case LOAD_FIRST_REVIEWS_SUCCESS:
                draft.loadFirstReviewsLoading = false;
                draft.loadFirstReviewsDone = true;
                draft.reviews = action.payload.reviews;
                break;
            case LOAD_FIRST_REVIEWS_FAILURE:
                draft.loadFirstReviewsLoading = false;
                draft.loadFirstReviewsError = action.error;
                break;
            case LOAD_MORE_REVIEWS_REQUEST:
                draft.loadMoreReviewsLoading = true;
                draft.loadMoreReviewsDone = false;
                draft.loadMoreReviewsError = null;
                break;
            case LOAD_MORE_REVIEWS_SUCCESS:
                draft.loadMoreReviewsLoading = false;
                draft.loadMoreReviewsDone = true;
                draft.reviews = action.payload.reviews;
                break;
            case LOAD_MORE_REVIEWS_FAILURE:
                draft.loadMoreReviewsLoading = false;
                draft.getSingleServiceError = action.error;
                break;
            case CREATE_RESERVATION_REQUEST:
                draft.reservationRequestDone = false;
                draft.reservationRequestError = null;
                break;
            case CREATE_RESERVATION_SUCCESS:
                console.log(action.payload);
                draft.reservationRequestDone = true;
                // draft.reservationRequests = action.payload.order;
                break;
            case CREATE_RESERVATION_FAILURE:
                draft.reservationRequestError = action.error;
                break;
            case GET_RESERVATION_INFO_REQUEST:
                draft.getReservationInfoDone = false;
                draft.getReservationInfo = null;
                draft.getReservationInfoError = null;
                break;
            case GET_RESERVATION_INFO_SUCCESS:
                console.log(action.payload);
                draft.getReservationInfoDone = true;
                draft.getReservationInfo = action.payload.order;
                break;
            case GET_RESERVATION_INFO_FAILURE:
                draft.getReservationInfoError = action.error;
                break;
            case RESERVATION_ACCEPT_REQUEST:
                draft.reservationAccepted = null;
                draft.reservationAcceptedError = null;
                break;
            case RESERVATION_ACCEPT_SUCCESS:
                console.log(action.payload);
                draft.reservationAcceptedDone = true;
                draft.reservationAccepted = action.payload.order;
                break;
            case RESERVATION_ACCEPT_FAILURE:
                draft.reservationAcceptedError = action.error;
                break;
            case RESERVATION_REJECT_REQUEST:
                draft.reservationRejectedDone = false;
                draft.reservationRejectedError = null;
                break;
            case RESERVATION_REJECT_SUCCESS:
                draft.reservationRejectedDone = true;
                break;
            case RESERVATION_REJECT_FAILURE:
                draft.reservationRejectedError = action.error;
                break;
            default:
                break;
        }
    });

export default reducer;
