import './add-css.css'

export default class AddWidget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }

    this.container = container;

    this.start();

  }

  start () {
    console.log('Start');
    this.container.appendChild(this.createDOMElement());
  }

  createDOMElement () {
    const addContainerEl = document.createElement('div');
    addContainerEl.classList.add('add-container');

    const addLabelEl = document.createElement('label');
    addLabelEl.textContent = 'Add task'
    addLabelEl.setAttribute('class', 'add-label');
    addLabelEl.setAttribute('for', 'add-input');

    const addInputEl = document.createElement('input');
    addInputEl.setAttribute('class', 'add-input');
    addInputEl.setAttribute('id', 'add-input');
    addInputEl.setAttribute('placeholder', 'Input task description...');

    const addButtonEl = document.createElement('button');
    addButtonEl.textContent = 'Add'
    addButtonEl.setAttribute('class', 'add-button');
    addButtonEl.addEventListener('click', this.addButtonClick);

    addContainerEl.appendChild(addLabelEl);
    addContainerEl.appendChild(addInputEl);
    addContainerEl.appendChild(addButtonEl);

    return addContainerEl;
  }

  addButtonClick (event) {
    console.log('add-button click')
  }

}
