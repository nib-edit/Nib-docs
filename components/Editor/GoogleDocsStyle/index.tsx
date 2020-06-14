import * as React from 'react';
import { PureComponent } from 'react';

import data from './data';

const styleConfig = {
  wrapper: () => ({
    width: '100%',
    background: '#EEEEEE',
  }),
  editor: () => ({
    minHeight: '750px',
    width: '60%',
    margin: '75px auto',
    padding: '40px',
    boxShadow: '1px 2px 5px 2px #E0E0E0',
  }),
  toolbar: {
    top: () => ({
      boxShadow: '0px 5px 5px 0px #E0E0E0',
    }),
  },
};

export default class GoogleDocsStyle extends PureComponent {
  state = {
    Editor: undefined,
    visible: false,
  };

  componentDidMount() {
    import('nib-core').then((obj: any) => {
      this.setState({ Editor: obj.default });
    });
  }

  showHideEditor = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { Editor, visible } = this.state;

    return (
      <div>
        {Editor && visible && (
          <div className="wrapper">
            <button className="btn-close" onClick={this.showHideEditor}>
              Hide Editor
            </button>
            <h1 className="title">My interesting file</h1>
            <Editor defaultValue={data} styleConfig={styleConfig} />
          </div>
        )}
        <button onClick={this.showHideEditor}>Show Editor</button>
        <style jsx>
          {`
            .btn-close {
              position: fixed;
              top: 7px;
              right: 10px;
              z-index: 10;
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
            .wrapper {
              height: 100%;
              left: 0;
              top: 0;
              width: 100%;

              overflow: scroll;
              position: fixed;
              z-index: 10;
            }
            .title {
              height: 50px;
              background: white;
              margin: 0;
              font-size: 24px;
              font-weight: 400;
              padding: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
