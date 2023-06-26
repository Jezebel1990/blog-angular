"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostListComponent = void 0;
var core_1 = require("@angular/core");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(dataService) {
        this.dataService = dataService;
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (data) {
            _this.dados = data;
            console.log(_this.dados);
        });
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'blogangular',
            templateUrl: './../components/post-list.component.html',
            styleUrls: ['./../components/post-list.component.css']
        })
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
