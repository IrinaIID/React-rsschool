import { useForm } from "react-hook-form";
import VisitorCard from '../../components/visitor-card/visitor-card';
import './create-form.scss';
import { CardInfo } from '../../utils/types/types';

type FormData = {
  name: string;
  date: string
};


export default function CreateForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  let arrCards: CardInfo[];

    // state = {
    //   arrCards: [],
    //   currentStatus: 'administrator',
    //   currentGender: 'male',
    //   currentPublic: false,
    //   currentImg: undefined,
    //   id: 0,
    // };

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <div className="form-page-all" onSubmit={onSubmit}>
      <form className="all-form">
        <h1 className="h1-form">Create visitor card</h1>
        <label className="label-form">
          Name:
          <input
            type="text"
            className={errors.name ? 'input-name-error' : 'input-name'}
            {...register("name", { required: 'This is required', minLength: {value: 4, message: 'Min length is 4'} })}
            autoComplete="off"
          />
          <p className="p-input-error">{errors.name?.message}</p>
        </label>
        <label className="label-form">
          Date of card creation:
          <input
            type="date" className={errors.date ? 'input-date-error' : 'input-date'}
            {...register("date", { required: 'This is required'})}
          />
          <p className="p-input-error">{errors.date?.message}</p>
        </label>
        {/* <label className="label-form">
          Status
          <select
            className="input-select"
          >
            <option value="administrator">administrator</option>
            <option value="authorized-person">authorized person</option>
            <option value="guest-with-invitation">guest with invitation</option>
            <option value="guest-without-invitation">guest without invitation</option>
          </select>
        </label>
        <label className="label-check">
          For public view
          <input
            name="public"
            className="input-check"
            type="checkbox"
          />
        </label>
        <div className="radio-block">
          <label className="label-radio">
            <input
              type="radio"
              value="male"
              checked
              name="gender"
            />
            male
          </label>
          <label className="label-radio">
            <input type="radio" value="female" name="gender" />{' '}
            female
          </label>
        </div>
        <label className="label-form">
          <input
            type="file"
            className="input-file"
            accept=".png,.jpg,.webp"
          />
        </label> */}
        <button type="submit" className="btn-create">
          Create
        </button>
      </form>
      <div className="visitors-cards-block">
        {/* {arrCards.map((card) => {
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
        })} */}
      </div>
    </div>
  );
}