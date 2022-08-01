import { useContext } from "react";
import { MyContext } from "../components/Hooks/Context";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../services/firebase";

import styles from './Login.module.css';
import photo from '../assets/felix-rostig-UmV2wr-Vbq8-unsplash 1.png'
import igniteLogo from '../assets/ignite-logo.svg';
import { GoogleLogo, FacebookLogo, GithubLogo } from 'phosphor-react';
import { Navigate } from "react-router-dom";


export function Login() {
  const { setUser, user } = useContext(MyContext);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
      const { displayName, photoURL } = result.user;
      setUser({displayName, photoURL})
    })
    .catch((error) => {
      console.log(error)
    });
  }

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
          <button
            onClick={handleGoogleLogin}
          >
            <GoogleLogo size={22} weight='bold' />
            Entrar com o Google
          </button>

          <button>
            <FacebookLogo size={22} />
            Entrar com o Facebook
          </button>
          
          <button>
            <GithubLogo />
            Entrar com o Github
          </button>
        </div>
      </div>
      { user && <Navigate to="/blog" /> }
    </div>
  );
}