import * as React from 'react';
import { PureComponent } from 'react';

interface ConfigurableEditorProps {
  config?: object;
}

export default class ConfigurableEditor extends PureComponent<
  ConfigurableEditorProps
> {
  state = {
    Editor: undefined,
  };

  componentDidMount() {
    import('nib-core').then((obj: any) => {
      this.setState({
        Editor: obj.default,
      });
    });
  }

  render() {
    const { config } = this.props;
    const { Editor } = this.state;

    return (
      <div>
        {Editor && <Editor config={config} />}
        <style jsx>{``}</style>
      </div>
    );
  }
}
