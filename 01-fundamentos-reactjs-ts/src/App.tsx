import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './global.css';
import styles from './App.module.css';
import { posts } from "./data";
import { Login } from "./components/Login";


function App() {
  return (
    <div>
      {/* <Header /> */}
      <Login />
      {/* <div className={styles.wrapper}>
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
      </div> */}
    </div>
  )
}

export default App
