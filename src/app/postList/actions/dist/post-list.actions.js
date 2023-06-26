"use strict";
exports.__esModule = true;
exports.LoadDataFailure = exports.LoadDataSuccess = exports.LoadDataBegin = exports.ActionTypes = void 0;
;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LoadDataBegin"] = "[Data] Load data begin";
    ActionTypes["LoadDataSuccess"] = "[Data] Load data success";
    ActionTypes["LoadDataFailure"] = "[Data] Load data failure";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var LoadDataBegin = /** @class */ (function () {
    function LoadDataBegin() {
        this.type = ActionTypes.LoadDataBegin;
    }
    return LoadDataBegin;
}());
exports.LoadDataBegin = LoadDataBegin;
var LoadDataSuccess = /** @class */ (function () {
    function LoadDataSuccess(payload) {
        this.payload = payload;
        this.type = ActionTypes.LoadDataSuccess;
    }
    return LoadDataSuccess;
}());
exports.LoadDataSuccess = LoadDataSuccess;
var LoadDataFailure = /** @class */ (function () {
    function LoadDataFailure(payload) {
        this.payload = payload;
        this.type = ActionTypes.LoadDataFailure;
    }
    return LoadDataFailure;
}());
exports.LoadDataFailure = LoadDataFailure;
