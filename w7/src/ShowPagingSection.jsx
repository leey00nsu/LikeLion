import React from "react";
import { PagenumberDiv, PagingSection } from "./styledComponent";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ShowPagingSection() {
  return (
    <PagingSection>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PagenumberDiv>
      <PagenumberDiv>2</PagenumberDiv>
      <PagenumberDiv>
        <FontAwesomeIcon icon={faArrowRight} />
      </PagenumberDiv>
    </PagingSection>
  );
}

export default ShowPagingSection;
