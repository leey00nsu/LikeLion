import React, { useRef, useState, useEffect } from "react";
import { ContentsInput, PostWriteDiv, TitleInput } from "./styledComponent";

function InputPost({ onChange, title, contents }) {
  const titleInput = useRef();
  const contentsInput = useRef();

  useEffect(() => {
    titleInput.current.focus();
  }, []);

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      contentsInput.current.focus();
    }
  };

  return (
    <PostWriteDiv>
      <TitleInput
        name="title"
        value={title}
        placeholder="제목을 입력해주세요. (15자 이내)"
        onChange={onChange}
        ref={titleInput}
        onKeyUp={onKeyUp}
      />
      <ContentsInput
        name="contents"
        value={contents}
        cols="30"
        rows="10"
        onChange={onChange}
        ref={contentsInput}
      ></ContentsInput>
    </PostWriteDiv>
  );
}

export default InputPost;
