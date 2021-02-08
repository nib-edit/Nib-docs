import * as React from 'react';
import FullFeaturedEditor from '../components/Editor/FullFeatured';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default () => {
  return (
    <>
      <Header />

      <main>
        <div className="title-section">
          <h1 className="title">NIB</h1>
          <p className="subtitle">
            A wysiwyg editor built using React and Prosemirror
          </p>
        </div>
        <div className="editor-wrapper">
          <FullFeaturedEditor />
        </div>
        <div className="about-editor">
          <p>
            Nib is light weight and elegant browser based wysiwyg editor.
            Despite various available solutions, wysiwyg editing in browsers
            continue to be very challenging area.
          </p>
          <p>
            Nib is built using{' '}
            <a href="https://prosemirror.net/" target="_blank">
              Prosemirror
            </a>
            , which is an a great text editing framework for browsers. Nib uses
            React as underlyging frontend framework.
          </p>
          <p>
            Nib not only has good rich text editing capabilities but also
            addresses complex editing requirements like tracking changes made to
            a document, adding comments in document, collaborative editing and
            more...
          </p>
        </div>
      </main>
      <Footer />

      <style jsx>
        {`
          .title-section {
            background-color: #0000e4;
            color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            height: 300px;
            width: 100%;
          }
          .title {
            font-size: 84px;
            font-weight: 400;
            margin-bottom: 24px;
            margin-top: 0;
          }
          .subtitle {
            font-size: 20px;
            font-style: italic;
            font-weight: 300;
          }
          .editor-wrapper {
            width: 65%;
            margin: 80px auto 100px;
          }
          .about-editor {
            line-height: 1.5;
            margin: 0 auto 100px;
            text-align: center;
            font-weight: normal;
            width: 50%;
          }
          .about-editor a,
          .about-editor a:visited {
            color: #0000e4;
          }
          .about-editor > p {
            margin-botton: 28px;
            margin-block-end: 28px;
          }
        `}
      </style>
    </>
  );
};
