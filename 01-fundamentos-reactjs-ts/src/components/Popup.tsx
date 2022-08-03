import { useContext } from 'react';
import { MyContext } from './Hooks/Context';
import styles from './Popup.module.css';

export function Popup() {
  const { setConfirmDelete, setOpenPopup } = useContext(MyContext);

  function handleDelete() {
    setConfirmDelete(true);
    setOpenPopup(false);
  }

  function handlePopup() {
    setOpenPopup(false);
  }

  return (
    <div className={styles.content}>
      <div className={styles.popUp}>
        <h1>Excluir comentário</h1>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>

        <div className={styles.contentButtons}>
          <button
            onClick={handlePopup}
            type="button"
          >
            Cancelar
          </button>
          
          <button
            onClick={handleDelete}
            type="button"
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}