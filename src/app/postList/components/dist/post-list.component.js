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
var post_list_store_1 = require("../store/post-list.store");
var PostListComponent = /** @class */ (function () {
    function PostListComponent(store) {
        this.store = store;
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.data = this.store.select(post_list_store_1.selectData);
        //   this.store.dispatch(loadData());
    };
    ;
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
