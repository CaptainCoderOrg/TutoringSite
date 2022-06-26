import Head from 'next/head';
import { PopupWidget } from "react-calendly";

import { useEffect, useState } from 'react';

import '../styles/globals.css';

export default function App(props) {
  const { Component, pageProps } = props;

  const [root, setRoot] = useState(undefined);

  // get root element on start
  useEffect(() => {
    setRoot(document.getElementById('__next'));
  }, []);

  return (
    <>
      <Head>
        <title>Captain Coder</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
      </Head>
      <PopupWidget
        url="https://calendly.com/d/dm2-845-v4s"
        rootElement={root}
        text="Schedule a Lesson"
        textColor="#ffffff"
        color="#2196f3"
      />
      <Component {...pageProps} />
    </>
  );
}
