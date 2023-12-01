const {TodoList} = require('./todolist');
const TodoListMock = require('./todolist.mock');

describe('TodoList', () => {
    let todolist;

    beforeEach(() => {
        todolist = new TodoList();
    });

    afterEach(() => {
        todolist.clearTasks();
    });

    it('todolist should be empty', () => {
        expect(todolist.getTaskCount()).toBe(0);
    });

    it('todolist should add one item', () => {
        todolist.addTask({title: 'Task 1', id: 1});
        expect(todolist.getTaskCount()).toBe(1);
    });

    it('todolist should add three items', () => {
        todolist.addTask({title: 'Task 1', id: 1});
        todolist.addTask({title: 'Task 2', id: 2});
        todolist.addTask({title: 'Task 3', id: 3});
        expect(todolist.getTaskCount()).toBe(3);
    });

    it('todolist should add five items, later remove one', () => {
        expect.assertions(2);
        todolist.addTask({title: 'Task 1', id: 1});
        todolist.addTask({title: 'Task 2', id: 2});
        todolist.addTask({title: 'Task 3', id: 3});
        todolist.addTask({tiitle: 'Task 4', id: 4});
        todolist.addTask({title: 'Task 5', id: 5});
        todolist.removeTask(1);
        expect(todolist.getTaskCount()).toBe(4);
        expect(todolist.getTasks()).toEqual(TodoListMock.removeLastOne);
    });

    it('todolist should add five items, later remove the second item', () => {
        expect.assertions(2);
        todolist.addTask({title: 'Task 1', id: 1});
        todolist.addTask({title: 'Task 2', id: 2});
        todolist.addTask({title: 'Task 3', id: 3});
        todolist.addTask({tiitle: 'Task 4', id: 4});
        todolist.addTask({title: 'Task 5', id: 5});
        todolist.removeTask(2);
        expect(todolist.getTaskCount()).toBe(4);
        expect(todolist.getTasks()).toEqual(TodoListMock.secondItem);
    });

    it('todolist should add three items and remove the last one by title', () => {
        todolist.addTask({title: 'Task 1', id: 1});
        todolist.addTask({title: 'Task 2', id: 2});
        todolist.addTask({title: 'Task 3', id: 3});
        todolist.removeTaskByTitle('Task 3');
        expect(todolist.getTaskCount()).toBe(2);
    });

    it('todolist should add three items and remove the one by key value', () => {
        todolist.addTask({title: 'Task 1', id: 1});
        todolist.addTask({title: 'Task 2', id: 2});
        todolist.addTask({title: 'Task 3', id: 3});
        todolist.removeByKeyValue('title', 'Task 2');
        expect(todolist.getTasks()).toEqual(TodoListMock.byKeyValue);
    });

    it('todolist should mock data', () => {
        todolist.addTask({title: 'Task 1', id: 1});
        todolist.addTask({title: 'Task 2', id: 2});
        expect(todolist.getTasks()).toEqual(TodoListMock.mockFinal);
    });

});