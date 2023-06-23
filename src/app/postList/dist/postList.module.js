"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostListModule = void 0;
var core_1 = require("@angular/core");
var post_list_reducer_1 = require("./reducers/post-list.reducer");
var store_1 = require("@ngrx/store");
var post_list_service_1 = require("./services/post-list.service");
var effects_1 = require("@ngrx/effects");
var post_list_effects_1 = require("./effects/post-list.effects");
var PostListModule = /** @class */ (function () {
    function PostListModule() {
    }
    PostListModule = __decorate([
        core_1.NgModule({
            imports: [
                store_1.StoreModule.forFeature('data', post_list_reducer_1.postListReducer),
                effects_1.EffectsModule.forFeature([post_list_effects_1.PostListEffects])
            ],
            providers: [post_list_service_1.PostListSevice],
            declarations: []
        })
    ], PostListModule);
    return PostListModule;
}());
exports.PostListModule = PostListModule;
