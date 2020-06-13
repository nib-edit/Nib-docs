import React, { PureComponent, ChangeEvent } from 'react';

import data from './data';

const theme = {
  editor: () => ({
    height: '320px',
  }),
};

const formatDate = (str: string) => {
  const d = new Date(str);
  if (!d) return '';
  return `${
    d.getMonth() + 1
  }-${d.getDate()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
};

export default class TrackChanges extends PureComponent {
  Editor: undefined;
  tracker: undefined;
  userid = Math.floor(Math.random() * 0xffffffff);

  state = {
    cmdKeyPressed: false,
    username: 'Anonymous user',
    trackState: undefined,
  };

  updateTrackedState = () => {
    this.setState({
      trackState: (this.tracker as any).getState(),
    });
  };

  componentDidMount() {
    import('nib-core').then((editorObj: any) => {
      this.Editor = editorObj.default;
      import('nib-track').then((trackObj: any) => {
        const TrackPlugin = trackObj.default;
        this.tracker = new TrackPlugin();
        this.updateTrackedState();
      });
    });
  }

  updateName = (evt: ChangeEvent) =>
    this.setState({ username: (evt.target as HTMLInputElement).value });

  doCommit = () => {
    const { username } = this.state;
    (this.tracker as any).doCommit({ username, userid: this.userid });
    this.updateTrackedState();
  };

  revertCommit = (commit) => {
    const { username } = this.state;
    (this.tracker as any).revertCommit(commit.id, {
      username,
      userid: this.userid,
    });
    this.updateTrackedState();
  };

  highlightCommit = (commit) => {
    (this.tracker as any).highlightCommit(commit.id);
    this.updateTrackedState();
  };

  resetHighlight = () => {
    (this.tracker as any).resetHighlight();
    this.updateTrackedState();
  };

  onKeyDown = (evt) => {
    const { cmdKeyPressed } = this.state;
    if (evt.key === 'Meta') this.setState({ cmdKeyPressed: true });
    else if (evt.key === 's' && cmdKeyPressed) {
      this.doCommit();
      evt.preventDefault();
    }
  };

  onKeyUp = () => {
    this.setState({ cmdKeyPressed: false });
  };

  render() {
    const { trackState, username } = this.state;
    return (
      <div>
        Username:{' '}
        <input
          style={{ marginBottom: 10 }}
          className="nib-track_msg"
          onChange={this.updateName}
          placeholder="Enter user name"
          value={username}
        />
        <div className="nib-track-wrapper">
          <div>
            <div onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp}>
              {this.Editor && this.tracker && (
                <this.Editor
                  licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
                  config={{
                    plugins: { options: 'block inline list' },
                    toolbar: {
                      options: 'top',
                      top: { options: 'block inline list' },
                    },
                  }}
                  styleConfig={theme}
                  addons={[this.tracker]}
                  defaultValue={data}
                  onChange={this.updateTrackedState}
                />
              )}
            </div>
            <div className="nib-track_save_wraper">
              <button
                className="nib-track_save"
                disabled={trackState && !trackState.hasUncommittedSteps}
                onClick={this.doCommit}
                type="button"
              >
                Save
              </button>
            </div>
          </div>
          <div>
            <div className="nib-track_commits">Changes</div>
            <table className="nib-track_table">
              <tbody>
                {trackState &&
                  trackState.commits.map((commit, index) => (
                    <tr key={`${commit.time}`}>
                      <td>
                        <div
                          className={
                            trackState.highlightedCommit &&
                            trackState.highlightedCommit === commit
                              ? 'nib-highlighted-commit'
                              : ''
                          }
                          onMouseEnter={() => this.highlightCommit(commit)}
                          onMouseLeave={this.resetHighlight}
                        >
                          <div>{`${index + 1}. ${commit.data.username}`}</div>
                          <div>{formatDate(commit.time)}</div>
                          <div>
                            <button
                              className="nib-track_revert_btn"
                              onClick={() => this.revertCommit(commit)}
                              type="button"
                            >
                              Revert
                            </button>
                          </div>
                        </div>
                        <div className="nib-track-space" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <style jsx>
          {`
            .nib-track_save_wraper {
              margin-top: 10px;
            }

            .nib-track_save {
              background-color: #0000e4;
              color: white;
              height: 32px;
              border: none;
              border-radius: 2px;
              padding: 0 20px;
              font-size: 12px;
              cursor: pointer;
            }

            .nib-track_msg {
              width: 150px;
              height: 26px;
              border-style: solid;
              border-width: 1px;
              border-color: #9e9e9ebf;
            }

            .nib-track_msg_err {
              width: 150px;
              height: 26px;
              border-style: solid;
              border-width: 1px;
              border-color: red;
            }

            .nib-track_save:focus,
            .nib-track_msg:focus,
            .nib-track_revert_btn:focus {
              outline: none;
            }

            .nib-track_commits {
              font-weight: bold;
              margin-bottom: 10px;
            }

            .nib-track_commit_list {
              margin: 10px 0 20px;
              padding: 0 32px;
              font-size: 14px;
            }

            .nib-track_commits_message {
              width: 125px;
              display: inline-block;
            }

            .nib-track_revert_btn {
              border: none;
              text-decoration: underline;
              cursor: pointer;
              background: transparent;
              font-size: 14px;
              padding: 0;
              margin-top: 4px;
            }

            .nib-track_save[disabled] {
              background: #c1c1c1;
              cursor: not-allowed;
            }

            .nib-highlighted-commit {
              background-color: #ffff5f;
            }

            .nib-track_table {
              border-collapse: collapse;
            }

            .nib-track_table th,
            .nib-track_table td {
              width: 8%;
              margin-bottom: 10px;
            }
            .nib-track_table td {
              font-size: 14px;
            }
            .nib-track_table td div div:first-of-type {
              font-weight: 500;
            }
            .nib-track-space {
              margin-bottom: 16px;
            }
            .nib-track_table td div div:not(:first-of-type) {
              margin-left: 14px;
            }
            .nib-track_table {
              border-collapse: collapse;
            }

            .nib-track_table th,
            .nib-track_table td {
              width: 8%;
            }
            .nib-track_table td {
              font-size: 14px;
            }

            .nib-track_table {
              border-collapse: collapse;
            }

            .nib-track_table th,
            .nib-track_table td {
              width: 8%;
            }
            .nib-track_table td {
              font-size: 14px;
            }
            .nib-track-wrapper {
              display: flex;
            }
            .nib-track-wrapper > div:first-of-type {
              width: 85%;
            }
            .nib-track-wrapper > div:last-of-type {
              margin-left: 20px;
              width: 15%;
            }
          `}
        </style>
      </div>
    );
  }
}
