export interface Review {
    _id: string;
    content: string;
    writtenBy: string;
    service: string;
    createdAt: Date;
}

export type ReviewState = {
    reviews: Review[] | null;
    loadFirstReviewsLoading: boolean;
    loadFirstReviewsDone: boolean;
    loadFirstReviewsError: null | string;
    loadMoreReviewsLoading: boolean;
    loadMoreReviewsDone: boolean;
    loadMoreReviewsError: null | string;
};
