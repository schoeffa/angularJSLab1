"use strict";

function TodoController() {
    const vm = this;
    vm.todolist = [{
        task: "Walk the dog.",
        completed: false,
        edit: false
    }, {
        task: "Go to the store.",
        completed: true,
        edit: false
    }, {
        task: "Get gas.",
        completed: false,
        edit: false
    }, {
        task: "Wash the car.",
        completed: false,
        edit: false
    }];
    vm.addTask = (newToDo) => {
        vm.todolist.push({
            task: angular.copy(newToDo),
            completed: false
        });

        vm.todo = '';
    };

    vm.removeTask = (task) => {
        vm.todolist.splice(vm.todolist.indexOf(task), 1);
    };

    vm.completeTask = (task) => {
        task.completed = true;
    };

    //Only shows edit form if tasks are not completed
    vm.showEditForm = (task) => {
        if(!task.completed) {
            task.edit = true;
        }
    };

    //Accepts edits for task only if new edit has been entered
    vm.editTask = (item, taskEdit) => {
        if (taskEdit != '' && taskEdit != undefined) {
            console.log(taskEdit);
            item.task = taskEdit;
            item.edit = false;
            vm.newEdit = '';
        }
        else {
            item.edit = false;
            vm.newEdit = '';
        }
    };
}

angular
    .module("todoApp")
    .controller("TodoController", TodoController);