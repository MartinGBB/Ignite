import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Post } from "../components/Post";

import styles from './BlogPage.module.css';
import { posts } from "../data";
import { Popup } from "../components/Popup";
import { useContext } from "react";
import { MyContext } from "../components/Hooks/Context";

export function BlogPage() {
  const { openPopup } = useContext(MyContext);
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
          {openPopup && <Popup />}
        </main>
      </div>
    </div>
  )
}
