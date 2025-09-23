const ToDoList = {
  tasks: [
    {
       title: 'Помыть посуду',
       id: 1,
       priority: 1
    }
  ],
  Create: function (title, priority) {
    if (!title) {
      return false;
    }
    this.tasks.push({
        title: title,
        priority: priority ? priority : 0,
        // id: this.GetLastId() + 1
        id: Math.random()
      });
      return true;
  },
  Update: function (id, title, priority) {
    for (const taskInTasks of this.tasks) {
      if (taskInTasks.id === id) {
        taskInTasks.title = title ? title : taskInTasks.title;
        taskInTasks.priority = priority ? priority : taskInTasks.priority;
      }
    }
  },
  Delete: function (id) {
    const taskToDeleteIndex = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(taskToDeleteIndex, 1);
  },
  Sort: function () {
    this.tasks.sort((a, b) => a.priority - b.priority);
  },
  GetLastId: function () {
    return this.tasks.reduce((acc,val) => acc = val.id, 0);
  },
  Get: function (id) {
    return this.tasks.find(task => task.id === id);
  }
}

const newTask = {
    tasks: [
      { 
        id: 1, 
        title: 'тест', 
        description: 'описание',
        priority: 0
      }
    ]
}

const Create = ToDoList.Create.bind(newTask);
const Update = ToDoList.Update.bind(newTask);
const Delete = ToDoList.Delete.bind(newTask);
const Sort = ToDoList.Sort.bind(newTask);

console.log(newTask.tasks);
Create('Проснуться');
console.log(newTask.tasks);
Create('Попить чай', 2);
console.log(newTask.tasks);
Create('Умыться', 1);
console.log(newTask.tasks);
Update(3, '', 3);
console.log(newTask.tasks);
Delete(1);
console.log(newTask.tasks);
Sort();
console.log(newTask.tasks);