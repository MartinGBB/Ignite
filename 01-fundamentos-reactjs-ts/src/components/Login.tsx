import styles from './Login.module.css';
import photo from '../assets/felix-rostig-UmV2wr-Vbq8-unsplash 1.png'
import igniteLogo from '../assets/ignite-logo.svg';
import { Header } from './Header';

export function Login() {
  return (
    <div className={styles.content}>
      <img src={photo} />

      <div className={styles.form}>
        <Header />
        <div className={styles.contentInfo}>
          <h1>Escolha uma opção para entrar</h1>
          <p>Utilize algum dos serviços abaixo para entrar na nossa plataforma.</p>
        </div>

        <div className={styles.contentButtons}>
          <button>Entrar com o Google</button>
          <button>Entrar com o Facebook</button>
          <button>Entrar com o Github</button>
        </div>
      </div>
    </div>
  );
}