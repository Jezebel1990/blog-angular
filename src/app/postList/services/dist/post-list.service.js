"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostListService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var reducers_1 = require("../reducers");
var DataActions = require("./../actions/post-list.actions");
var PostListService = /** @class */ (function () {
    function PostListService(store, http) {
        this.store = store;
        this.http = http;
    }
    PostListService.prototype.loadData = function () {
        return this.http.get('assets/data.json').pipe(operators_1.delay(2000));
    };
    // Simula uma chamada assincrona com atraso de 2 segundos 
    PostListService.prototype.load = function () {
        this.store.dispatch(new DataActions.LoadDataBegin());
    };
    PostListService.prototype.getData = function () {
        return this.store.select(reducers_1.getDataState);
    };
    PostListService.prototype.getItems = function () {
        return this.store.select(reducers_1.getAllItems);
    };
    PostListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostListService);
    return PostListService;
}());
exports.PostListService = PostListService;
