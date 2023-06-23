"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostListEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var PostListActions = require("../actions/post-list.actions");
var PostListEffects = /** @class */ (function () {
    function PostListEffects(actions$, postListService) {
        var _this = this;
        this.actions$ = actions$;
        this.postListService = postListService;
        this.loadData$ = effects_1.createEffect(function () {
            return _this.actions$.pipe(effects_1.ofType(PostListActions.loadData), operators_1.mergeMap(function () {
                return _this.postListService.getJSONData().pipe(operators_1.delay(2000), operators_1.map(function (data) { return PostListActions.loadDataSuccess({ data: data }); }), operators_1.catchError(function (error) { return rxjs_1.of(PostListActions.loadDataFailure({ error: error })); }));
            }));
        });
    }
    PostListEffects = __decorate([
        core_1.Injectable()
    ], PostListEffects);
    return PostListEffects;
}());
exports.PostListEffects = PostListEffects;
