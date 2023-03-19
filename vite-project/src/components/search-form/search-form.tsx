import React from 'react';
import './search-form.scss';
import Search from '../../assets/img/search.png';
import { URL_TO_SSEND } from '../../utils/const/const';

type State = {
  text: string;
};

export default class SearchForm extends React.Component<State> {
  state = {
    text: localStorage.getItem('searchInput') || '',
  };


  handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ text: e.currentTarget.value }, () => {
      localStorage.setItem('searchInput', this.state.text);
    });
  }

  handelClearInput() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <form className="search-form-all" ref={URL_TO_SSEND} >
        <div>
          <input
            type="text"
            className="input-search"
            value={this.state.text}
            onInput={(e) => {
              this.handleOnChange(e);
            }}
          />
        </div>
        <div>
          <button
            onClick={(e: React.SyntheticEvent) => {
              e.preventDefault();
              localStorage.clear();
              this.handelClearInput();
            }}
            type="submit" className="search-btn"
          >
            <img src={Search} alt="search" />
          </button>
        </div>
      </form>
    );
  }
}
