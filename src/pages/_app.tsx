import { AppProps } from "next/app";
import Head from "next/head";

import BasePage from "components/BasePage";
import ThemeProvider from "context/ThemeContext";

import GlobalStyles from "styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Adonis TS Blog</title>
        <meta name="description" content="Adonis Typescript Blog" />
      </Head>
      <GlobalStyles />
      <BasePage>
        <Component {...pageProps} />
      </BasePage>
    </ThemeProvider>
  );
}

export default App;
