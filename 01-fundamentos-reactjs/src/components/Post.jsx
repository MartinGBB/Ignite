import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/81588649?v=4" />
            <div className={styles.authorInfo}>
              <strong>Martin Brazon</strong>
              <span>Web Developer</span>
            </div>
        </div>

        <time
          title="11 de fevereiro ás 04:12"
          dateTime="2022-02-2022 04:12:22">Publicado há uma hora</time>
      </header>
    </article>
  )
}