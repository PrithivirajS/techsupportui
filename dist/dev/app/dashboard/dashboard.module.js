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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var home_module_1 = require('./home/home.module');
var blankPage_module_1 = require('./blank-page/blankPage.module');
var bsComponent_module_1 = require('./bs-component/bsComponent.module');
var rto_module_1 = require('./rto/rto.module');
var courier_module_1 = require('./courier/courier.module');
var cancelled_module_1 = require('./cancelled/cancelled.module');
var dashboard_component_1 = require('./dashboard.component');
var index_1 = require('../shared/index');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                home_module_1.HomeModule,
                bsComponent_module_1.BSComponentModule,
                rto_module_1.RTOComponentModule,
                courier_module_1.CourierComponentModule,
                cancelled_module_1.CancelledComponentModule,
                blankPage_module_1.BlankPageModule,
            ],
            declarations: [dashboard_component_1.DashboardComponent, index_1.SidebarComponent],
            exports: [dashboard_component_1.DashboardComponent, index_1.SidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHVCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBRS9DLDRCQUEyQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ2hELGlDQUFnQywrQkFBK0IsQ0FBQyxDQUFBO0FBQ2hFLG1DQUFrQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3RFLDJCQUFtQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQ3RELCtCQUF3QywwQkFBMEIsQ0FBQyxDQUFBO0FBQ25FLGlDQUF5Qyw4QkFBOEIsQ0FBQyxDQUFBO0FBRXhFLG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBRTNELHNCQUFpQyxpQkFBaUIsQ0FBQyxDQUFBO0FBaUJuRDtJQUFBO0lBQStCLENBQUM7SUFmaEM7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wscUJBQVk7Z0JBQ2YscUJBQVk7Z0JBQ1osd0JBQVU7Z0JBQ1Ysc0NBQWlCO2dCQUNoQiwrQkFBa0I7Z0JBQ2xCLHVDQUFzQjtnQkFDdEIsMkNBQXdCO2dCQUN4QixrQ0FBZTthQUNoQjtZQUNELFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLHdCQUFnQixDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLHdCQUFnQixDQUFDO1NBQ2xELENBQUM7O3VCQUFBO0lBRTZCLHNCQUFDO0FBQUQsQ0FBL0IsQUFBZ0MsSUFBQTtBQUFuQix1QkFBZSxrQkFBSSxDQUFBIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBCbGFua1BhZ2VNb2R1bGUgfSBmcm9tICcuL2JsYW5rLXBhZ2UvYmxhbmtQYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBCU0NvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vYnMtY29tcG9uZW50L2JzQ29tcG9uZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBSVE9Db21wb25lbnRNb2R1bGUgfSBmcm9tICcuL3J0by9ydG8ubW9kdWxlJztcbmltcG9ydCB7IENvdXJpZXJDb21wb25lbnRNb2R1bGUgfSBmcm9tICAnLi9jb3VyaWVyL2NvdXJpZXIubW9kdWxlJztcbmltcG9ydCB7IENhbmNlbGxlZENvbXBvbmVudE1vZHVsZSB9IGZyb20gJy4vY2FuY2VsbGVkL2NhbmNlbGxlZC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICBcdFJvdXRlck1vZHVsZSxcbiAgICBcdEhvbWVNb2R1bGUsXG4gICAgXHRCU0NvbXBvbmVudE1vZHVsZSxcbiAgICAgIFJUT0NvbXBvbmVudE1vZHVsZSxcbiAgICAgIENvdXJpZXJDb21wb25lbnRNb2R1bGUsXG4gICAgICBDYW5jZWxsZWRDb21wb25lbnRNb2R1bGUsXG4gICAgICBCbGFua1BhZ2VNb2R1bGUsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFtEYXNoYm9hcmRDb21wb25lbnQsIFNpZGViYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHsgfVxuIl19
