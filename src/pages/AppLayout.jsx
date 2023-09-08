import { Navigation } from '../components/navigation';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles.app}>
      <Navigation />
      <p>App</p>
    </div>
  );
}

export default AppLayout;
