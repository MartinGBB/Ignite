import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

console.log(igniteLogo)

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ igniteLogo } alt="logo do ignite" />
      <span>IgniteFeed</span>
    </header>
  );
}

