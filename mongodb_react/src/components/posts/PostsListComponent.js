import React from "react";
import styled from "styled-components";
import LoadingComponent from "../common/loading/LoadingComponent";
import PostItemComponent from "../post/PostItemComponent";

const PostListWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function PostsListComponent({ postList, onClickPost, loading }) {
  console.log(postList);
  return (
    <>
      {loading && <LoadingComponent />}
      <PostListWrap>
        {postList.map((item, index) => (
          <PostItemComponent
            key={index}
            post={item}
            onClickPost={onClickPost}
          />
        ))}
      </PostListWrap>
    </>
  );
}

export default PostsListComponent;
