import { useContext } from 'react';
import { MyContext } from './Hooks/Context';

import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  const { user } = useContext(MyContext);

  return (
    <aside className={styles.sidebar}>
      <img
        src={user.photoURL}
        className={styles.cover} 
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/MartinGBB.png" />
        <strong>{user.displayName}</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}