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
                  <BoardName>공대돌고래</BoardName>
                  <BoardNameInfo>돌고래 돌고래 돌고래🐬</BoardNameInfo>
                </BoardNameWrap>
                <BoardNameDay>하루전</BoardNameDay>
              </BoardTitle>
            </BoardHeader>
            <BoardBody>
              <BoardBodyText>
                네이버가 전 세계 리셀 시장에 공격적인 투자를 진행하고 있다.{" "}
                <br />
                <br />
                요즘 네이버의 투자 움직임을 보면 무서울 정도로 투자의 속도가
                빠르고 공격적이다.
                <br />
                <br /> 지난해 쇼핑 부문을 강화하기 위해 6개의 풀필먼트(물류)
                스타트업에 투자를 진행한 것처럼 내부적으로 방향이 결정 나면
                거침없이 진행
              </BoardBodyText>
            </BoardBody>
            <BoardArticle>
              <BoardArticleLink
                href="https://www.youtube.com/channel/UCov1KMe7sixdAefKqD1pXXw/featured"
                target="_blank"
              >
                <BoardLinkText>
                  4년 뒤 75조원 규모... 네이버 이어 은행·백화점까지 뛰어든
                  '리셀' 시장
                  <BoardLinkInfo>조선비즈</BoardLinkInfo>
                </BoardLinkText>
                <BoardLinkImg src="youtube.png" />
              </BoardArticleLink>
            </BoardArticle>
            <BoardRecommend>
              <BoardRecommendImg1 src="https://publy.imgix.net/user-uploaded/220798/2021.10/20211002113703.jpeg?w=200&h=200.png" />
              <BoardRecommendImg2 src="	https://publy.imgix.net/user-uploaded/332678/2021.08/20210808021321.jpeg?w=200&h=200" />
              <BoardRecommendImg3 src="https://publy.imgix.net/user-uploaded/30743/2021.09/20210915125655.jpeg?w=200&h=200" />
              <BoardRecommendcomment>
                <BoardRecommendpeople>2명</BoardRecommendpeople>
                <BoardRecommendText>이 추천했어요.</BoardRecommendText>
              </BoardRecommendcomment>
            </BoardRecommend>
            <Footer>
              <FooterRecommend>
                <FooterRecommendImg src="recommend.png" />
                <FooterRecommendText>추천해요</FooterRecommendText>
              </FooterRecommend>
              <FooterShareComment>
                <FooterShareImg src="share.png" />
                <FooterShareText>공유하기</FooterShareText>
                <FooterCommentImg src="comment.png" />
                <FooterCommentText>댓글</FooterCommentText>
              </FooterShareComment>
            </Footer>
          </MainBoard>
          <MainBoard>
            <BoardHeader>
              <BoardImg src="insect.png" />
              <BoardTitle>
                <BoardNameWrap>
                  <BoardName>꿀벌</BoardName>
                  <BoardNameInfo>꿀벌 꿀벌 꿀벌🐝🐝</BoardNameInfo>
                </BoardNameWrap>
                <BoardNameDay>2일전</BoardNameDay>
              </BoardTitle>
            </BoardHeader>
            <BoardBody>
              <BoardBodyText>
                회사의 성장에는 여러 유형이 존재하는 것 같다. <br />
                일단, 가장 이상적인 유형은 오랜 시간 동안 매달 10% 이상 꾸준히
                성장하는 회사이다.
                <br />
                <br />
                여기서 말하는 성장이란 회사마다 다르기 마련인데, 일반적으로는 그
                회사가 가장 중요하게 생각하는 KPI의 성장이다.
              </BoardBodyText>
            </BoardBody>
            <BoardArticle>
              <BoardArticleLink
                href="https://www.thestartupbible.com/2021/05/the-growth-inflection-zones.html"
                target="_blank"
              >
                <BoardLinkText>
                  Inflection 구간
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
                <BoardRecommendpeople>4명</BoardRecommendpeople>
                <BoardRecommendText>이 추천했어요.</BoardRecommendText>
              </BoardRecommendcomment>
            </BoardRecommend>
            <Footer>
              <FooterRecommend>
                <FooterRecommendImg src="recommend.png" />
                <FooterRecommendText>추천해요</FooterRecommendText>
              </FooterRecommend>
              <FooterShareComment>
                <FooterShareImg src="share.png" />
                <FooterShareText>공유하기</FooterShareText>
                <FooterCommentImg src="comment.png" />
                <FooterCommentText>댓글</FooterCommentText>
              </FooterShareComment>
            </Footer>
          </MainBoard>
        </MainMinWrap>
      </MainWrap>
    </>
  );
}

export default MainComponent;
