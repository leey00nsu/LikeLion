import { Main, MediaDiv } from "./styledComponent";

// yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons

import { GlobalStyles, darkTheme, lightTheme } from "./styles";
import { ThemeProvider } from "styled-components";

import { useState } from "react";
import Header from "./Header";
import Slogun from "./Slogun";
import ShowPostSection from "./ShowPostSection";
import ShowPagingSection from "./ShowPagingSection";
import Footer from "./Footer";

function App() {
  const initialPostList = [
    { id: 1, title: "제목", replCount: 1 },
    { id: 2, title: "제목2", replCount: 15 },
    { id: 3, title: "제목3", replCount: 8 },
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPost, setIsPost] = useState(false);

  const [postList, setPostList] = useState(initialPostList);
  const addPost = () => {
    setPostList((postList) => [
      ...postList,
      { id: 4, title: "제목4", replCount: 21 },
    ]);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Slogun />
            <ShowPostSection
              isPost={isPost}
              loading={loading}
              postList={postList}
              addPost={addPost}
            />
            <ShowPagingSection />
          </Main>
          <Footer />
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}

export default App;
