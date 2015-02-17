module Service {
    var BaseUrl = 'http://localhost:7777';
    export function GetUsers($http: ng.IHttpService, source: User[]) {
        var self = this;
        $http.get(BaseUrl + '/').
            success(function (data: User[]) {
            angular.copy(data, source);
        }).
            error(function (data, status) {
            alert('Error retrieving data');
        });
    }
} 