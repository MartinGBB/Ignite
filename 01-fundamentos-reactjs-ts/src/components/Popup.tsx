import styles from './Popup.module.css';

export function Popup() {
  return (
    <div className={styles.content}>
      <div className={styles.popUp}>
        <h1>Excluir comentário</h1>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>

        <div>
          <button>Cancelar</button>
          <button>Sim, excluir</button>
        </div>
      </div>
    </div>
  );
}