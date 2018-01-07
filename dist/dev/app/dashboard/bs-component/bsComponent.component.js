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
var http_service_1 = require('./http.service');
var BSComponentComponent = (function () {
    function BSComponentComponent(_httpservice) {
        this._httpservice = _httpservice;
    }
    BSComponentComponent.prototype.onget = function () {
        var _this = this;
        this._httpservice.getCurrentTime()
            .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error); }, function () { return console.log("finsihed request"); });
    };
    BSComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-component',
            templateUrl: './bs-component.component.html',
            providers: [http_service_1.HTTPService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HTTPService])
    ], BSComponentComponent);
    return BSComponentComponent;
}());
exports.BSComponentComponent = BSComponentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvYnMtY29tcG9uZW50L2JzQ29tcG9uZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBUTNDO0lBR0MsOEJBQXFCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUVqRCxvQ0FBSyxHQUFMO1FBQUEsaUJBT0M7UUFOQSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTthQUNoQyxTQUFTLENBQ1IsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQW5DLENBQW1DLEVBQzNDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFaLENBQVksRUFDckIsY0FBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsRUFBL0IsQ0FBK0IsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFuQkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2hCLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSwrQkFBK0I7WUFDOUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDOzs0QkFBQTtJQWVGLDJCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSw0QkFBb0IsdUJBYWhDLENBQUEiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9icy1jb21wb25lbnQvYnNDb21wb25lbnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hUVFBTZXJ2aWNlfSBmcm9tICcuL2h0dHAuc2VydmljZSc7XG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2JzLWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JzLWNvbXBvbmVudC5jb21wb25lbnQuaHRtbCcsXG5cdFx0cHJvdmlkZXJzOiBbSFRUUFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgQlNDb21wb25lbnRDb21wb25lbnQge1xuXHRnZXREYXRhOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHBzZXJ2aWNlOiBIVFRQU2VydmljZSl7fVxuXG5cdG9uZ2V0KCl7XG5cdFx0dGhpcy5faHR0cHNlcnZpY2UuZ2V0Q3VycmVudFRpbWUoKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0XHRkYXRhID0+IHRoaXMuZ2V0RGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuXHRcdFx0XHRcdGVycm9yID0+IGFsZXJ0KGVycm9yKSxcblx0XHRcdFx0XHQoKT0+Y29uc29sZS5sb2coXCJmaW5zaWhlZCByZXF1ZXN0XCIpXG5cdFx0XHQpO1xuXHR9XG59XG4iXX0=
