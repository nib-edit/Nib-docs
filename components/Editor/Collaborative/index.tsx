import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';

import CollabPlugin from 'nib-collab-client';

const user = {
  id: Math.floor(Math.random() * 0xffffffff),
  name: 'Anonymous user',
};

const collab = new CollabPlugin({
  // serviceURL: 'ws://localhost:3000',
  serviceURL: 'ws://nib-collab.herokuapp.com',
  user,
});

export default class CollaborativeEditor extends PureComponent {
  Editor: undefined;

  state = {
    editorLoaded: false,
    editorState: undefined,
    username: 'Anonymous user',
    users: [],
  };

  componentDidMount() {
    import('nib-core').then((editorObj: any) => {
      this.Editor = editorObj.default;
      this.setState({ editorLoaded: true });
      collab.startSyncing(this.setUsers);
    });
  }

  componentWillUnmount() {
    collab.stopSyncing();
  }

  setEditorState = (editorState) => {
    this.setState({ editorState });
  };

  setUsername = (username) => {
    this.setState({ username });
  };

  setUsers = (users) => {
    this.setState({ users });
  };

  render() {
    const { Editor } = this;
    const { editorLoaded, username, users, editorState } = this.state;

    const options = users
      ? Object.values(users).map(({ id, name }) => ({
          value: id,
          label: name,
        }))
      : [];

    return (
      <div>
        <div style={{ width: 200, marginBottom: 20 }}>
          <div>
            <span
              style={{
                fontSize: 14,
                width: 100,
                display: 'inline-block',
              }}
            >
              User Name
            </span>
            <input
              style={{ marginBottom: 10 }}
              className="nib-comment_msg"
              onChange={(evt) => this.setUsername(evt.target.value)}
              placeholder="Enter user name"
              value={username}
            />
          </div>
          <button
            style={{ marginBottom: 20 }}
            className="docs_btn"
            type="button"
            onClick={() => {
              collab.updateUserData({ name: username });
            }}
          >
            Update
          </button>
          <div className="select-wrapper">
            <span style={{ fontSize: 14, display: 'inline-block' }}>
              Connected Users
            </span>
            <ReactSelect
              value={options.find(({ value }) => value === user.id)}
              options={options}
            />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          {!users && (
            <div className="nib_message">Connecting to the server...</div>
          )}
          {editorLoaded && (
            <Editor
              licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
              addons={[collab]}
              defaultValue={editorState}
              onChange={this.setEditorState}
            />
          )}
        </div>
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
            }
            button:focus {
              outline: none;
            }
            .nib_message {
              position: absolute;
              top: 0px;
              bottom: 0px;
              width: 100%;
              height: 100%;
              opacity: 0.75;
              z-index: 1000;
              display: flex;
              justify-content: center;
              align-items: center;
              background: white;
            }
            .select-wrapper > div {
              z-index: 10;
            }
          `}
        </style>
      </div>
    );
  }
}
