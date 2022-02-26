import "../styles/globals.css";
import { getSession, GetSessionParams, getCsrfToken } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  console.log(session);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

export async function getServerSideProps(ctx: GetSessionParams | undefined) {
  const session = await getSession(ctx);
  const csr = await getCsrfToken(ctx);
  return { props: { session: { ...session, csrf: csr } } };
}
