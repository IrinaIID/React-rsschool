import React, { useState } from 'react';
import './search-form.scss';
import Search from '../../assets/img/search.png';
import { UrlForm } from '../../utils/types/types';

export default function SearchForm({ setUrlForm }: UrlForm): JSX.Element {
  const [text, setText] = useState(localStorage.getItem('inputText') || '');

  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
    localStorage.setItem('inputText', e.currentTarget.value);
  }

  function handleClickBtn(e: React.SyntheticEvent) {
    e.preventDefault();
    localStorage.clear();
    const inputText = text;
    setUrlForm(inputText);
    setText('');
  }

  return (
    <form className="search-form-all">
      <div>
        <input
          type="text"
          className="input-search"
          value={text}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <button onClick={(e) => handleClickBtn(e)} type="submit" className="search-btn">
          <img src={Search} alt="search" />
        </button>
      </div>
    </form>
  );
}
