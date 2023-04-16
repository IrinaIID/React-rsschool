import React from 'react';
import './search-form.scss';
import Search from '../../assets/img/search.png';
import { useDispatch } from 'react-redux';
import { addTextFromInput } from '../../store/textInputSlice';

export default function SearchForm() {
  const dispatch = useDispatch();
  let textInput: string;

  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    textInput = e.currentTarget.value;
  }

  function handleClickBtn(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(addTextFromInput(textInput));
  }

  return (
    <form className="search-form-all">
      <div>
        <input type="text" className="input-search" onChange={(e) => handleChangeInput(e)} />
      </div>
      <div>
        <button onClick={(e) => handleClickBtn(e)} type="submit" className="search-btn">
          <img src={Search} alt="search" />
        </button>
      </div>
    </form>
  );
}
