import React from "react";
import _ from "lodash";
import BlockDiv from "../blocks/BlockDiv";
import { overrideTailwindClasses } from "tailwind-override";

const AtomText = ({
  item,
  color = "sso",
  customClassName = "",
  customStyle,
  onClick=null,
  customDivNumber="DivText",
  divNamePrefix = "",
  children
}) => {

  // Утга салгаж авах
  const value = item?.value || "";
  const valueClassName = item?.className || "";

  // Утга хоосон бол хоосон буцаах
  if(_.isEmpty(value)) return null;

  
  return (
    <>
      <BlockDiv
        customClassName={overrideTailwindClasses(
          `${customClassName} ${valueClassName}`
        )}
        customStyle={customStyle}
        divNumber={`${divNamePrefix}${customDivNumber}`}
        type="span"
        onClick={onClick}
      >
          {value}
          {children}
      </BlockDiv>
    </>
  )
}

export default AtomText;