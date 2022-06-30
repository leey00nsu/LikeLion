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
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShowPostList = ({ apiUrl }) => {
  const [loading, setLoading] = useState(true);
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  const getPostList = useCallback(() => {
    setLoading(true);
    axios.get(`${apiUrl}list/?page=${page}&page_size=10`).then((response) => {
      const lastPage = Math.ceil(response.data.count / 10);
      const tempPages = [];
      for (let i = 1; i <= lastPage; i++) {
        tempPages.push(i);
      }
      setPages(tempPages);

      setPostList(response.data.results);
      setLoading(false);
    });
  });

  const navigate = useNavigate();
  const goWrite = () => {
    navigate("/write");
  };

  useEffect(getPostList, [page]);
  return (
    <>
      <PostSection>
        <PostTitleDiv>
          <FontAwesomeIcon onClick={getPostList} icon={faArrowsRotate} />
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
          ) : postList.length === 0 ? (
            <LoadingDiv>아직 기록된 글이 없습니다.</LoadingDiv>
          ) : (
            <ul>
              {postList.map((element) => (
                <EachPost
                  key={element.id}
                  title={element.title}
                  postID={element.id}
                />
              ))}
            </ul>
          )}
        </PostListDiv>
      </PostSection>
      <PagingSection>
        <PagenumberDiv>
          <FontAwesomeIcon
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
            icon={faArrowLeft}
          />
        </PagenumberDiv>
        {pages.map((pageNum) => (
          <PagenumberDiv onClick={() => setPage(pageNum)} key={pageNum}>
            {pageNum}
          </PagenumberDiv>
        ))}
        <PagenumberDiv>
          <FontAwesomeIcon
            onClick={() => {
              if (page < pages.length) setPage(page + 1);
            }}
            icon={faArrowRight}
          />
        </PagenumberDiv>
      </PagingSection>
    </>
  );
};

export default ShowPostList;
