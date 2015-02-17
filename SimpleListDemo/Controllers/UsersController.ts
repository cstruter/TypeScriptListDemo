interface IUserScope extends ng.IScope {
    Users: User[];
    user: User;
    showAddUserModal();
    showEditUserModal(user: User);
    deleteUser(index : number);
    saveUser();
}
class UsersController {
    private _activeUser: User = null;
    Users: User[] = [];
    constructor(private $scope: IUserScope, $http: ng.IHttpService) {
        var userModal = new Bootstrap.Modal('#userModal');
        var self = this;   
        $scope.Users = this.Users;
        $scope.showAddUserModal = function () {
            $scope.user = new User();
            userModal.Show();
            userModal.Title = 'Add User';
        }
        $scope.showEditUserModal = function (user: User) {
            userModal.Show();
            userModal.Title = 'Edit User';
            $scope.user = angular.copy(user);
            self._activeUser = user;
        }
        $scope.deleteUser = function (index : number) {
            $scope.Users.splice(index, 1);
        }
        $scope.saveUser = function () {
            if (self._activeUser != null) {
                angular.copy($scope.user, self._activeUser);
                self._activeUser = null;
            } else {
                $scope.Users.push($scope.user);
            }
            userModal.Hide();
        }
        Service.GetUsers($http, self.Users);
    }
}
CSTruter.controller('UsersController', UsersController);
 