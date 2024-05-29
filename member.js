function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'app/views/skills-member.html',
        controller: 'skillsMemberCtrl',
        controllerAs: 'vm',
        bindToController: true,
        scope : {
            member: '='
        }
    };
}