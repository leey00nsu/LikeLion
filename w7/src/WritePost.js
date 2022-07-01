import React, { useState } from "react";
import InputPost from "./InputPost";
import { PostSection, PostSubmit, PostSubmitDiv } from "./styledComponent";
import WriteTitle from "./WriteTitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubmitComponent = React.memo(({ onSubmit }) => (
  <PostSubmitDiv>
    <PostSubmit onClick={onSubmit}>작성완료</PostSubmit>
  </PostSubmitDiv>
));

const WritePost = ({ apiUrl }) => {
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

  const navigate = useNavigate();
  const onSubmit = () => {
    axios
      .post(`${apiUrl}posts/`, {
        title: inputs.title,
        contents: inputs.contents,
        repls: [],
      })
      .then((response) => {
        navigate("../");
      });
  };
  return (
    <PostSection>
      <WriteTitle />
      <InputPost onChange={onChange} title={title} contents={contents} />
      <SubmitComponent onSubmit={onSubmit} />
    </PostSection>
  );
};

export default WritePost;
