import * as React from 'react';

import FullFeaturedEditor from '../components/Editor/FullFeatured';
import InlineToolbar from '../components/Editor/InlineToolbar';
import TrackChanges from '../components/Editor/TrackChanges';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <Header />

      <main className="main-section">
        <div>This page is under construction :)</div>
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
