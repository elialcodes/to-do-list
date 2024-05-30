import LogoTypeScript from '../../public/logoTypeScript.png';
import CreateTodo from './CreateTodo';

interface HeaderProps {
  onAddTodo: (title: string) => void;
}
const Header = ({ onAddTodo }: HeaderProps): JSX.Element => {
  return (
    <>
      <h1>
        to do list{' '}
        <img style={{ width: '60px', height: 'auto' }} src={LogoTypeScript} alt="logo TypeScript" />
      </h1>
      <CreateTodo
        saveTodo={onAddTodo} //pasamos por props la función recibida por props
      />
    </>
  );
};

export default Header;
