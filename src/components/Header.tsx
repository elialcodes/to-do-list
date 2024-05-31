import LogoTypeScript from '../../public/logoTypeScript.png';
import LogoReact from '../../public/logoReact.png';

const Header = (): JSX.Element => {
  return (
    <>
      <h1>
        to do list <img className="logoTypeScript" src={LogoTypeScript} alt="logo TypeScript" />{' '}
        <img className="logoReact" src={LogoReact} alt="logo React" />
      </h1>
    </>
  );
};

export default Header;
