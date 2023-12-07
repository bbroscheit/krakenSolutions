import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";
// import styles from '../modules/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Kraken Solutions</title>
        <meta name="description" content="Kraken Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </>
  );
};
export default Layout;