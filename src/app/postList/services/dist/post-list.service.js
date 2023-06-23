"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostListSevice = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var PostListSevice = /** @class */ (function () {
    function PostListSevice(http) {
        this.http = http;
        this.data = [];
    }
    PostListSevice.prototype.getJSONData = function () {
        return this.http.get('assets/data.json').pipe(operators_1.delay(2000));
    };
    PostListSevice = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostListSevice);
    return PostListSevice;
}());
exports.PostListSevice = PostListSevice;
// Simula uma chamada assincrona com atraso de 2 segundos 
