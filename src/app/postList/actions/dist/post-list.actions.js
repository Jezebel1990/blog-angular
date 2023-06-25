"use strict";
exports.__esModule = true;
exports.LoadDataFailure = exports.LoadDataSuccess = exports.LoadDataBegin = exports.PostListActions = void 0;
;
var PostListActions;
(function (PostListActions) {
    PostListActions["LoadDataBegin"] = "[Data] Load data begin";
    PostListActions["LoadDataSuccess"] = "[Data] Load data success";
    PostListActions["LoadDataFailure"] = "[Data] Load data failure";
})(PostListActions = exports.PostListActions || (exports.PostListActions = {}));
var LoadDataBegin = /** @class */ (function () {
    function LoadDataBegin() {
        this.type = PostListActions.LoadDataBegin;
    }
    return LoadDataBegin;
}());
exports.LoadDataBegin = LoadDataBegin;
var LoadDataSuccess = /** @class */ (function () {
    function LoadDataSuccess(payload) {
        this.payload = payload;
        this.type = PostListActions.LoadDataSuccess;
    }
    return LoadDataSuccess;
}());
exports.LoadDataSuccess = LoadDataSuccess;
var LoadDataFailure = /** @class */ (function () {
    function LoadDataFailure(payload) {
        this.payload = payload;
        this.type = PostListActions.LoadDataFailure;
    }
    return LoadDataFailure;
}());
exports.LoadDataFailure = LoadDataFailure;
