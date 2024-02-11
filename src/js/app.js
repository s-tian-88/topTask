import AddWidget from '../components/add-widget/add-widget';
import FilterWidget from '../components/filter-widget/filter-widget';

const container = document.createElement('div');
container.classList.add('tasks-container');
document.body.appendChild(container);

const addWidget = new AddWidget(container);
const filterWidget = new FilterWidget(container);
