import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <Header />

      <main className="main-section">
        Some distinguishing features of the editor are:
        <ol>
          <li>Support for multiple browsers and devices</li>
          <li>Multiple rich text styling options</li>
          <li>Headings</li>
          <li>Text and background colors</li>
          <li>Link</li>
          <li>Blockquote</li>
          <li>Ordered and unordered list</li>
          <li>Images</li>
          <li>Inline toolbar</li>
          <li>Full page mode</li>
          <li>Undo redo options</li>
          <li>Help menu</li>
          <li>Theming</li>
          <li>Convert HTML to prosemirror JSON</li>
          <li>Convert prosemirror JSON to HTML</li>
        </ol>
        Licensed features, licensing details:
        <ol>
          <li>Table</li>
          <li>Advance image</li>
          <li>Video</li>
          <li>Adding custom plugins</li>
          <li>Markdown converter</li>
          <li>Track changes</li>
          <li>Comments</li>
          <li>Collaborative editing</li>
          <li>Access to Nib drive for saving images</li>
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
