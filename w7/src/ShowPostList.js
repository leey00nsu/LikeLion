import React from "react";
import {
  LoadingDiv,
  LoadingImg,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
  PagenumberDiv,
  PagingSection,
  CursorDiv,
} from "./styledComponent";
import {
  faArrowsRotate,
  faPenToSquare,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "./loading.svg";
import EachPost from "./EachPost";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ShowPostList() {
  const initialPostList = [
    { id: 1, title: "제목", replCount: 1 },
    { id: 2, title: "제목2", replCount: 15 },
    { id: 3, title: "제목3", replCount: 8 },
  ];

  const [loading, setLoading] = useState(true);
  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState(initialPostList);

  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "제목4", replCount: 21 },
    ]);
  };

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };

  useEffect(() => {
    setTimeout(() => {
      setPostList(initialPostList);
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <PostSection>
      <PostTitleDiv>
        <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
        <PostTitle>익명게시판</PostTitle>
        <CursorDiv>
          <FontAwesomeIcon onClick={goWrite} icon={faPenToSquare} />
        </CursorDiv>
      </PostTitleDiv>
      <PostListDiv>
        {loading ? (
          <LoadingDiv>
            <LoadingImg src={loadingIcon} />
          </LoadingDiv>
        ) : isPost ? (
          <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
        ) : (
          <ul>
            {postList.map((element) => (
              <EachPost
                key={element.id}
                title={element.title}
                replCount={element.replCount}
              />
            ))}
          </ul>
        )}
      </PostListDiv>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PagenumberDiv>
        <PagenumberDiv>2</PagenumberDiv>
        <PagenumberDiv>
          <FontAwesomeIcon icon={faArrowRight} />
        </PagenumberDiv>
      </PagingSection>
    </PostSection>
  );
}

export default ShowPostList;
