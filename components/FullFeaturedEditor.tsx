import * as React from 'react';
import { PureComponent } from 'react';
import AdvanceImagePlugin from 'nib-advance-image';
import TablePlugin from 'nib-table';
import VideoPlugin from 'nib-video';

import uploadCallback from '../utils/uploadCallback';
import data from './data';

const theme = {
  editor: () => ({
    height: '440px',
  }),
};

class TopBar extends PureComponent {
  state = {
    Editor: undefined,
  };

  componentDidMount() {
    import('nib-core').then((obj: any) => {
      this.setState({ Editor: obj.default });
    });
  }

  render() {
    const { Editor } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '32px 0',
        }}
      >
        <div>
          {Editor && (
            <Editor
              licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
              config={{
                plugins: {
                  options: 'block inline color link blockquote list help',
                },
                toolbar: {
                  options: 'top',
                  top: {
                    options:
                      'block inline color link blockquote list advance-image video table history help',
                  },
                },
              }}
              defaultValue={data}
              styleConfig={theme}
              addons={[
                new AdvanceImagePlugin(uploadCallback),
                TablePlugin,
                VideoPlugin,
              ]}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TopBar;
