"use strict";
exports.__esModule = true;
exports.getAllItems = exports.getDataState = exports.metaReducers = void 0;
var store_1 = require("@ngrx/store");
var environment_1 = require("./../../../environments/environment");
var fromData = require("./post-list.reducer");
// export const reducers: ActionReducerMap<AppState> = {
//   data: fromData.reducer,
// };
exports.metaReducers = !environment_1.environment.production
    ? []
    : [];
exports.getDataState = function (state) { return state.data; };
exports.getAllItems = store_1.createSelector(exports.getDataState, fromData.getItems);
