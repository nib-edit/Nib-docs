import * as React from 'react';
import { PureComponent } from 'react';

const customTheme = {
  color: {
    highlight: { secondary: '#424242' },
    text: { primary: '#e0e0e0', secondary: '#bdbdbd' },
    background: {
      primary: '#212121',
      secondary: '#424242',
    },
    border: {
      primary: '#636363',
    },
    blurMarker: '#616161',
  },
  border: {
    primary: '1px solid #636363',
  },
  boxShadow: {
    secondary: '#424242 0px 1px 0px',
  },
};

export default class Themed extends PureComponent {
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
              toolbar: {
                options: 'top',
              },
            }}
            theme={customTheme}
            styleConfig={{
              editor: () => ({
                height: '160px',
              }),
            }}
          />
        )}
      </div>
    );
  }
}
