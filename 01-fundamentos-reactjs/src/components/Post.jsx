import { Avatar } from './Avatar';
import { Comment } from './Comments';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('campo obrigatorio')
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDelete = comments.filter((comment => {
      return comment !== commentToDelete;
    }))
    setComments(commentWithoutDelete);
  }

  const isNewCommentEmpty =  newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          
          <Avatar src={author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>Web Developer</span>
            </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
          {
            content.map((item) => {  
              if (item.type === 'paragraph') {
                return <p key={item.content}>{item.content}</p>

              } else if (item.type === 'link') {
                  return <p key={item.content}><a href="#">{item.content}</a></p>
              }
            })
          }
      </div>

      <form onSubmit={handleComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
      {
        comments.map((comment) => {
          return (
            <Comment
              key={comment}
              onDeleteComment={deleteComment}
              content={comment} 
            />
          )
        })
      }
      </div>
    </article>
  )
}