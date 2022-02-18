import * as React from 'react';
import '../assets/css/index.css';
import Renderer from '../components/Renderer';
import { graphql } from 'gatsby';
import { map } from '../utils/components';

const PageRenderer = ({ data }) => {
  const { content, ...page } = data.contentfulPage;
  const components = map(content);

  return (
    <main>
      {components.map((component) => (
        <Renderer key={component.id} {...component} />
      ))}
    </main>
  );
};

export const query = graphql`
  query ($pathName: String) {
    contentfulPage(pathName: { eq: $pathName }) {
      pageTitle
      content {
        ...Section
        ...Card
      }
    }
  }
`;

export default PageRenderer;
