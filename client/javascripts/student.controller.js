// student.controller.js
(function() {
    'use strict';

    angular
        .module('app')
        .controller('StudentController', StudentController);

    function StudentController() { 
        var vm = this;

        vm.students = (localStorage.getItem('students') !== null) ? JSON.parse(localStorage.getItem('students')) : [];
        vm.numberText = '';
        vm.nameText = '';
        vm.addressText = '';
        vm.phoneText = '';
        vm.gpaText = '';
        vm.planText = '';
        vm.levelText = '';
        vm.valid = 'false';
        vm.activeStudents = getNumOfActiveStudents();
        vm.inactiveStudents = getNumOfInactiveStudents();
        vm.showError = false;
        vm.errorMsg = '';
        
        // Functions
        vm.addStudent = addStudent;
        vm.checkInput = checkInput;
        vm.clearStudentInput = clearStudentInput;
        vm.getNumOfActiveStudents = getNumOfActiveStudents;
        vm.archiveStudents = archiveStudents;
        vm.toggleActive = toggleActive;
        vm.loadStudents = loadStudents;
        vm.getNumOfInactiveStudents = getNumOfInactiveStudents;
    
        function addStudent() {
            vm.showError = false;
            vm.errorMsg = '';
            vm.checkInput();
            if(vm.valid == true) {
                vm.students.push( {number:vm.numberText, name:vm.nameText, address:vm.addressText, phone:vm.phoneText, gpa:vm.gpaText, plan:vm.planText, level:vm.levelText, active:true }) ;
                vm.clearStudentInput();
                vm.archiveStudents();
            }
            else {
                vm.showError = true;
            }
        }

        function archiveStudents() { 
            var oldStudents = vm.students;
            localStorage.setItem('students', JSON.stringify(vm.students));
            vm.loadStudents();
        }

        function clearStudentInput() {
            vm.numberText = '';
            vm.nameText = '';
            vm.addressText = '';
            vm.phoneText = '';
            vm.gpaText = '';
            vm.planText = '';
            vm.levelText = '';
        }

        function checkInput() {
            vm.valid = true;
            if(vm.numberText == '' || vm.nameText == '' || vm.addressText == '' || vm.phoneText == '' || vm.gpaText == '' || vm.planText == '' || vm.levelText == '' ) {
                vm.valid = false;
                vm.errorMsg = "Error: All input fields must be used"
            }

            if (/[a-zA-Z]/.test(vm.numberText)) {
                vm.valid = false;
                vm.errorMsg = "Error: ID number cannot contain letters"
            }

            if (/[0-9]/.test(vm.nameText)) {
                vm.valid = false;
                vm.errorMsg = "Error: Name cannot contain a number"
            }

            if (/[a-zA-Z]/.test(vm.phoneText)) {
                vm.valid = false;
                vm.errorMsg = "Error: Phone number cannot contain letters"
            }

            if (/[a-zA-Z]/.test(vm.gpaText)) {
                vm.valid = false;
                vm.errorMsg = "Error: GPA cannot contain letters"
            }

            if (/[0-9]/.test(vm.planText)) {
                vm.valid = false;
                vm.errorMsg = "Error: Course plan cannot contain a number"
            }

            if (/[0-9]/.test(vm.planText)) {
                vm.valid = false;
                vm.errorMsg = "Error: Level cannot contain a number"
            }

            console.log(vm.valid);
            console.log(vm.errorMsg);
        }

        function getNumOfActiveStudents() {
            var count = 0;

            angular.forEach(vm.students, function(student) {
                count += student.active ? 1 : 0;
            });

            return count;
        }

        function getNumOfInactiveStudents() {
            var count = 0;
            
            angular.forEach(vm.students, function(student) {
                count += student.active ? 0 : 1;
            });

            return count;  
        }

        function loadStudents() {
            vm.students = (localStorage.getItem('students') !== null) ? JSON.parse(localStorage.getItem('students')) : [];
            vm.activeStudents = getNumOfActiveStudents();
            vm.inactiveStudents = getNumOfInactiveStudents();
        }

        function toggleActive(list) {
            var tempStudents = JSON.parse(localStorage.getItem('students'));

            angular.forEach(tempStudents, function(student) {
                if(angular.equals(list.student.number, student.number) && angular.equals(list.student.name,student.name)) {
                    student.active = !student.active;

                    localStorage.setItem("students", JSON.stringify(tempStudents));
                }

                vm.loadStudents();
            });
        }
    }
})();