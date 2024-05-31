import LogoTypeScript from '../../public/logoTypeScript.png';
import LogoReact from '../../public/logoReact.png';
import CreateTodo from './CreateTodo';

interface HeaderProps {
  onAddTodo: (title: string) => void;
}
const Header = ({ onAddTodo }: HeaderProps): JSX.Element => {
  return (
    <>
      <h1>
        to do list <img className="logoTypeScript" src={LogoTypeScript} alt="logo TypeScript" />{' '}
        <img className="logoReact" src={LogoReact} alt="logo React" />
      </h1>
      <CreateTodo
        saveTodo={onAddTodo} //pasamos por props la función recibida por props
      />
    </>
  );
};

export default Header;
