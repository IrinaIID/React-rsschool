import React, { useRef, useState } from 'react';
import './search-form.scss';
import Search from '../../assets/img/search.png';


interface UrlForm {
  setUrlForm: (arg: string) => void
}

export default function SearchForm({ setUrlForm } : UrlForm) {
  const [text, setText] = useState(localStorage.getItem('inputText') || '');
  const inputRef = useRef<HTMLInputElement>(null);


  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    setText(e.currentTarget.value);
    // setUrlForm(e.currentTarget.value);
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
