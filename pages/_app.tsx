import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";
import { getSession, GetSessionParams, getCsrfToken } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding: 0;
    height: 100vh;
  }
  #__next {
    height: 100%;
  }
`;
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;

export async function getServerSideProps(ctx: GetSessionParams | undefined) {
  const session = await getSession(ctx);
  const csr = await getCsrfToken(ctx);
  return { props: { session: { ...session, csrf: csr } } };
}
