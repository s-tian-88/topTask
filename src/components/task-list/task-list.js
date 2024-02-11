import './task-list.css';
import data from './tasks.json';

export default class TaskList {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }

    this._element = element;
    this._tasks = data;
  }

  renderItem(task) {
    return `\
    <li class="task-item">\
      <div class="task-main">\
        <span class="task-item-id">${task.id}</span>\
        <span class="task-item-user-id">${task.userId}</span>\
        <span class="task-item-title">${task.title}</span>\
        <button class="btn upBtn">Up</button>
        <button class="btn downBtn">Down</button>
        <button class="btn pinBtn">Pin</button>
        <button class="btn delBtn">Del</button>
      </div>\
      <div class="task-description hidden">Подробности...</div>\
    </li>\
    `
  }

  renderTasks () {
    this._tasks.forEach(task => {
      const itemHtml = this.renderItem(task);

      this._element.insertAdjacentHTML('beforeend', itemHtml);
    });
  }
}

