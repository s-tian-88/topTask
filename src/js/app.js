import FilterWidget from '../components/filter-widget/filter-widget';
import TaskList from '../components/task-list/task-list';

const filterWidget = new FilterWidget('.filter-widget');
const allTaskList = new TaskList('.all-tasks-list');
allTaskList.renderTasks();
