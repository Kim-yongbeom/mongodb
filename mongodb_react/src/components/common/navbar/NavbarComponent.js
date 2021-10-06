import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlineComment,
  AiOutlineBell,
} from "react-icons/ai";

const NavbarWrap = styled.div`
  height: 6rem;
  border-bottom: 1px solid #dedede;
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const NavContainer = styled.div`
  max-width: 99.6rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
  user-select: none;
`;

const NavLogoImg = styled.img`
  padding-top: 0.5rem;
  height: 3rem;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3rem;
`;

const NavStyledLink = styled(Link)`
  font-size: 1.4rem;
  font-weight: normal;
  text-decoration: none;
  color: #030303;
  padding-top: 0.3rem;
  margin-right: 1rem;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  & + & {
    // 서로 붙어있으면 적용
    margin-left: 1rem;
  }
`;

const NavProfileImg = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  margin-left: 2rem;
`;

const NavSignout = styled.div`
  font-size: 1.4rem;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
  padding-top: 0.4rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const NavSearchRoundBox = styled.div`
  border: 1px solid black;
  padding: 0.2rem 0.5rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
`;

const NavSearchInput = styled.input`
  flex: 1;
  border: none;
  width: 13rem;

  &:focus {
    outline: none;
  }
`;

const SearchInputWrap = styled.div`
  position: relative;
  margin-right: 1rem;
`;

const SearchBoard = styled.div`
  width: 100%;
  height: 15rem;
  position: absolute;
  top: 3.5rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #dedede;
  background: #ffffff;
`;

const SearchItemWrap = styled.div`
  padding: 1rem;
  cursor: pointer;

  & + & {
    border-top: 1px solid #dedede; //인접한것에 줄긋기
  }
`;

const SearchItemTitle = styled.div`
  font-size: 1.3rem;
  font-weight: normal;
`;

function NavbarComponent({
  isLoggined,
  onClickSignout,
  onChangeInput,
  searchInfo,
  searchState,
  searchData,
  onClickAutoComplete,
  onClickHome,
}) {
  return (
    <>
      <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo onClick={onClickHome}>
              <NavLogoImg src="career.png" />
            </NavLogo>
            <NavLinkWrap>
              {!isLoggined ? (
                <>
                  <NavStyledLink to="/signin">로그인</NavStyledLink>
                  <NavStyledLink to="/signup">회원가입</NavStyledLink>
                </>
              ) : (
                <>
                  <NavStyledLink to="/write">글쓰기</NavStyledLink>
                  <NavSignout onClick={onClickSignout}>로그아웃</NavSignout>
                </>
              )}
            </NavLinkWrap>
          </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <SearchInputWrap>
                <NavSearchRoundBox>
                  <NavSearchInput
                    type="text"
                    name="search"
                    value={searchInfo.search}
                    onChange={onChangeInput}
                  />
                  <NavStyledIcon>
                    <AiOutlineSearch />
                  </NavStyledIcon>
                </NavSearchRoundBox>
                {searchState ? (
                  <>
                    <SearchBoard>
                      {searchData.map((item, idx) => (
                        <SearchItemWrap
                          key={idx}
                          onClick={() => onClickAutoComplete(item.title)} // 프룹스인데 매개변수 받아야 할때 함수 사용
                        >
                          <SearchItemTitle
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></SearchItemTitle>
                        </SearchItemWrap>
                      ))}
                    </SearchBoard>
                  </>
                ) : (
                  <></>
                )}
              </SearchInputWrap>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImg src={"profile.png"} />
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
    </>
  );
}

export default NavbarComponent;
