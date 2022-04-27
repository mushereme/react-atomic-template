import React from "react";
import RenderMolecule from "../molecules/RenderMolecule";

export default function OrganismCard (props) {
  const { readyDatasrc } = props;

  console.log("RDSRC: ", readyDatasrc);

  return (
    <>
      <div>
        <p>
          Гарчиг          
        </p>
        {readyDatasrc.map((item, index) => {
          return (
            <RenderMolecule 
              key={index}
              moleculeConfig={{
                type: "MoleculeCard",
                className: "",
                props: {}
              }}
              {...{
                item: {
                  title: item?.position1,
                  image: item?.position2,
                  description: item?.position3,
                  button: item?.position10
                }
              }}
            />
          )
        })}
      
      </div>
    </>
  )
}