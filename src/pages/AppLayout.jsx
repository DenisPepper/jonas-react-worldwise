import { Map } from '../components/Map';
import { Sidebar } from '../components/Sidebar';
import css from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={css.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
