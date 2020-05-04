import * as React from 'react';
import { PureComponent } from 'react';

export default class MarkdownConverterEditor extends PureComponent {
  state = {
    Editor: undefined,
    MarkdownConverter: undefined,
    updateEditor: false,
    content: undefined,
    markdown: `# heading 1

**bold**
*italic*
[link](www.dummy.com)

* un-ordered list item 1

* un-ordered list item 2

1. ordered list item 1

2. ordered list item 2`,
  };

  componentDidMount() {
    import('nib-core').then((obj1: any) => {
      import('nib-markdown-converter').then((obj2: any) => {
        const MarkdownConverterClass = obj2.default;
        this.setState({
          Editor: obj1.default,
          MarkdownConverter: new MarkdownConverterClass({
            licenseKey: 'c1ba076f-6793-45d4-a66d-02d4204b6297',
          }),
        });
      });
    });
  }

  componentDidUpdate() {
    if (this.state.updateEditor) {
      this.setState({ updateEditor: false });
    }
  }

  updateContent = (content) => {
    this.setState({ content });
  };

  setHTML = (evt: React.ChangeEvent) => {
    this.setState({
      markdown: (evt.target as HTMLInputElement).value,
    });
  };

  setUpdateEditor = () => {
    this.setState({ updateEditor: true });
  };

  render() {
    const {
      Editor,
      markdown,
      updateEditor,
      MarkdownConverter,
      content,
    } = this.state;
    const defaultValue =
      MarkdownConverter && MarkdownConverter.convertFromMarkdown(markdown);
    const markdownStr =
      MarkdownConverter &&
      MarkdownConverter.convertToMarkdown(
        (content && content.doc) || defaultValue.toJSON()
      );

    return (
      <div>
        <textarea
          placeholder="Enter HTML"
          value={markdown}
          onChange={this.setHTML}
        />
        <button type="button" onClick={this.setUpdateEditor}>
          Update Editor
        </button>
        {!updateEditor && Editor && (
          <Editor
            config={{
              toolbar: {
                options: 'top',
              },
            }}
            onChange={this.updateContent}
            defaultValue={{
              doc: defaultValue.toJSON(),
              selection: { type: 'text', anchor: 0, head: 0 },
            }}
          />
        )}
        <p>Generated Markdown content</p>
        <pre>{markdownStr}</pre>
        <style jsx>
          {`
            button {
              background-color: #0000e4;
              color: white;
              height: 36px;
              border: none;
              border-radius: 2px;
              padding: 0 20px;
              font-size: 12px;
              cursor: pointer;
              margin: 20px 0 60px;
              display: block;
            }
            button:focus {
              outline: none;
            }
            textarea {
              width: 75%;
              height: 150px;
              border: 1px solid #e0e0e0;
              resize: none;
              font-size: 14px;
            }
            textarea:focus {
              outline: none;
            }
            .html-wrapper {
              position: relative;
              text-align: left;
              border: 1px solid #e0e0e0;
              border-radius: 2px;
              background-color: #ffffff;
              color: #212121;
              font-size: 14px;
              padding: 4px;
            }
            .html-wrapper table {
              border-collapse: collapse;
              table-layout: fixed;
              width: 100%;
              overflow: hidden;
            }
            .html-wrapper th {
              border: 1px solid #e0e0e0;
              background-color: #efefef;
            }
            .html-wrapper td {
              border: 1px solid #e0e0e0;
            }
            .html-wrapper h1 {
              display: block;
              font-size: 2em;
              margin-block-start: 0.67em;
              margin-block-end: 0.67em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
              font-weight: bold;
            }
            pre {
              margin: 20px 0;
              background-color: #e0e0e0;
              white-space: pre-wrap;
            }
            p {
              margin-top: 60px;
            }
          `}
        </style>
      </div>
    );
  }
}
