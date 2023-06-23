"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var list_1 = require("@angular/material/list");
var button_1 = require("@angular/material/button");
var card_1 = require("@angular/material/card");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var post_list_effects_1 = require("./postList/effects/post-list.effects");
var post_list_component_1 = require("./postList/components/post-list.component");
var common_1 = require("@angular/common");
var post_list_service_1 = require("./postList/services/post-list.service");
var http_1 = require("@angular/common/http");
var postList_module_1 = require("../../src/app/postList/postList.module");
var home_component_1 = require("./postList/home/home.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                post_list_component_1.PostListComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                http_1.HttpClientModule,
                platform_browser_1.BrowserModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                card_1.MatCardModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                list_1.MatListModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                common_1.CommonModule,
                postList_module_1.PostListModule,
                store_1.StoreModule.forRoot({}),
                effects_1.EffectsModule.forRoot([post_list_effects_1.PostListEffects]),
            ],
            providers: [post_list_service_1.PostListSevice],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
