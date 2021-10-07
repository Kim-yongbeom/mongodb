import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import DetailComponent from "../../components/post/DetailComponent";

const baseURL = "http://localhost:3000";

function DetailContainer({ profile }) {
  const history = useHistory();
  const params = useParams();
  const { postId } = params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onUserDetail();
  }, []);

  const onUserDetail = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "GET",
        url: `${baseURL}/ssac/board/${postId}`,
      });
      if (response.status === 200) {
        setLoading(false);
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onUserDelete = async () => {
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseURL}/ssac/board/${postId}`,
        headers: { Authorization: token }, // 이거 안해주면 권한 문제 발생
      });
      if (response.status === 200) {
        setLoading(false);
        history.goBack();
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <DetailComponent
      data={data}
      loading={loading}
      onUserDelete={onUserDelete}
      onClickBack={onClickBack}
      profile={profile}
    />
  );
}

export default DetailContainer;
