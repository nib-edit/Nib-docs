import * as React from 'react';
import Link from 'next/link';

import ConfigurableEditor from '../components/Editor/Configurable';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TableEditor from '../components/PremiumPlugins/Table';
import AdvanceImageEditor from '../components/PremiumPlugins/AdvanceImage';
import VideoEditor from '../components/PremiumPlugins/Video';
import TrackChangesEditor from '../components/PremiumPlugins/TrackChanges';

export default () => {
  return (
    <>
      <Header />
      <main className="main-section">
        <h1>Plugins</h1>
        <p>
          Nib editor comes with a set of plugins to extend the functionality
          provided by the core editor. There is a set of standard plugins which
          are open source, there is another set of premium plugins which are{' '}
          <Link href="/license">
            <a>licensed</a>
          </Link>
          .
        </p>
        <p>
          Menu option for each plugin can be seem below, corresponding keyboard
          shortcut are listed in help menu.
        </p>
        <h2>Standard plugins</h2>
        <ol>
          {StandardPlugins.map(({ label, details, config }) => (
            <li>
              <h3>{label}</h3>
              <p>{details}</p>
              <ConfigurableEditor config={config} />
            </li>
          ))}
        </ol>
        <h2>Premium plugins</h2>
        <ol>
          <li>
            <h3>Table</h3>
            <p>
              Table is supported, also table updating options like add or remove
              column/row/header is also present.
            </p>
            <TableEditor />
          </li>
          <li>
            <h3>Advance Image</h3>
            <p>Add a table and click it to see image updating options.</p>
            <AdvanceImageEditor />
          </li>
          <li>
            <h3>Video</h3>
            <VideoEditor />
          </li>
          <li>
            <h3>Custom Plugin</h3>
          </li>
          <li>
            <h3>Markdown Converter</h3>
          </li>
          <li>
            <h3>Track Changes</h3>
            <TrackChangesEditor />
          </li>
        </ol>
        <h2>Premium plugins in beta</h2>
        <ol>
          <li>
            <h3>Comment</h3>
          </li>
          <li>
            <h3>Collaborative Editing</h3>
          </li>
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
          margin: 40px 0;
        }
        p {
          font-size: 16px;
          margin: 20px 0;
        }
        li {
          margin: 40px 0;
        }
      `}</style>
    </>
  );
};

const StandardPlugins = [
  {
    label: 'Block styles',
    details:
      'Block style options can either be grouped into a dropdown are displayed as separate buttons.',
    config: {
      plugins: { options: 'block help' },
      toolbar: {
        options: 'top',
        top: {
          block: { grouped: true },
          options: 'block help',
        },
      },
    },
  },
  {
    label: 'Inline styles',
    details:
      'Inline styles supported are bold, italic, underline, strike, superscript, subscript, inline code.',
    config: {
      plugins: { options: 'inline help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'inline help',
        },
      },
    },
  },
  {
    label: 'Color',
    details: 'Text color and fill color are supported.',
    config: {
      plugins: { options: 'color help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'color help',
        },
      },
    },
  },
  {
    label: 'Link',
    config: {
      plugins: { options: 'link help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'link help',
        },
      },
    },
  },
  {
    label: 'Blockquote',
    config: {
      plugins: { options: 'blockquote help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'blockquote help',
        },
      },
    },
  },
  {
    label: 'List',
    details: 'Nested ordered and un-ordered lists are supported.',
    config: {
      plugins: { options: 'list help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'list help',
        },
      },
    },
  },
  {
    label: 'Image',
    config: {
      plugins: { options: 'image help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'image help',
        },
      },
    },
  },
  {
    label: 'History',
    config: {
      plugins: { options: 'help' },
      toolbar: {
        options: 'top',
        top: {
          options: 'history help',
        },
      },
    },
  },
];
