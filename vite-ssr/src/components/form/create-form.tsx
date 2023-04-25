import { useForm } from 'react-hook-form';
import VisitorCard from '../visitor-card/visitor-card';
import './create-form.scss';
import { CardInfo, FormData } from '../../utils/types/types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCardForm } from '../../store/cardsFormSlice';
import { RootState } from 'store';

export default function CreateForm() {
  const arrCards = useSelector((state: RootState) => state.cardsFrom.cardsForm);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [picture, setPicture] = useState('');

  const onSubmit = handleSubmit((data) => {
    const card: CardInfo = {
      name: data.name,
      date: data.date,
      status: data.status,
      public: data.public,
      gender: data.gender,
      file: picture,
      id: Math.random(),
    };

    dispatch(addCardForm(card));

    reset();
    alert('Card created successfully');
  });

  return (
    <div className="form-page-all" onSubmit={onSubmit}>
      <form className="all-form">
        <h1 className="h1-form">Create visitor card</h1>
        <label className="label-form">
          Name:
          <input
            type="text"
            className={errors.name ? 'input-name-error' : 'input-name'}
            {...register('name', {
              required: 'This is required',
              minLength: { value: 4, message: 'Min length is 4' },
            })}
            autoComplete="off"
          />
          <p className="p-input-error">{errors.name?.message}</p>
        </label>
        <label className="label-form">
          Date of card creation:
          <input
            type="date"
            className={errors.date ? 'input-date-error' : 'input-date'}
            {...register('date', { required: 'This is required' })}
          />
          <p className="p-input-error">{errors.date?.message}</p>
        </label>
        <label className="label-form">
          Status
          <select
            className="input-select"
            {...register('status', { required: 'This is required' })}
          >
            <option value="administrator">administrator</option>
            <option value="authorized-person">authorized person</option>
            <option value="guest-with-invitation">guest with invitation</option>
            <option value="guest-without-invitation">guest without invitation</option>
          </select>
        </label>
        <label className="label-check">
          For public view
          <input className="input-check" type="checkbox" {...register('public')} />
        </label>
        <div className="radio-block">
          <label className="label-radio">
            <input
              type="radio"
              value="male"
              {...register('gender', { required: 'This is required' })}
            />
            male
          </label>
          <label className="label-radio">
            <input
              type="radio"
              value="female"
              {...register('gender', { required: 'This is required' })}
            />
            female
          </label>
          <p className="p-input-error">{errors.gender?.message}</p>
        </div>
        <label className="label-form">
          <input
            type="file"
            className="input-file"
            accept=".png,.jpg,.webp"
            value={undefined}
            {...register('picture', { required: 'This is required' })}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                const path = window.URL.createObjectURL(e.target.files[0]);
                setPicture(path);
              }
            }}
          />
          <p className="p-input-error">{errors.picture?.message}</p>
        </label>
        <button type="submit" className="btn-create">
          Create
        </button>
      </form>
      <div className="visitors-cards-block">
        {arrCards.map((card) => {
          return (
            <VisitorCard
              key={card.id}
              name={card.name}
              date={card.date}
              status={card.status}
              gender={card.gender}
              public={card.public ? 'for public view' : ''}
              picture={card.file}
            />
          );
        })}
      </div>
    </div>
  );
}
