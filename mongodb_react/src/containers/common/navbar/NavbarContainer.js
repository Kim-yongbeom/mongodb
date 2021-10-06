import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import NavbarComponent from "../../../components/common/navbar/NavbarComponent";

function NavbarContainer({ isLoggined, setIsLoggined }) {
  const history = useHistory();

  const [searchState, setSearchState] = useState(false);
  const [searchInfo, setSearchInfo] = useState({
    search: "",
  });

  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchInfo.search.length > 0) {
      setSearchState(true);
    } else {
      setSearchState(false);
    }
  }, [searchInfo]); //searchInfo 가 변할때 마다 작동

  const onClickAutoComplete = (text) => {
    const originText = text[0].replace("<em>", "").replace("</em>", "");

    setSearchInfo({
      ...searchInfo,
      search: originText,
    });
  };

  const onChangeInput = async (event) => {
    const { name, value } = event.target;
    setSearchInfo({
      ...searchInfo,
      [name]: value,
    });

    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3000/search?q=${value}`,
      });
      console.log(response);
      if (response.status === 200) {
        const elsData = response.data.data;
        setSearchData(elsData);
        console.log(elsData);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const onClickSearch = () => {};

  const onClickSignout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggined(false);
  };

  const onClickHome = () => {
    history.push("/");
  };

  return (
    <NavbarComponent
      onClickAutoComplete={onClickAutoComplete}
      searchState={searchState}
      searchData={searchData}
      isLoggined={isLoggined}
      onClickSignout={onClickSignout}
      onChangeInput={onChangeInput}
      searchInfo={searchInfo}
      onClickSearch={onClickSearch}
      onClickHome={onClickHome}
    />
  );
}

export default NavbarContainer;
