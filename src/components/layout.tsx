import { graphql, StaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import {
  createGlobalStyle,
  ThemeProvider,
} from '../styled-components/styled-components';
import { theme } from '../styled-components/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla|Montserrat');
  * {
    margin: 0;
    padding: 0;
  }
  body {
    text-align: center;
    font-family: Montserrat;
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
