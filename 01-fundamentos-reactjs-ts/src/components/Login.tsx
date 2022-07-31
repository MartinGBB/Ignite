import styles from './Login.module.css';
import photo from '../assets/felix-rostig-UmV2wr-Vbq8-unsplash 1.png'
import igniteLogo from '../assets/ignite-logo.svg';
import { Header } from './Header';

export function Login() {
  return (
    <div className={styles.content}>
      <img src={photo} />

      <div className={styles.form}>
        <div className={styles.contentInfo}>
          <img src={ igniteLogo } alt="logo do ignite" />
          <span>IgniteFeed</span>
          <h1>Escolha uma opção para entrar</h1>
          <p>Utilize algum dos serviços abaixo para entrar na nossa plataforma.</p>
        </div>

        <div className={styles.contentButtons}>

        </div>
      </div>
    </div>
  );
}