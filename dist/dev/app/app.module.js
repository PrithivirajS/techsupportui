"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var login_module_1 = require('./login/login.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var shared_module_1 = require('./shared/shared.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes),
                login_module_1.LoginModule,
                dashboard_module_1.DashboardModule,
                shared_module_1.SharedModule.forRoot()
            ],
            declarations: [app_component_1.AppComponent],
            providers: [{
                    provide: common_1.APP_BASE_HREF,
                    useValue: '/'
                }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsaUNBQThCLDJCQUEyQixDQUFDLENBQUE7QUFDMUQsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsdUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLDJCQUF1QixjQUFjLENBQUMsQ0FBQTtBQUd0Qyw2QkFBNEIsc0JBQXNCLENBQUMsQ0FBQTtBQUNuRCxpQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUMvRCw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQXFCdEQ7SUFBQTtJQUF5QixDQUFDO0lBbEIxQjtRQUFDLGVBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixnQ0FBYTtnQkFDYixpQkFBVTtnQkFDVixxQkFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2dCQUM1QiwwQkFBVztnQkFDWCxrQ0FBZTtnQkFDZiw0QkFBWSxDQUFDLE9BQU8sRUFBRTthQUN0QjtZQUNELFlBQVksRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDNUIsU0FBUyxFQUFFLENBQUM7b0JBQ1gsT0FBTyxFQUFFLHNCQUFhO29CQUN0QixRQUFRLEVBQUUsaUJBQWlCO2lCQUMzQixDQUFDO1lBQ0YsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUV6QixDQUFDOztpQkFBQTtJQUV1QixnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixpQkFBUyxZQUFJLENBQUEiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XG5cblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tICcuL2xvZ2luL2xvZ2luLm1vZHVsZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRCcm93c2VyTW9kdWxlLFxuXHRcdEh0dHBNb2R1bGUsXG5cdFx0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcblx0XHRMb2dpbk1vZHVsZSxcblx0XHREYXNoYm9hcmRNb2R1bGUsXG5cdFx0U2hhcmVkTW9kdWxlLmZvclJvb3QoKVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuXHRwcm92aWRlcnM6IFt7XG5cdFx0cHJvdmlkZTogQVBQX0JBU0VfSFJFRixcblx0XHR1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcblx0fV0sXG5cdGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cblxufSlcblxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
