import * as React from 'react';

import FullFeaturedEditor from '../components/Editor/FullFeatured';
import InlineToolbar from '../components/Editor/InlineToolbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <Header />

      <main className="main-section">
        <div id="full_featured_editor">
          <h2>1. Editor with all features enabled</h2>
          <FullFeaturedEditor nodata height="160px" />
        </div>
        <div id="full_featured_editor">
          <h2>2. Editor with inline toolbar</h2>
          <InlineToolbar />
        </div>
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
      `}</style>
    </>
  );
};
