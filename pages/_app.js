// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import "../styles.css"; // Import your global styles
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Component {...pageProps} />
        </NextUIProvider>
    </>
  );
}

export default MyApp;
