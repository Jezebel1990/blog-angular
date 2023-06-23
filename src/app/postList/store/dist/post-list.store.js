"use strict";
exports.__esModule = true;
exports.PostListStore = exports.effects = exports.selectDataError = exports.selectData = exports.selectDataState = exports.reducers = void 0;
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var post_list_reducer_1 = require("../reducers/post-list.reducer");
var post_list_effects_1 = require("../effects/post-list.effects");
exports.reducers = {
    data: post_list_reducer_1.postListReducer
};
exports.selectDataState = store_1.createFeatureSelector('data');
exports.selectData = store_1.createSelector(exports.selectDataState, function (state) { return state.data; });
exports.selectDataError = store_1.createSelector(exports.selectDataState, function (state) { return state.error; });
exports.effects = [post_list_effects_1.PostListEffects];
exports.PostListStore = [
    store_1.StoreModule.forFeature('dataStore', exports.reducers),
    effects_1.EffectsModule.forFeature(exports.effects),
];
