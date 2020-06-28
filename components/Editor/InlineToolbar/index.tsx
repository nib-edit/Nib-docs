import * as React from 'react';
import { PureComponent } from 'react';

import data from './data';

export default class InlineToolbar extends PureComponent {
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
      <div>
        {Editor && (
          <Editor
            config={{
              plugins: {
                options: 'block inline',
              },
              toolbar: {
                options: 'inline',
                inline: {
                  options: 'block inline',
                  block: { options: 'p h1 h2', grouped: false },
                  inline: { options: 'strong em' },
                },
              },
            }}
            autoFocus
            defaultValue={data}
            styleConfig={{
              wrapper: () => ({
                color: '#0000e4',
                borderTop: 'none',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
              }),
              editor: () => ({
                color: '#0000e4',
              }),
            }}
          />
        )}
      </div>
    );
  }
}
