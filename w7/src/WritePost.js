import React, { useState } from "react";
import InputPost from "./InputPost";
import { PostSection, PostSubmit, PostSubmitDiv } from "./styledComponent";
import WriteTitle from "./WriteTitle";

const SubmitComponent = React.memo(() => (
  <PostSubmitDiv>
    <PostSubmit>작성완료</PostSubmit>
  </PostSubmitDiv>
));
function WritePost() {
  const [inputs, setInputs] = useState({
    title: "",
    contents: "",
  });
  const { title, contents } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <PostSection>
      <WriteTitle />
      <InputPost onChange={onChange} title={title} contents={contents} />
      <SubmitComponent />
    </PostSection>
  );
}

export default WritePost;
