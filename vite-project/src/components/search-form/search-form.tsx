import React, { ChangeEvent } from 'react';
import './search-form.scss';
import Search from '../../assets/img/search.png';

type State = {
  text: string;
};

export default class SearchForm extends React.Component<State> {
  state = {
    text: localStorage.getItem('searchInput') || '',
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };

  render() {
    return (
      <form
        className="search-form-all"
        ref="#"
        onSubmit={(e: React.SyntheticEvent) => {
          // e.preventDefault();
          localStorage.clear();
          // const target = e.target as typeof e.target & {
          //   text: { value: string };
          // };
          // const text = target.text.value;
        }}
      >
        <div>
          <input type="text" className="input-search" value={this.state.text}
            onInput={(e) => {
              this.onChange(e);
              localStorage.setItem('searchInput', this.state.text);
            }}
          />
        </div>
        <div>
          <button type="submit" className="search-btn">
            <img src={Search} alt="" />
          </button>
          {/* <input type="submit" className="search-btn" value="search" /> */}
        </div>
      </form>
    );
  }
}