"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getItems = exports.reducer = exports.initialState = void 0;
var fromData = require("./../actions/post-list.actions");
;
exports.initialState = {
    items: [],
    loading: false,
    error: null
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case fromData.ActionTypes.LoadDataBegin: {
            return __assign(__assign({}, state), { loading: true, error: null });
        }
        case fromData.ActionTypes.LoadDataSuccess: {
            return __assign(__assign({}, state), { loading: false, items: action.payload.data });
        }
        case fromData.ActionTypes.LoadDataFailure: {
            return __assign(__assign({}, state), { loading: false, error: action.payload.error });
        }
        default: {
            return state;
        }
    }
}
exports.reducer = reducer;
exports.getItems = function (state) { return state.items; };
