import { NavLink } from 'react-router-dom';
import styles from './navigation.module.css';
import Logo from './Logo.jsx';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.nav_list}>
        <li>
          <NavLink to='/product'>Product</NavLink>
        </li>
        <li>
          <NavLink to='/price'>Price</NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
