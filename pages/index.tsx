import * as React from 'react';
import Head from 'next/head';
import FullFeaturedEditor from '../components/FullFeaturedEditor';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nib</title>
        <link rel="icon" href="/pen.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <div className="menu-section">
          <img className="logo" src="/pen.svg" />
        </div>
        <div className="title-section">
          <h1 className="title">NIB</h1>
          <p className="subtitle">
            A wysiwyg editor built using React and Prosemirror
          </p>
        </div>
        <FullFeaturedEditor />
      </main>

      <footer>
        <title>Nib</title>
        <link rel="icon" href="/pen.png" />
      </footer>

      <style jsx>
        {`
          .menu-section {
            background-color: #0000e4;
            // border-bottom: 1px solid #4a26fd;
            color: white;

            padding: 10px;
            position: fixed;
            height: 100px;
            width: 100%;
          }
          .title-section {
            background-color: #0000e4;
            color: white;

            padding-top: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;

            height: 420px;
            width: 100%;
          }
          .title {
            font-size: 84px;
            font-weight: 400;
            margin-bottom: 24px;
            margin-top: 64px;
          }
          .subtitle {
            font-size: 20px;
            font-style: italic;
            font-weight: 300;
          }
          .logo {
            height: 75%;
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
    </div>
  );
}
