class TodoList {

    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks = [...this.tasks, task];
    }

    removeTask(id) {
        this.tasks = this.tasks
            .filter(
                (task) => id !== task.id
            );
    }

    removeTaskByTitle(title) {
        this.tasks = this.tasks
            .filter(
                (task) => title !== task.title
            );
    }

    removeByKeyValue(key, value) {
        this.tasks = this.tasks
            .filter(
                (task) => value !== task[key]
            );
    }

    getTasks() {
        return this.tasks;
    }

    getTaskCount() {
        return this.tasks.length;
    }

    clearTasks() {
        this.tasks = [];
    }
}

module.exports = {TodoList};
