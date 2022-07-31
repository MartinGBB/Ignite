import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Post } from "../components/Post";

import styles from './BlogPage.module.css';
import { posts } from "../data";

export function BlogPage() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          { 
            posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
