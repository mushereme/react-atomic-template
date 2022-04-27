import React, { lazy } from "react";

const RenderAtom = ({
  item,
  defaultAtom="text",
  customClassName,
  customStyle,
  customProps,
  onClick,
  customDivNumber = undefined,
  divNamePrefix = "",
  ...props
}) => {

  // Атомийн тохиргоо 
  const positionnemgoo = item?.positionnemgoo || {};

  // Atom-ийн theme тохиргоо
  const atom = positionnemgoo?.atom || {type: defaultAtom}

  // Үндсэн датанаас хэрэгцээт утгуудыг цуглуулав
  const value = atom?.value ? atom?.value : item?.value;
  const className = atom?.classname ? atom?.classname : item?.classname;
  const atomClassName = `${customClassName} ${atom?.className || ""}`;
  const atomStyle = { ...customStyle, ...atom?.style };

  // Атом бүтээх тохиргоог бүрдүүлэв.
  const atomProps = {
    ...customProps,
    item: { ...item, value: value, className: className },
    customClassName: atomClassName,
    customStyle: atomStyle,
    onClick: onClick,
    customDivNumber: customDivNumber,
    divNamePrefix: divNamePrefix,
    ...(atom?.props || {}),
  }

  // Атомуудын жагсаалт
  const atomList = {
    text: "AtomText",
    // title: "AtomTitle",
    // image: "AtomImage",
    // img: "AtomImage",
    // button: "AtomButton",
    // currency: "AtomCurrency",
    // tag: "AtomTag",
    // icon: "AtomIcon",
    // number: "AtomNumber",
    // input: "AtomInput",
    // imagemagnify: "AtomImageMagnify",
    // avatar: "AtomAvatar",
  };

  // Тохирох атомын файлыг дуудах
  const RenderComponent = lazy(() => import(`./${atomList?.[atom?.type] || "AtomText"}`))

  return (
    <RenderComponent
      {...atomProps}
    >
      {props.children}
    </RenderComponent>
  )
}

export default RenderAtom;