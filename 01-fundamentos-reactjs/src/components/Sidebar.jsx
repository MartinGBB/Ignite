import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=500"
        className={styles.cover} 
      />
      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/81588649?v=4"
        />
        <strong>Martin Brazón</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  );
}