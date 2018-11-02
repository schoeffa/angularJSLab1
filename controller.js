"use strict";
function TodoController() {
    const vm = this;
    vm.todolist = [{
        task: "Walk the dog.",
        completed: false
    },{
        task: "Go to the store.",
        completed: true
    },{
        task: "Get gas.",
        completed: false
    },{
        task: "Wash the car.",
        completed: false
    }
];
    vm.addToDo = (newToDo) => {
        vm.todolist.push({
            task: angular.copy(newToDo),
            completed: false
        });

    };
    
    vm.removeToDo = (index) => {
        vm.todolist.splice(index, 1);
    };

    vm.completeTask = (index) => {
        vm.todolist[index].completed = true;
    };
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);