import { Avatar } from './Avatar';
import { Comment } from './Comments';
import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  const handleComment = () => {
    event.preventDefault();
    console.log('funcionou!!')
  }

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
                return <p>{item.content}</p>

              } else if (item.type === 'link') {
                  return <p><a href="#">{item.content}</a></p>
              }
            })
          }
      </div>

      <form onSubmit={handleComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentario"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}