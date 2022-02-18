import React from "react";
import Renderer from "../Renderer";
import { map } from "../../utils/components";

const Section = ({ backgroundColor, content = [] }) => {
  const components = map(content);
  return (
    <section style={{ backgroundColor }} className="py-12">
      {components.map((component) => (
        <Renderer key={component.id} {...component} />
      ))}
    </section>
  );
};

export default Section;
