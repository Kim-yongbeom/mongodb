import React, { useState } from "react";
import { useHistory } from "react-router";
import WriteComponent from "../../components/write/WriteComponent";
import axios from "axios";

const baseURL = "http://localhost:3000";

function WriteContainer() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const history = useHistory();

  const onChangeBody = (text) => {
    console.log(text);
    setBody(text);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTitle(value);
  };

  const onClickSubmit = async () => {
    const boardPw = "1234";
    const axiosBody = {
      title: title,
      content: body,
      boardPw: boardPw,
    };
    const token = localStorage.getItem("accessToken");

    try {
      const response = await axios({
        method: "POST",
        url: `${baseURL}/ssac/board`,
        headers: { Authorization: token },
        data: axiosBody,
      });

      if (response.status === 200) {
        console.log(response.data);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WriteComponent
      onChangeInput={onChangeInput}
      title={title}
      onChangeBody={onChangeBody}
      body={body}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default WriteContainer;
