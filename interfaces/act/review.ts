import {
    loadFirstReviewRequest,
    loadFirstReviewSuccess,
    loadFirstReviewFailure,
    loadMoreReviewsRequest,
    loadMoreReviewsSuccess,
    loadMoreReviewsFailure,
} from '../../actions/review';

export type ReviewAction =
    | ReturnType<typeof loadFirstReviewRequest>
    | ReturnType<typeof loadFirstReviewSuccess>
    | ReturnType<typeof loadFirstReviewFailure>
    | ReturnType<typeof loadMoreReviewsRequest>
    | ReturnType<typeof loadMoreReviewsSuccess>
    | ReturnType<typeof loadMoreReviewsFailure>;
