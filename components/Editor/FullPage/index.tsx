import * as React from 'react';
import { PureComponent } from 'react';

import data from './data';

const styleConfig = {
  wrapper: () => ({
    height: '100%',
    width: '100%',
  }),
  editor: () => ({
    height: 'calc(100% - 46px)',
    width: '100%',
  }),
};

export default class FullPage extends PureComponent {
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
            <Editor defaultValue={data} styleConfig={styleConfig} />
          </div>
        )}
        <button onClick={this.showHideEditor}>Show Editor</button>
        <style jsx>
          {`
            .btn-close {
              position: fixed;
              top: 50px;
              right: 40px;
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
          `}
        </style>
      </div>
    );
  }
}
