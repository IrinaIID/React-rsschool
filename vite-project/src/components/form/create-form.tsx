import React from 'react';
import './create-form.scss';


export default class CreateForm extends React.Component {
  render() {
    return (
      <div className="form-all">
        <form className="all-form">
          <h1 className="h1-form">Create visitor card</h1>
          <label className="label-form">
            Name:
            <input type="text" className="input-name" name="name" />
          </label>
          <label className="label-form">
            Date of card creation:
            <input type="date" className="input-date" name="date" />
          </label>
          <label className="label-form">
            Status
            <select className="input-select">
              <option value="admin">administrator</option>
              <option value="authorized">authorized person</option>
              <option value="gurst-invite">guest with invitation</option>
              <option value="guest-no-invite">guest without invitation</option>
            </select>
          </label>
          <label className="label-check">
            For public view
            <input name="public" className="input-check"
            type="checkbox" />
          </label>
          <div className="radio-block">
            <label className="label-radio">
              <input type="radio" value="male" name="gender"/> male
            </label>
            <label className="label-radio">
              <input type="radio" value="female" name="gender"/> female
            </label>
          </div>
          <label className="label-form">
            <input type="file" className="input-file" />
          </label>
          <input type="submit" className="btn-create" value="Create" />
        </form>
      </div>
    );
  }
}