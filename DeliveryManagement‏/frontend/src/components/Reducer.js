//reducer is for How the STATE should change
import * as actions from './actionTypes';
import { getLastFocusable } from '@fluentui/react';
const initialState = {
    user: {},
}
//normally use ES6 default argument syntax to provide initial state
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOGIN_USER:
            return {
                ...state,
                user: action.obj

            };
        case actions.SIGHN_UP_USER:
            return {
                ...state,
                user: action.obj
            };
            return state;

    }
}