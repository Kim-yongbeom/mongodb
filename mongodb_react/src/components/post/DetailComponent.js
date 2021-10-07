import React from "react";
import styled from "styled-components";
import RoundedButton from "../common/button/RoundedButton";
import { BsTrashFill, BsGearFill } from "react-icons/bs";
import LoadingComponent from "../common/loading/LoadingComponent";
import { Link } from "react-router-dom";

const DetailWrap = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailContainer = styled.div`
  width: 70rem;
`;

const DetailTitle = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  text-align: left;
`;

const DetailTitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

const DetailHR = styled.hr`
  margin: 2rem 0;
`;

const DetailContent = styled.div`
  font-size: 2rem;
  min-height: 20rem;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

const StyledBackButton = styled(RoundedButton)`
  background: grey;
  width: 10rem;
`;

const Button = styled.div`
  text-decoration: none;
  color: white;
`;

const StyledGearIcon = styled(BsGearFill)`
  color: grey;
  font-size: 1.7rem;
  cursor: pointer;
`;

const StyledTrashIcon = styled(BsTrashFill)`
  color: grey;
  font-size: 1.7rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

function DetailComponent({
  data,
  loading,
  onUserDelete,
  onClickBack,
  profile,
}) {
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <DetailWrap>
          {data && (
            <DetailContainer>
              <DetailTitleWrap>
                <DetailTitle>{data.title}</DetailTitle>
                <DetailIconWrap>
                  {profile &&
                    (profile._id === data.writer ? (
                      <>
                        <StyledGearIcon />
                        <StyledTrashIcon onClick={onUserDelete} />
                      </>
                    ) : (
                      <></>
                    ))}
                </DetailIconWrap>
              </DetailTitleWrap>
              <DetailHR />
              <DetailContent
                dangerouslySetInnerHTML={{ __html: data.content }}
              ></DetailContent>
              <ButtonWrap>
                <StyledBackButton>
                  <Button onClick={onClickBack}>뒤로가기</Button>
                </StyledBackButton>
              </ButtonWrap>
            </DetailContainer>
          )}
        </DetailWrap>
      )}
    </>
  );
}

export default DetailComponent;
