(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService','menuItems'];
    function MyInfoController(MenuService, menuItems) {
        let ctrl = this;
        let service = MenuService;
        if (service.user === undefined){
            ctrl.signed = false;
            console.log(menuItems.menu_items);

        }else{
            ctrl.signed = true;

            ctrl.user = service.user;
            console.log(ctrl.user.dish);

            ctrl.dishes = menuItems.menu_items;
            for (let i = ctrl.dishes.length - 1; i >= 0; i--) {
                if(ctrl.dishes[i].short_name.indexOf(ctrl.user.dish) !== -1){
                    ctrl.dish = ctrl.dishes[i];
                }
            }
            console.log(ctrl.dish);
        }
    }
})();
