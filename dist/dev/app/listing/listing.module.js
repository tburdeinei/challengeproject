"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var listing_component_1 = require("./listing.component");
var listing_routing_module_1 = require("./listing-routing.module");
var shared_module_1 = require("../shared/shared.module");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var ListingModule = (function () {
    function ListingModule() {
    }
    ListingModule = __decorate([
        core_1.NgModule({
            imports: [listing_routing_module_1.HomeRoutingModule, shared_module_1.SharedModule],
            declarations: [listing_component_1.ListingComponent],
            exports: [listing_component_1.ListingComponent],
            providers: [name_list_service_1.NameListService]
        })
    ], ListingModule);
    return ListingModule;
}());
exports.ListingModule = ListingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saXN0aW5nL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLHlEQUF1RDtBQUN2RCxtRUFBNkQ7QUFDN0QseURBQXVEO0FBQ3ZELDJFQUF3RTtBQVF4RTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQU56QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQywwQ0FBaUIsRUFBRSw0QkFBWSxDQUFDO1lBQzFDLFlBQVksRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQ2hDLE9BQU8sRUFBRSxDQUFDLG9DQUFnQixDQUFDO1lBQzNCLFNBQVMsRUFBRSxDQUFDLG1DQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQTlCLEFBQThCLElBQUE7QUFBakIsc0NBQWEiLCJmaWxlIjoiYXBwL2xpc3RpbmcvbGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xpc3Rpbmctcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIb21lUm91dGluZ01vZHVsZSwgU2hhcmVkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTGlzdGluZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMaXN0aW5nQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHsgfVxuIl19
