import React from "react";
import { overrideTailwindClasses } from "tailwind-override";
import _ from "lodash";

const BlockDiv = ({
  divNumber,
  customClassName,
  customStyle,
  children,
  type = "div",
  onClick,
  role,
  divNamePrefix = "",
}) => {
  if (_.isEmpty(children)) return null;

  const myDivNumber = `${divNamePrefix}${divNumber}`;

  const blockProps = {
    className: overrideTailwindClasses(
      `${customClassName || ""} }`
    ),
    style: {
      ...customStyle
    },
    onClick: onClick,
    ["div-name"]: myDivNumber,
  };

  switch (type) {
    case "div":
      return <div {...blockProps}>{children}</div>;
    case "span":
      return <span {...blockProps}>{children}</span>;
    case "i":
      return <i {...blockProps}>{children}</i>;
    case "p":
      return <p {...blockProps}>{children}</p>;
    default:
      return <div {...blockProps}>{children}</div>;
  }
};

export default BlockDiv;
