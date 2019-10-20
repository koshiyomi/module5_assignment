(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);
    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
        let reg = this;

        reg.submit = function () {
            MenuService.user = reg.user;
            reg.completed = true;
        };
    }
})();
