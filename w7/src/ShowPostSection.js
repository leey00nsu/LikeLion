import React from "react";
import {
  LoadingDiv,
  LoadingImg,
  PostListDiv,
  PostSection,
  PostTitle,
  PostTitleDiv,
} from "./styledComponent";
import {
  faArrowsRotate,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loadingIcon from "./loading.svg";
import EachPost from "./EachPost";

function ShowPostSection({ isPost, loading, addPost, postList }) {
  return (
    <PostSection>
      <PostTitleDiv>
        <FontAwesomeIcon onClick={addPost} icon={faArrowsRotate} />
        <PostTitle>익명게시판</PostTitle>
        <FontAwesomeIcon icon={faPenToSquare} />
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
    </PostSection>
  );
}

export default ShowPostSection;
