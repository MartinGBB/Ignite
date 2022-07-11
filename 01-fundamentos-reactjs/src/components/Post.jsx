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
          dateTime="2022-02-2022 04:12:22"
        >
          Publicado há uma hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}