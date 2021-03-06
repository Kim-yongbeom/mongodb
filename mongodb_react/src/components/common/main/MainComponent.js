import React from "react";
import styled from "styled-components";

const MainWrap = styled.div`
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const MainMinWrap = styled.div`
  padding-top: 7.5rem;
`;

const MainBoard = styled.div`
  width: 55rem;
  height: 40rem;
  margin-bottom: 1rem;
  border: 1px solid #dbdbdb;
  background-color: white;
`;

const BoardHeader = styled.div`
  width: 96%;
  height: 4rem;
  margin: 1rem;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const BoardImg = styled.img`
  border: 1px solid white;
  border-radius: 400px;
  margin-right: 1.2rem;
  margin-top: 0.5rem;
`;

const BoardTitle = styled.div`
  height: 2rem;
  font-size: 1.4rem;
  display: flex;
  align-self: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const BoardNameWrap = styled.div`
  display: flex;
`;

const BoardName = styled.div`
  font-weight: bolder;
  padding: 0 0.8rem 0.5rem 0;
`;

const BoardNameInfo = styled.div`
  font-weight: bolder;
  color: gray;
`;

const BoardNameDay = styled.div`
  font-size: 1.2rem;
  color: gray;
`;

const BoardBody = styled.div`
  width: 96%;
  height: 12.6rem;
  padding: 1.5rem;
  box-sizing: border-box;
`;

const BoardBodyText = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

const BoardArticle = styled.div`
  width: 96%;
  height: 11.2rem;
  margin: 1.6rem;
  background-color: #f7f7f7;
  border-radius: 15px;
`;

const BoardArticleLink = styled.a`
  height: 100%;
  text-decoration: none;
  color: #030303;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1.5rem;
`;

const BoardLinkImg = styled.img`
  width: 10rem;
  height: 10rem;
  padding: 1rem;
  border-radius: 25px;
  box-sizing: border-box;
`;

const BoardLinkText = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
`;

const BoardLinkInfo = styled.div`
  font-size: 1rem;
  color: #999;
  padding-top: 1.5rem;
`;

const BoardRecommend = styled.div`
  height: 2.4rem;
  padding: 0 1.6rem;
  box-sizing: border-box;
  display: flex;
`;

const BoardRecommendImg1 = styled.img`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  border: 1px solid #ffffff;
  border-radius: 400px;
  position: absolute;
  overflow: hidden;
`;

const BoardRecommendImg2 = styled.img`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  margin-left: 1.5rem;
  border: 1px solid #ffffff;
  border-radius: 400px;
  position: absolute;
  overflow: hidden;
`;

const BoardRecommendImg3 = styled.img`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  margin-left: 3rem;
  border: 1px solid #ffffff;
  border-radius: 400px;
  position: absolute;
  overflow: hidden;
`;

const BoardRecommendcomment = styled.div`
  display: flex;
  padding-top: 0.5rem;
  margin-left: 5.5rem;
  font-size: 1.3rem;
`;

const BoardRecommendpeople = styled.div`
  font-weight: bolder;
`;

const BoardRecommendText = styled.div``;

const Footer = styled.div`
  width: 100%;
  height: 4.7rem;
  padding: 0 1.6rem;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const FooterRecommend = styled.div`
  display: flex;
  align-items: center;
`;

const FooterRecommendImg = styled.img`
  width: 2rem;
  height: 2.3rem;
  margin-right: 0.5rem;
`;

const FooterRecommendText = styled.div`
  font-size: 1.2rem;
`;

const FooterShareComment = styled.div`
  display: flex;
  align-items: center;
`;

const FooterShareImg = styled.img`
  width: 2rem;
  height: 2.3rem;
  margin-right: 0.5rem;
`;

const FooterShareText = styled.div`
  font-size: 1.2rem;
  margin-right: 1.2rem;
`;

const FooterCommentImg = styled.img`
  width: 2rem;
  height: 2.3rem;
  margin-right: 0.5rem;
`;

const FooterCommentText = styled.div`
  font-size: 1.2rem;
`;

function MainComponent() {
  return (
    <>
      <MainWrap>
        <MainMinWrap>
          <MainBoard>
            <BoardHeader>
              <BoardImg src="https://publy.imgix.net/user-uploaded/330478/2021.08/20210805020055.png?w=200&amp;h=200" />
              <BoardTitle>
                <BoardNameWrap>
                  <BoardName>???????????????</BoardName>
                  <BoardNameInfo>????????? ????????? ?????????????</BoardNameInfo>
                </BoardNameWrap>
                <BoardNameDay>?????????</BoardNameDay>
              </BoardTitle>
            </BoardHeader>
            <BoardBody>
              <BoardBodyText>
                ???????????? ??? ?????? ?????? ????????? ???????????? ????????? ???????????? ??????.{" "}
                <br />
                <br />
                ?????? ???????????? ?????? ???????????? ?????? ????????? ????????? ????????? ?????????
                ????????? ???????????????.
                <br />
                <br /> ????????? ?????? ????????? ???????????? ?????? 6?????? ????????????(??????)
                ??????????????? ????????? ????????? ????????? ??????????????? ????????? ?????? ??????
                ???????????? ??????
              </BoardBodyText>
            </BoardBody>
            <BoardArticle>
              <BoardArticleLink
                href="https://www.youtube.com/channel/UCov1KMe7sixdAefKqD1pXXw/featured"
                target="_blank"
              >
                <BoardLinkText>
                  4??? ??? 75?????? ??????... ????????? ?????? ??????????????????????? ?????????
                  '??????' ??????
                  <BoardLinkInfo>????????????</BoardLinkInfo>
                </BoardLinkText>
                <BoardLinkImg src="youtube.png" />
              </BoardArticleLink>
            </BoardArticle>
            <BoardRecommend>
              <BoardRecommendImg1 src="https://publy.imgix.net/user-uploaded/220798/2021.10/20211002113703.jpeg?w=200&h=200.png" />
              <BoardRecommendImg2 src="	https://publy.imgix.net/user-uploaded/332678/2021.08/20210808021321.jpeg?w=200&h=200" />
              <BoardRecommendImg3 src="https://publy.imgix.net/user-uploaded/30743/2021.09/20210915125655.jpeg?w=200&h=200" />
              <BoardRecommendcomment>
                <BoardRecommendpeople>2???</BoardRecommendpeople>
                <BoardRecommendText>??? ???????????????.</BoardRecommendText>
              </BoardRecommendcomment>
            </BoardRecommend>
            <Footer>
              <FooterRecommend>
                <FooterRecommendImg src="recommend.png" />
                <FooterRecommendText>????????????</FooterRecommendText>
              </FooterRecommend>
              <FooterShareComment>
                <FooterShareImg src="share.png" />
                <FooterShareText>????????????</FooterShareText>
                <FooterCommentImg src="comment.png" />
                <FooterCommentText>??????</FooterCommentText>
              </FooterShareComment>
            </Footer>
          </MainBoard>
          <MainBoard>
            <BoardHeader>
              <BoardImg src="insect.png" />
              <BoardTitle>
                <BoardNameWrap>
                  <BoardName>??????</BoardName>
                  <BoardNameInfo>?????? ?????? ??????????????</BoardNameInfo>
                </BoardNameWrap>
                <BoardNameDay>2??????</BoardNameDay>
              </BoardTitle>
            </BoardHeader>
            <BoardBody>
              <BoardBodyText>
                ????????? ???????????? ?????? ????????? ???????????? ??? ??????. <br />
                ??????, ?????? ???????????? ????????? ?????? ?????? ?????? ?????? 10% ?????? ?????????
                ???????????? ????????????.
                <br />
                <br />
                ????????? ????????? ???????????? ???????????? ????????? ????????????, ?????????????????? ???
                ????????? ?????? ???????????? ???????????? KPI??? ????????????.
              </BoardBodyText>
            </BoardBody>
            <BoardArticle>
              <BoardArticleLink
                href="https://www.thestartupbible.com/2021/05/the-growth-inflection-zones.html"
                target="_blank"
              >
                <BoardLinkText>
                  Inflection ??????
                  <BoardLinkInfo>THE STARTUP BIBLE</BoardLinkInfo>
                </BoardLinkText>
                <BoardLinkImg src="chart.png" />
              </BoardArticleLink>
            </BoardArticle>
            <BoardRecommend>
              <BoardRecommendImg1 src="https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png" />
              <BoardRecommendImg2 src="https://publy.imgix.net/user-uploaded/368823/2021.09/20210929024301.jpeg?w=200&h=200" />
              <BoardRecommendImg3 src="https://publy.imgix.net/user-uploaded/85213/2021.09/20210904032658.jpeg?w=200&h=200" />
              <BoardRecommendcomment>
                <BoardRecommendpeople>4???</BoardRecommendpeople>
                <BoardRecommendText>??? ???????????????.</BoardRecommendText>
              </BoardRecommendcomment>
            </BoardRecommend>
            <Footer>
              <FooterRecommend>
                <FooterRecommendImg src="recommend.png" />
                <FooterRecommendText>????????????</FooterRecommendText>
              </FooterRecommend>
              <FooterShareComment>
                <FooterShareImg src="share.png" />
                <FooterShareText>????????????</FooterShareText>
                <FooterCommentImg src="comment.png" />
                <FooterCommentText>??????</FooterCommentText>
              </FooterShareComment>
            </Footer>
          </MainBoard>
        </MainMinWrap>
      </MainWrap>
    </>
  );
}

export default MainComponent;
