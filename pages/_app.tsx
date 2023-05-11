import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import reset from "@/component/common";
import Layout from "@/component/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={reset} />
      <Component {...pageProps} />
    </Layout>
  );
}
