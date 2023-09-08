import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <NavLink to='/'>Home page</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/price'>Price</NavLink>
        </li>
      </ul>
    </nav>
  );
};
