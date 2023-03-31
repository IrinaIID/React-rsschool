import DecoratioHeader from './decoration-header';
import './header.scss';
import NavigationHeader from './navigation-header';

export default function Header() {
  return (
    <div className="header-all">
      <div className="header-container">
        <NavigationHeader />
        <DecoratioHeader />
      </div>
    </div>
  );
}
