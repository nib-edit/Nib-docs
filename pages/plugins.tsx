import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <div>This page is under construction :)</div>
        <h2>Standard plugins</h2>
        <ol>
          <li>Block</li>
          <li>Inline</li>
          <li>Color</li>
          <li>Link</li>
          <li>Blockquote</li>
          <li>List</li>
          <li>Image</li>
          <li>History</li>
          <li>Help</li>
          <li>Inline toolbar</li>
        </ol>
        <h2>Premium plugins</h2>
        <p>
          These are licensed, check details{' '}
          <Link href="/license">
            <a>here</a>
          </Link>
          .
        </p>
        <ol>
          <li>Table</li>
          <li>Advance Image</li>
          <li>Video</li>
          <li>Custom Plugin</li>
          <li>Markdown Converter</li>
          <li>Track Changes</li>
          <li>Image</li>
          <li>History</li>
          <li>Help</li>
          <li>Inline toolbar</li>
        </ol>
        <h2>Premium plugins in beta</h2>
        <p>
          These are also licensed, check details{' '}
          <Link href="/license">
            <a>here</a>
          </Link>
          .
        </p>
        <ol>
          <li>Comment</li>
          <li>Collaborative Editing</li>
        </ol>
      </main>
      <Footer />

      <style jsx>{`
        .main-section {
          margin: 0 auto;
          padding-top: 100px;
          padding-bottom: 100px;
          width: 65%;
        }
        h2 {
          font-size: 18px;
          font-weight: 400;
          margin: 20px 0;
        }
        .main-section > div:not(:first-of-type) {
          margin-top: 75px;
        }
        p {
          font-size: 16px;
          margin: 20px 0;
        }
      `}</style>
    </>
  );
};
