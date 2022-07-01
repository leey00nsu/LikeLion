import React, { useEffect, useState, useMemo, useRef } from "react";
import {
  PostSection,
  PostTitleDiv,
  PostTitle,
  LoadingDiv,
  LoadingImg,
  PostReplDiv,
  ReplTitleDiv,
  ReplWriter,
  Repl,
  WriterDiv,
  ReplInput,
  ReplSubmitDiv,
} from "./styledComponent";
import loadingIcon from "./loading.svg";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowPost = ({ apiUrl }) => {
  const Params = useParams();
  const [post, setPost] = useState([]);
  const [repls, setRepls] = useState([]);
  const [postLoading, setPostLoading] = useState(true);
  const [replLoading, setReplLoading] = useState(true);
  const replInput = useRef();

  //useEffect 2개 사용하기
  useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.postID}`).then((response) => {
      setPost(response.data);
      setRepls(response.data.repls);
      setPostLoading(false);
      setReplLoading(false);
    });
  }, []);
  //input창 상태관리
  const [repl, setRepl] = useState("");

  const countRepls = (repls) => {
    return repls.length;
  };

  const PostAndRepl = React.memo(
    ({ post, postLoading, replLoading, repls }) => {
      return (
        <>
          <PostTitleDiv>
            <PostTitle>{post && post.title}</PostTitle>
          </PostTitleDiv>

          {postLoading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : (
            <PostReplDiv>{post && post.contents}</PostReplDiv>
          )}

          {/* post contents */}

          <ReplTitleDiv>댓글 {replCount} </ReplTitleDiv>
          {replLoading ? (
            <LoadingDiv>
              <LoadingImg src={loadingIcon} />
            </LoadingDiv>
          ) : (
            repls &&
            repls.map((element) => (
              <PostReplDiv key={element.id}>
                <ReplWriter>익명</ReplWriter>
                <Repl>{element}</Repl>
              </PostReplDiv>
            ))
          )}
        </>
      );
    }
  );

  const onSubmitRepl = () => {
    axios
      .post(`${apiUrl}repl/`, {
        contents: repl,
        post: Params.postID,
      })
      .then(() => {
        window.location.reload();
      });
  };
  const onChange = (e) => {
    setRepl(e.target.value);
  };
  //memo hook실습
  const replCount = useMemo(() => countRepls(repls), [repls]);

  return (
    <div>
      <PostSection>
        <PostAndRepl
          post={post}
          postLoading={postLoading}
          replCount={replCount}
          replLoading={replLoading}
          repls={repls}
        />
        <WriterDiv>
          <ReplInput
            ref={replInput}
            onChange={onChange}
            value={repl}
          ></ReplInput>
          <ReplSubmitDiv onClick={onSubmitRepl}>
            <span>입력</span>
          </ReplSubmitDiv>
        </WriterDiv>
      </PostSection>
    </div>
  );
};

export default ShowPost;
