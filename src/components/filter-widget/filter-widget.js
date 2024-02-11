import './filter-css.css';

export default class FilterWidget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }

    this.container = container;

    this.start();
  }

  start () {
    console.log('filter-widget start');
    this.container.appendChild(this.createDOMElement())
  }

  createDOMElement () {
    const filterContainerEl = document.createElement('div');
    filterContainerEl.classList.add('filter-container');

    const filterLabelEl = document.createElement('label');
    filterLabelEl.textContent = 'Filter task'
    filterLabelEl.classList.add('filter-label');
    filterLabelEl.setAttribute('for', 'filter-input');

    const filterInputEl = document.createElement('input');
    filterInputEl.classList.add('filter-input')
    filterInputEl.type = 'search';
    filterInputEl.id = 'filter-input';
    filterInputEl.placeholder = 'Search'

    filterContainerEl.appendChild(filterLabelEl);
    filterContainerEl.appendChild(filterInputEl);

    return filterContainerEl;
  }

}
