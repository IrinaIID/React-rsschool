import Footer from '../../components/footer/footer';
import Header from '../../components/heder/header';
import './forms-page.scss';
import CreateForm from '../../components/form/create-form-2';

export default function FormsPage() {
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
