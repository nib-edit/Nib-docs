import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default () => {
  return (
    <>
      <Head>
        <title>Nib</title>
        <link rel="icon" href="pen.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="menu-section">
        <Link href="/">
          <a>
            <img className="logo" src="pen.svg" />
          </a>
        </Link>
        <nav className="menu">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/features">
            <a>Features</a>
          </Link>
          <Link href="/demo">
            <a>Demo</a>
          </Link>
          <Link href="/plugins">
            <a>Plugins</a>
          </Link>
          <Link href="/docs">
            <a>Docs</a>
          </Link>
          <Link href="/license">
            <a>License</a>
          </Link>
          <a
            href="https://github.com/nib-edit"
            target="_blank"
            className="github_wrapper"
          >
            <img src="github.png" />
            Github
          </a>
        </nav>
      </div>

      <div className="padder"></div>

      <style jsx>
        {`
          .menu-section {
            background-color: #0000e4;
            // border-bottom: 1px solid #4a26fd;
            color: white;

            display: flex;
            justify-content: space-between;

            padding: 10px;
            position: fixed;
            height: 75px;
            width: 100%;
            z-index: 2;
          }
          .logo {
            height: 100%;
          }
          .menu {
            padding: 12px;
          }
          .menu > a {
            color: white;
            margin: 0 40px;
            text-decoration: none;
          }
          .padder {
            min-height: 75px;
            width: 100%;
          }
          nav {
            display: flex;
            align-items: center;
          }
          .github_wrapper > img {
            margin-right: 4px;
            width: 24px;
          }
          .github_wrapper {
            align-items: center;
            display: flex;
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Roboto', sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </>
  );
};
