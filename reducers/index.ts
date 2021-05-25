import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, Reducer, AnyAction } from 'redux';
import user from './user';
import service from './service';
// import { CombinedState } from '../store/configureStore';

const rootReducer: Reducer<any, AnyAction> = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                user,
                service,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;
