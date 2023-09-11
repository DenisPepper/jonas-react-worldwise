import Logo from './Logo';
import AppNav from './AppNav';
import css from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <Logo />
      <AppNav />
      <p>List of citiest</p>
      <footer className={StyleSheet.footer}>
        <p className={css.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};
