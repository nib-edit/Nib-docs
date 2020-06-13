import * as React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default () => {
  return (
    <>
      <Header />

      <main className="main-section">
        <p>
          Nib is light weight and feature rich wysiwyg editor. It supports even
          most complex use cases like tracking changes, adding comments, etc.
          Nib is built on top of two great frameworks - React and Prosemirror.
          React is great frakework for frontend development in general and
          Prosemirror is probably the best framework for text editing in
          browser.
        </p>
        <p>
          Extensible schema of prosemirror allows creating structured documents.
          Nib takes advantage of Prosemirror's pluggable approach. The core of
          Nib is comparatively light-weight, plugins are used to add
          functionality on top of it.
        </p>
        <p>Standard features of Nib offered by open source library are:</p>
        <ol>
          <li>Support for almost all browsers and devices</li>
          <li>
            Multiple rich text styling options like bold, italic, underline,
            strike, subscript, superscript, text color, filll color, etc
          </li>
          <li>
            Support for different block types paragraph, h1 - h6, blockquote etc
          </li>
          <li>Support for hyperlinks</li>
          <li>Support for nested ordered and unordered lists</li>
          <li>Support for images</li>
          <li>Support for inline mode with floating toolbar</li>
          <li>
            Support for customized display - full page, word like display, etc
          </li>
          <li>Allow undo and redo changes.</li>
          <li>
            Help menu that display supported formatting options and their
            keyboard shortcuts
          </li>
          <li>Changing look and feel of editor using different themes</li>
          <li>Convert prosemirror JSON to and from HTML</li>
        </ol>

        <p className="margined-text">
          Licensed features{' '}
          <Link href="/license">
            <a>licensing details:</a>
          </Link>
        </p>

        <ol>
          <li>
            Table with advance options like add/remove column/row, resize
            columns, etc
          </li>
          <li>
            Advance images with options like wrapping, aligning, re-sizing or
            linking images
          </li>
          <li>
            Support for displaying video from sources like Youtube or Vimeo
          </li>
          <li>Flexibility to add own plugin</li>
          <li>Convert prosemirror JSON to and from markdown</li>
          <li>
            Track changes make of document along with any metadata saved about
            the change like username, timestamp, etc
          </li>
          <li>Adding / editing comments to document</li>
          <li>Collaborative editing with multiple users on same document</li>
          <li>Access to Nib drive on AWS for saving images</li>
        </ol>
      </main>

      <Footer />

      <style jsx>{`
        .main-section {
          margin: 0 auto;
          padding-top: 100px;
          padding-bottom: 100px;
          width: 60%;
        }
        li {
          margin: 12px 0;
        }
        p {
          font-size: 16px;
          margin-bottom: 50px;
        }
        .margined-text {
          margin: 75px 0 50px;
        }
      `}</style>
    </>
  );
};
