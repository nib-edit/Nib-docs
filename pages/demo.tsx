import * as React from 'react';

import FullFeaturedEditor from '../components/Editor/FullFeatured';
import InlineToolbar from '../components/Editor/InlineToolbar';
import TrackChanges from '../components/Editor/TrackChanges';
import Themed from '../components/Editor/Themed';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <Header />

      <main className="main-section">
        <div>This page is under construction :)</div>

        <div id="full_featured_editor">
          <h2>1. Editor with all editing features enabled</h2>
          <FullFeaturedEditor nodata height="160px" />
        </div>
        <div id="inline_toolbar_editor">
          <h2>2. Editor with inline toolbar</h2>
          <InlineToolbar />
        </div>
        <div id="track_changes_editor">
          <h2>3. Editor with option to track changes</h2>
          <p>
            Click an area in editor or hover a commit record to highlight the
            change. Enter from keyboard <code>cmd-s</code> or click{' '}
            <code>Save</code> button to record the changes made in editor.{' '}
          </p>
          <TrackChanges />
        </div>
        <div id="comment_editor">
          <h2>4. Editor with option to add comments</h2>
        </div>
        <div id="dark_theme_editor">
          <h2>5. Editor with dark theme</h2>
          <Themed />
        </div>
        <div id="full_page_editor">
          <h2>6. Full page editor</h2>
        </div>
        <div id="word_style_editor">
          <h2>7. Word style editor</h2>
        </div>
        <div id="html_conversion_editor">
          <h2>8. Editor with HTML conversion of content</h2>
        </div>
        <div id="markdown_conversion_editor">
          <h2>9. Editor with markdown conversion</h2>
        </div>
        <div id="custom_option_editor">
          <h2>10. Custom editor option</h2>
        </div>
        <div id="collaborative_editor">
          <h2>11. Collaborative editor</h2>
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
