import Footer from '../../components/footer/footer';
import Header from '../../components/heder/header';
import React from 'react';
import './forms-page.scss';
import CreateForm from '../../components/form/create-form';


export default class FormsPage extends React.Component {
  render() {
    return (
      <div className="forms-page-all">
        <Header />
        <div className="main-forms">
          <CreateForm />
        </div>
        <Footer />
      </div>
    );
  }
}
