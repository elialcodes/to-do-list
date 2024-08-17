/* eslint-disable react/react-in-jsx-scope */
import LogoTypeScript from '../assets/logoTypeScript.png';
import LogoReact from '../assets/logoReact.png';

const Header = (): JSX.Element => {
  return (
    <header>
      <h1>
        to do list
        <img className="logoTypeScript" src={LogoTypeScript} alt="logo TypeScript" />{' '}
        <img className="logoReact" src={LogoReact} alt="logo React" />
      </h1>
    </header>
  );
};

export default Header;
