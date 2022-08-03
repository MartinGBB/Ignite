import { ThumbsUp, Trash } from 'phosphor-react';
import { useContext, useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { MyContext } from './Hooks/Context';

interface CommentsProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentsProps) {
  const { user, confirmDelete, setOpenPopup } = useContext(MyContext);

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  
  function handleLikeComment() {
    setLikeCount(() => likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={user.photoURL || undefined} alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{user.displayName}</strong>
              <time
                title="11 de fevereiro ás 04:12"
                dateTime="2022-02-2022 04:12:22"
              >
                Cerca de 1h
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}