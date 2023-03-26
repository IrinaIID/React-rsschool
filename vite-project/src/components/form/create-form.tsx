import VisitorCard from '../../components/visitor-card/visitor-card';
import React from 'react';
import './create-form.scss';
import { MyState } from '../../utils/types/types';

export default class CreateForm extends React.Component<object, MyState> {
  textInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  fileInput: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);

    this.textInput = React.createRef();
    this.dateInput = React.createRef();
    this.fileInput = React.createRef();
    this.state = {
      arrCards: [],
      currentStatus: 'administrator',
      currentGender: 'male',
      currentPublic: false,
      currentImg: undefined,
      id: 0,
    };
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!this.checkValidation()) {
      return;
    }
    let path: string;
    if (this.fileInput.current?.files) {
      const fileImg = this.fileInput.current?.files[0];
      path = window.URL.createObjectURL(fileImg);
    }
    this.setState((state) => {
      const random = Math.random();
      const arrCards = [
        ...state.arrCards,
        {
          name: this.textInput.current?.value,
          date: this.dateInput.current?.value,
          status: this.state.currentStatus,
          public: this.state.currentPublic,
          gender: this.state.currentGender,
          file: path,
          id: random,
        },
      ];
      return {
        arrCards,
      };
    });
  }

  handleChangeStatus(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({ currentStatus: event.target.value });
  }

  handleChangeRadio(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ currentGender: event.target.value });
  }

  handleChangeCheck() {
    this.setState({ currentPublic: !this.state.currentPublic });
  }

  checkValidation() {
    let isName = false;
    let isDate = false;
    let isImg = false;

    const name = this.textInput.current?.value.trim();
    if (name && name[0] === name.toUpperCase()[0]) {
      isName = true;
    } else {
      alert('Name must start with a capital letter');
    }

    const date = this.dateInput.current?.value;
    if (date && date?.length > 0) {
      isDate = true;
    } else {
      alert('Enter a date');
    }

    if (this.fileInput.current?.files && this.fileInput.current?.files[0]) {
      isImg = true;
    } else {
      alert('Add picture');
    }

    return isDate && isName && isImg ? true : false;
  }

  render() {
    return (
      <div className="form-page-all">
        <form onSubmit={this.handleSubmit} className="all-form">
          <h1 className="h1-form">Create visitor card</h1>
          <label className="label-form">
            Name:
            <input
              type="text"
              className="input-name"
              name="name"
              autoComplete="off"
              ref={this.textInput}
            />
          </label>
          <label className="label-form">
            Date of card creation:
            <input type="date" className="input-date" name="date" ref={this.dateInput} />
          </label>
          <label className="label-form">
            Status
            <select
              className="input-select"
              value={this.state.currentStatus}
              onChange={this.handleChangeStatus}
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
              onChange={this.handleChangeCheck}
            />
          </label>
          <div className="radio-block">
            <label className="label-radio">
              <input
                type="radio"
                value="male"
                checked
                name="gender"
                onChange={this.handleChangeRadio}
              />{' '}
              male
            </label>
            <label className="label-radio">
              <input type="radio" value="female" name="gender" onChange={this.handleChangeRadio} />{' '}
              female
            </label>
          </div>
          <label className="label-form">
            <input
              type="file"
              className="input-file"
              accept=".png,.jpg,.webp"
              ref={this.fileInput}
            />
          </label>
          <button type="submit" className="btn-create">
            Create
          </button>
        </form>
        <div className="visitors-cards-block">
          {this.state.arrCards.map((card) => {
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
}
