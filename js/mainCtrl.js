/**
 * Created by Michele on 7/28/2015.
 */
var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
    $scope.friends = ['Jane', 'Nate', 'Angela', 'Rachel', 'Brian', 'Jen'];
});