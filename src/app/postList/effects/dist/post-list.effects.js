"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var operators_1 = require("rxjs/operators");
var DataActions = require("./../actions/post-list.actions");
var rxjs_1 = require("rxjs");
var DataEffects = /** @class */ (function () {
    function DataEffects(actions, dataService) {
        var _this = this;
        this.actions = actions;
        this.dataService = dataService;
        this.loadData = this.actions.pipe(effects_1.ofType(DataActions.ActionTypes.LoadDataBegin), operators_1.switchMap(function () {
            return _this.dataService.loadData().pipe(operators_1.map(function (data) { return new DataActions.LoadDataSuccess({ data: data }); }), operators_1.catchError(function (error) {
                return rxjs_1.of(new DataActions.LoadDataFailure({ error: error }));
            }));
        }));
    }
    __decorate([
        effects_1.Effect()
    ], DataEffects.prototype, "loadData");
    DataEffects = __decorate([
        core_1.Injectable()
    ], DataEffects);
    return DataEffects;
}());
exports.DataEffects = DataEffects;
