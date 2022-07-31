import Head from "next/head";
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <div>
      
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Oxygen+Mono&display=swap" rel="stylesheet" />
      {/* <script src="https://kit.fontawesome.com/2a8702dfbc.js" crossorigin="anonymous"></script> */}
      
      
      <Head>
        <title>Harashnabin Roy | Personal Website & Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
