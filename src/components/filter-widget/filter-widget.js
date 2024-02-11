export default class FilterWidget {
  constructor(element) {
    if (typeof element === 'string') {
      element = document.querySelector(element);
    }

    this.onFilterBtnClick = this.onFilterBtnClick.bind(this);

    this._element = element;

    this._filterBtn = this._element.querySelector('.filterBtn');
    this._filterBtn.addEventListener('click', this.onFilterBtnClick);
    this._filterText = this._element.querySelector('.filter-input');
  }

  onFilterBtnClick (e) {
    e.preventDefault();

    const text = this._filterText.value;
    console.log(text)
  }
}
