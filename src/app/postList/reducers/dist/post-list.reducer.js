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
exports.postListReducer = exports.initialState = void 0;
var store_1 = require("@ngrx/store");
var PostListActions = require("../actions/post-list.actions");
exports.initialState = {
    data: null,
    error: null
};
exports.postListReducer = store_1.createReducer(exports.initialState, store_1.on(PostListActions.loadDataSuccess, function (state, _a) {
    var data = _a.data;
    return (__assign(__assign({}, state), { data: data, error: null }));
}), store_1.on(PostListActions.loadDataFailure, function (state, _a) {
    var error = _a.error;
    return (__assign(__assign({}, state), { data: null, error: error }));
}));
