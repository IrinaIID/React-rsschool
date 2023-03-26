// import VisitorCard from '../../components/visitor-card/visitor-card';
import SearchForm from '../../components/search-form/search-form';
import React from 'react';
import './create-form.scss';

type CardInfo = {
  name: string | undefined
}

interface MyState {
  arrCards: CardInfo[]
}


export default class CreateForm extends React.Component<{}, MyState> {
  textInput: React.RefObject<HTMLInputElement>;

  constructor(props: string) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = React.createRef();
    this.state = {
      arrCards: []
    }
  }

  // onAddItem = () => {
  //   this.setState(state => {
  //     const list = state.list.concat(state.value);

  //     return {
  //       list,
  //       value: '',
  //     };
  //   });
  // };


  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(this.textInput.current?.value)


    this.setState(state => {
      // const info = {name: this.textInput.current?.value}
        const arrCards = [...state.arrCards, {name: this.textInput.current?.value}];
        return {
          arrCards
        }
    }, () => {
      console.log(this.state.arrCards)
    });
  }

  // handleChange(e: React.FormEvent<HTMLInputElement>) {
  //   this.setState({obj: {name: this.textInput.current?.value}});
  // }


  render() {
    return (
      <div className="form-page-all">
        <form onSubmit={this.handleSubmit} className="all-form">
          <h1 className="h1-form">Create visitor card</h1>
          <label className="label-form">
            Name:
            <input type="text" className="input-name" name="name"autoComplete="off"
              ref={this.textInput}
            />
          </label>
          <button type="submit" className="btn-create">
            Create
          </button>
        </form>
        <div className="visitors-cards-block">
          {/* {
            this.state.arrCards.map(card => {
              return(
                <>
                <h1>{card.name}</h1>
                </>
              )
            })
          } */}
          {/* <h1>{this.state.arrCards[0].name}</h1> */}
          <h1>{this.state.arrCards.map(card => {
            return (
              <>
                <h1>{card.name}</h1>
              </>
            )
          })}</h1>
          {/* <VisitorCard name={this.textInput.current?.value} /> */}
        </div>
      </div>
    );
  }
}