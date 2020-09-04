import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import OfflineIcon from "./offline";
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <link
          rel="manifest"
          href={`${state.frontity.url}web-app-manifest-11302.json`}
        />
        <script type="text/javascript" src="/static/register.js" />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's.
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main>
        <AsideContainer>
          <Header />
        </AsideContainer>
        <ContentContainer>
          <Wrapper>
            <OfflineIcon />
            <Switch>
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPostType} />
              <PageError when={data.isError} />
            </Switch>
          </Wrapper>
        </ContentContainer>
      </Main>
    </>
  );
};

export default connect(Theme);

const Wrapper = styled.div`
  max-width: 800px;
  position: relative;
`;
const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

const AsideContainer = styled.div`
  flex: 1;
  color: #000;
  border-right: 1px solid rgba(0, 0, 0, 0.7);
`;

const Main = styled.div`
  display: flex;
  align-items: stretch;
  background-image: linear-gradient(
    180deg,
    rgba(239, 240, 255, 0.23),
    rgba(66, 174, 228, 0)
  );
  height: 100vh;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  @media (max-width: 560px) {
    flex: 5;
  }
  flex: 3;
`;
