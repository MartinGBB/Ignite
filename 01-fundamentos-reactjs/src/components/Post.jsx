import { Avatar } from './Avatar';
import { Comment } from './Comments';
import styles from './Post.module.css';
import { format } from 'date-fns';

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'")

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
          title="11 de fevereiro ás 04:12"
          dateTime="2022-02-2022 04:12:22"
        >
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a> {' '}
          <a href="">#rocketseat</a> {' '}
        </p>
      </div>

      <form className={styles.commentForm}>
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