import * as React from "react";

import CommentEditor from "../components/Editor/Comment";
import FullFeaturedEditor from "../components/Editor/FullFeatured";
import FullPageEditor from "../components/Editor/FullPage";
import GoogleDocsStyleEditor from "../components/Editor/GoogleDocsStyle";
import InlineToolbarEditor from "../components/Editor/InlineToolbar";
import ThemedEditor from "../components/Editor/Themed";
import TrackChangesEditor from "../components/Editor/TrackChanges";
import HtmlConverterEditor from "../components/Editor/HtmlConverter";
import MarkdownConverterEditor from "../components/Editor/MarkdownConverter";
import CollaborativeEditor from "../components/Editor/Collaborative";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default () => {
  console.log("re-render");
  return (
    <>
      <Header />

      <main className="main-section">
        <div id="full_featured_editor">
          <h2>1. Editor with all editing features enabled</h2>
          <FullFeaturedEditor nodata height="160px" />
        </div>
        <div id="inline_toolbar_editor">
          <h2>2. Editor with inline toolbar</h2>
          <InlineToolbarEditor />
        </div>
        <div id="track_changes_editor">
          <h2>3. Editor with option to track changes</h2>
          <p>
            Click an area in editor or hover a commit record to highlight the
            change. Enter from keyboard <code>cmd-s</code> or click{" "}
            <code>Save</code> button to record the changes made in editor.{" "}
            Username added to commits can be changed in username input box.
          </p>
          <TrackChangesEditor />
        </div>
        <div id="comment_editor">
          <h2>4. Editor with option to add comments</h2>
          <p>
            Select an area of text to add comment to it, or click an existing
            comment to edit its details. With each comment metadata like userid,
            username is also saved.
            <br />
            Comment added by other users can only be viewed and not edited,
            change userid to see that in action.
          </p>
          <CommentEditor />
        </div>
        <div id="dark_theme_editor">
          <h2>5. Editor with dark theme</h2>
          <ThemedEditor />
        </div>
        <div id="full_page_editor">
          <h2>6. Full page editor</h2>
          <p>Click button to see full page editor.</p>
          <FullPageEditor />
        </div>
        {/* <div id="html_conversion_editor">
          <h2>7. Editor with HTML conversion of content</h2>
          <p>
            Enter HTML content in textarea and click Update Editor button to
            update editor content. Make any change in editor to see change in
            generated HTML content.
          </p>
          <HtmlConverterEditor />
        </div> */}
        <div id="word_style_editor">
          <h2>7. Google docs style editor</h2>
          <p>Click button to see docs style editor.</p>
          <GoogleDocsStyleEditor />
        </div>
        <div id="markdown_conversion_editor">
          <h2>8. Editor with markdown conversion</h2>
          <MarkdownConverterEditor />
        </div>
        <div id="custom_option_editor">
          <h2>9. Custom editor option</h2>
        </div>
        <div id="collaborative_editor">
          <h2>10. Collaborative editor</h2>
          <CollaborativeEditor />
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
          margin: 12px 0;
        }
        .main-section > div:not(:first-of-type) {
          margin-top: 150px;
        }
        p {
          font-size: 16px;
          margin: 20px 0;
        }
      `}</style>
    </>
  );
};
