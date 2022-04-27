import React from "react";
import RenderAtom from "../atoms/RenderAtom";
import BlockDiv from "../blocks/BlockDiv";

const MoleculeCard = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {

  return (
    <BlockDiv
      customClassName={customClassName}
      customStyle={{
        ...customStyle
      }}
      divNumber={`${divNamePrefix}divMoleculeCardOuter`}
    >
      <RenderAtom 
        item={item.image}
        defaultAtom="image"
        customClassName="w-full h-full object-cover object-center"
				divNamePrefix={divNamePrefix}
      />
      <RenderAtom
				item={item?.title}
				defaultAtom="title"
				divNamePrefix={divNamePrefix}
			/>
			<RenderAtom
				item={item?.subtitle}
				defaultAtom="text"
				divNamePrefix={`${divNamePrefix}subtitle`}
			/>
			<RenderAtom
				item={item?.description}
				defaultAtom="text"
				divNamePrefix={divNamePrefix}
			/>
			<RenderAtom
				item={item?.button}
				defaultAtom="button"
				divNamePrefix={divNamePrefix}
			/>
    </BlockDiv>
  )
}

export default MoleculeCard;