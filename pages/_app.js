import "../styles/globals.css";
import Layout from "./components/layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Layout>
    <Head>
      <title>Title component</title> 
    </Head>     
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
