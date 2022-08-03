import styles from './Loading.module.css';
import { Header } from './Header';
import igniteLogo from '../assets/ignite-logo.svg';


export function Loading() {
  return (
    <div className={styles.loading}>
      <img src={ igniteLogo } alt="logo do ignite" />
      <span>IgniteFeed</span>
    </div>
  );
}