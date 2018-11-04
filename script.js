/// <reference path="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"/>
var myApp = angular
                 .module("myModule", [])
                 .controller("myController" , function($scope) {
                            var employee = {
                             FirstName: "Kedar",
                             LastName: "Erande",
                             Gender: "Male"
                             };
                           $scope.employee = employee;
                       });

