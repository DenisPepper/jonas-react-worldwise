import { AppNav } from '../components/AppNav';
import { Sidebar } from '../components/Sidebar';
import css from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={css.app}>
      <Sidebar />
    </div>
  );
}

export default AppLayout;
