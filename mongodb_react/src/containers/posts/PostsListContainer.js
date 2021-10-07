import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import PostsListComponent from "../../components/posts/PostsListComponent";

const baseURL = "http://localhost:3000";

function PostsListContainer() {
  const history = useHistory();
  const [postList, setPostList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onAllGet();
  }, []);

  const onAllGet = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURL}/ssac/board`,
      });
      if (response.status === 200) {
        const resData = response.data.data;
        setLoading(false);
        setPostList(resData);
        //console.log(resData);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onClickPost = (postId) => {
    console.log(postId);
    history.push(`/post/${postId}`);
  };

  return (
    <PostsListComponent
      loading={loading}
      onClickPost={onClickPost}
      postList={postList}
    />
  );
}

export default PostsListContainer;
