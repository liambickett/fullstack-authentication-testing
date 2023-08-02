import { Link } from 'react-router-dom';

function Header({ user }) {
  let content;

  if (user) {
    content = 'Welcome back!';
  }

  return (
    <div className='w-100 text-lg text-rose-100 bg-rose-400 flex justify-between items-center p-5'>
      <a href={user ? '/dashboard' : '/'}>Landing</a>
      <ul className='p-5'>
        <li className=' hover:bg-rose-700'>
          {content || <a href='/auth/google'>Login With Google</a>}
        </li>
        {user && (
          <li className=' hover:bg-rose-700'>
            <a href='/auth/logout'>Logout</a>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Header;
