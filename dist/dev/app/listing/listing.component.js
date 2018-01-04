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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var ListingComponent = (function () {
    function ListingComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = 'tburdeinei';
        this.followers = [];
    }
    ListingComponent.prototype.search = function () {
        var _this = this;
        this.nameListService.get(this.newName)
            .subscribe(function (login) { return _this.followers = login; }, function (error) { return _this.errorMessage = error; });
        return false;
    };
    ListingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-home',
            templateUrl: 'listing.component.html',
            styleUrls: ['listing.component.css'],
        }),
        __metadata("design:paramtypes", [name_list_service_1.NameListService])
    ], ListingComponent);
    return ListingComponent;
}());
exports.ListingComponent = ListingComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLDJFQUF3RTtBQVd4RTtJQVlFLDBCQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFWbkQsWUFBTyxHQUFHLFlBQVksQ0FBQztRQUV2QixjQUFTLEdBQVUsRUFBRSxDQUFDO0lBUWdDLENBQUM7SUFFdkQsaUNBQU0sR0FBTjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuQyxTQUFTLENBQ1IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssRUFBdEIsQ0FBc0IsRUFDL0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FDeEMsQ0FBQztRQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBckJVLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDckMsQ0FBQzt5Q0Fhb0MsbUNBQWU7T0FaeEMsZ0JBQWdCLENBdUI1QjtJQUFELHVCQUFDO0NBdkJELEFBdUJDLElBQUE7QUF2QlksNENBQWdCIiwiZmlsZSI6ImFwcC9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYW1lTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgdGhlIGxhenkgbG9hZGVkIEhvbWVDb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3RpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGlzdGluZy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdDb21wb25lbnQge1xuXG4gIG5ld05hbWUgPSAndGJ1cmRlaW5laSc7XG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBmb2xsb3dlcnM6IGFueVtdID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIEhvbWVDb21wb25lbnQgd2l0aCB0aGUgaW5qZWN0ZWRcbiAgICogTmFtZUxpc3RTZXJ2aWNlLlxuICAgKlxuICAgKiBAcGFyYW0ge05hbWVMaXN0U2VydmljZX0gbmFtZUxpc3RTZXJ2aWNlIC0gVGhlIGluamVjdGVkIE5hbWVMaXN0U2VydmljZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkge31cblxuICBzZWFyY2goKTogYm9vbGVhbiB7XG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0KHRoaXMubmV3TmFtZSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGxvZ2luID0+IHRoaXMuZm9sbG93ZXJzID0gbG9naW4sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxuICAgICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufVxuIl19
