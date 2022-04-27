import React, { lazy } from "react";

const RenderMolecule = ({
  moleculeConfig,
  ...props
}) => {
  const moleculeType = moleculeConfig?.type || "MoleculeCard";

  const RenderComponent = lazy(() => import(`./${moleculeType}`));

  return (
    <RenderComponent 
      customClassName={moleculeConfig?.className}
      customStyle={moleculeConfig?.customStyle}
      {...moleculeConfig?.props}
      {...props}
    />
  );
};

export default RenderMolecule;