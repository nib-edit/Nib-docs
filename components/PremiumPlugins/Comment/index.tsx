import React, { PureComponent } from 'react';

import data from './data';

const theme = {
  editor: () => ({
    height: '320px',
  }),
};

export default class CommentEditor extends PureComponent {
  Editor: undefined;
  commenter: undefined;

  state = {
    editorLoaded: false,
    showMessage: false,
    userid: '12345',
    username: 'Anonymous user',
  };

  componentDidMount() {
    import('nib-core').then((editorObj: any) => {
      this.Editor = editorObj.default;
      import('nib-comment').then((commentObj: any) => {
        const CommentPlugin = commentObj.default;
        this.commenter = new CommentPlugin({
          userid: '12345',
          username: 'Anonymous user',
        });
        this.setState({ editorLoaded: true });
      });
    });
  }

  render() {
    const { Editor, commenter } = this;
    const { editorLoaded, showMessage, userid, username } = this.state;

    return (
      <div>
        <div>
          <span className="label">User Id</span>
          <input
            style={{ marginBottom: 10 }}
            className="message"
            onChange={(evt) => this.setState({ userid: evt.target.value })}
            placeholder="Enter id"
            value={userid}
          />
        </div>
        <div>
          <span className="label">User Name</span>
          <input
            style={{ marginBottom: 10 }}
            className="message"
            onChange={(evt) => this.setState({ username: evt.target.value })}
            placeholder="Enter user name"
            value={username}
          />
        </div>
        <button
          style={{ marginBottom: 20 }}
          type="button"
          onClick={() => {
            (commenter as any).updateData({ userid, username });
            this.setState({ showMessage: true });
          }}
        >
          Update
        </button>
        {showMessage && (
          <span className="success-msg">User details updated.</span>
        )}
        {editorLoaded && (
          <Editor
            licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
            config={{
              plugins: { options: 'block inline list' },
              toolbar: {
                options: 'top',
                top: { options: 'block inline list' },
              },
            }}
            addons={[commenter]}
            defaultValue={data}
            styleConfig={theme}
          />
        )}
        <style jsx>
          {`
            .label {
              fontsize: 14px;
              width: 100px;
              display: inline-block;
            }
            .message {
              width: 150px;
              height: 26px;
              border-style: solid;
              border-width: 1px;
              border-color: #9e9e9ebf;
            }
            .message:focus {
              outline: none;
            }
            .success-msg {
              fontsize: 14px;
              margin-left: 10px;
            }
            button {
              background-color: #0000e4;
              color: white;
              height: 36px;
              border: none;
              border-radius: 2px;
              padding: 0 20px;
              font-size: 12px;
              cursor: pointer;
            }
            button:focus {
              outline: none;
            }
            .nib-highlighted-comment {
              background-color: #ffff5f !important;
            }
            .nib-comment {
              background-color: #ffff5f42;
            }
            .nib-highlighted-comment_comp {
              background-color: #ffff5f !important;
            }
          `}
        </style>
      </div>
    );
  }
}
