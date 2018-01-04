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
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var NameListService = (function () {
    function NameListService(http) {
        this.http = http;
    }
    NameListService.prototype.get = function (username) {
        return this.http.get('https://api.github.com/users/' + username + '/followers')
            .catch(this.handleError);
    };
    NameListService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    NameListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], NameListService);
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUNsRCw4Q0FBNkM7QUFPN0M7SUFPRSx5QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFHLENBQUM7SUFNeEMsNkJBQUcsR0FBSCxVQUFJLFFBQVE7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUUsUUFBUSxHQUFFLFlBQVksQ0FBQzthQUU1RCxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFLTyxxQ0FBVyxHQUFuQixVQUFxQixLQUFVO1FBRzdCLElBQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPO1lBQzVDLEtBQUssQ0FBQyxNQUFNLEdBQU0sS0FBSyxDQUFDLE1BQU0sV0FBTSxLQUFLLENBQUMsVUFBWSxHQUFHLGNBQWMsQ0FBQztRQUMxRSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBN0JVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FRZSxpQkFBVTtPQVB6QixlQUFlLENBOEIzQjtJQUFELHNCQUFDO0NBOUJELEFBOEJDLElBQUE7QUE5QlksMENBQWUiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG4vLyBpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJzsgIC8vIGZvciBkZWJ1Z2dpbmdcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHByb3ZpZGVzIHRoZSBOYW1lTGlzdCBzZXJ2aWNlIHdpdGggbWV0aG9kcyB0byByZWFkIG5hbWVzIGFuZCBhZGQgbmFtZXMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYW1lTGlzdFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IE5hbWVMaXN0U2VydmljZSB3aXRoIHRoZSBpbmplY3RlZCBIdHRwQ2xpZW50LlxuICAgKiBAcGFyYW0ge0h0dHBDbGllbnR9IGh0dHAgLSBUaGUgaW5qZWN0ZWQgSHR0cENsaWVudC5cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBmb3IgdGhlIEhUVFAgR0VUIHJlcXVlc3QgZm9yIHRoZSBKU09OIHJlc291cmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmdbXX0gVGhlIE9ic2VydmFibGUgZm9yIHRoZSBIVFRQIHJlcXVlc3QuXG4gICAqL1xuICBnZXQodXNlcm5hbWUpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJysgdXNlcm5hbWUgKycvZm9sbG93ZXJzJylcbiAgICAvLyAgICAgICAgICAgICAgLmRvKGRhdGEgPT4gY29uc29sZS5sb2coJ3NlcnZlciBkYXRhOicsIGRhdGEpKSAgLy8gZGVidWdcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBIYW5kbGUgSFRUUCBlcnJvclxuICAgICovXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgKGVycm9yOiBhbnkpIHtcbiAgICAvLyBJbiBhIHJlYWwgd29ybGQgYXBwLCB3ZSBtaWdodCB1c2UgYSByZW1vdGUgbG9nZ2luZyBpbmZyYXN0cnVjdHVyZVxuICAgIC8vIFdlJ2QgYWxzbyBkaWcgZGVlcGVyIGludG8gdGhlIGVycm9yIHRvIGdldCBhIGJldHRlciBtZXNzYWdlXG4gICAgY29uc3QgZXJyTXNnID0gKGVycm9yLm1lc3NhZ2UpID8gZXJyb3IubWVzc2FnZSA6XG4gICAgICBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJNc2cpO1xuICB9XG59XG5cbiJdfQ==
