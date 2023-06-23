"use strict";
exports.__esModule = true;
exports.loadDataFailure = exports.loadDataSuccess = exports.loadData = void 0;
var store_1 = require("@ngrx/store");
exports.loadData = store_1.createAction('[Data] Load PostList');
exports.loadDataSuccess = store_1.createAction('[Data] Load Data Success', store_1.props());
exports.loadDataFailure = store_1.createAction('[Data] Load Posts Failure', store_1.props());
