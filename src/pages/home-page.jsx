import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home page</Link>
          </li>
          <li>
            <Link to='/product'>Product</Link>
          </li>
          <li>
            <Link to='/price'>Price</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
