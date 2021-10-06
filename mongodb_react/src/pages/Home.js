//rfce 하면 import export 간단히 생성
import React from "react";
import PostsListContainer from "../containers/posts/PostsListContainer";
import MainContainer from "../containers/common/main/MainContainer";

function Home() {
  return (
    <>
      <MainContainer />
      <PostsListContainer />
    </>
  );
}

export default Home;
