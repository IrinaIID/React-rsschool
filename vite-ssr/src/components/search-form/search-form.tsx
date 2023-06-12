import React from 'react';
import './search-form.scss';
import Search from '../../assets/img/search.png';
import { useDispatch, useSelector } from 'react-redux';
import { addTextFromInput } from '../../store/textInputSlice';
import { addTextQuery } from '../../store/testQuery';
import { RootState } from '../../store/index';

export default function SearchForm() {
  const text = useSelector((state: RootState) => state.textInput.textInput);
  const dispatch = useDispatch();

  function handleChangeInput(e: React.FormEvent<HTMLInputElement>) {
    dispatch(addTextFromInput(e.currentTarget.value));
  }

  function handleClickBtn(e: React.SyntheticEvent) {
    e.preventDefault();
    dispatch(addTextQuery(text));
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
