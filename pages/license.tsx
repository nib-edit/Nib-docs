import * as React from 'react';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <Header />

      <main className="main-section">
        <p>
          Following premium features are licensed, please get in touch with{' '}
          <a href="mailto:contact@nibedit.com">contact@nibedit.com</a> to get
          licenses.
        </p>

        <ol>
          <li>
            Tables{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Advance images{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Video{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Custom plugins{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Markdown converter{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Tracking changes{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Comments{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>
            Collaborative editing{' '}
            <Link href="/demo">
              <a>demo</a>
            </Link>
          </li>
          <li>Nib drive, use of nib drive is available for image uploading.</li>
        </ol>
        <p>Trial licenses are also available</p>
      </main>

      <Footer />

      <style jsx>{`
        .main-section {
          margin: 0 auto;
          padding-top: 100px;
          padding-bottom: 100px;
          width: 50%;
        }
        ol {
          margin: 40px 0;
        }
        li {
          line-height: 1.5;
        }
        a,
        a:visited {
          color: #0000e4;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};
