import * as React from 'react';
import { PureComponent } from 'react';
import TablePlugin from 'nib-table';

export default class TableEditor extends PureComponent {
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
            licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
            config={{
              plugins: {
                options: 'help',
              },
              toolbar: {
                options: 'top',
                top: {
                  options: 'table help',
                },
              },
            }}
            addons={[TablePlugin]}
          />
        )}
      </div>
    );
  }
}
