import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import {
  createGlobalStyle,
  ThemeProvider,
} from '../styled-components/styled-components';
import { theme } from '../styled-components/theme';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 10px;
    text-align: center;
  }
`;

interface IProps {
  children: JSX.Element;
}

const Layout = ({ children }: IProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <>
            <div>{children}</div>
            <GlobalStyle />
          </>
        </ThemeProvider>
      </>
    )}
  />
);

export default Layout;
