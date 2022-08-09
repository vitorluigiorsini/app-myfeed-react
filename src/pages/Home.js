import { useState } from "react";

import Feed from "../components/Feed";
import PostForm from "../components/PostForm";
import PostTemplate from "../components/PostTemplate";

export default function Home() {
  const [posts, setPosts] = useState([]);

  function handleSubmit({ history, userName }) {
    setPosts([...posts, new PostTemplate(history, userName)]);
  }

  return (
    <>
      <PostForm onSubmit={handleSubmit} />
      <main>
        <Feed
          posts={posts}
          title="Seu Feed"
          subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
        />
      </main>
    </>
  );
}
