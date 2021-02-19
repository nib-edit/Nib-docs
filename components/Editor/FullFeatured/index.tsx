import * as React from "react";
import { PureComponent } from "react";
import AdvanceImagePlugin from "nib-advance-image";
import TablePlugin from "nib-table";
import VideoPlugin from "nib-video";
import sourceEditPlugin from "nib-sourceedit";

import uploadCallback from "../../../utils/uploadCallback";
import data from "./data";

const getTheme = (height = "440px") => ({
  editor: () => ({
    height,
  }),
});

interface FullFeaturedProps {
  nodata?: boolean;
  height?: string;
}

export default class FullFeatured extends PureComponent<FullFeaturedProps> {
  state = {
    Editor: undefined,
  };

  componentDidMount() {
    import("nib-core").then((obj: any) => {
      this.setState({ Editor: obj.default });
    });
  }

  render() {
    const { Editor } = this.state;
    const { nodata, height } = this.props;

    return (
      <div>
        {Editor && (
          <Editor
            licenseKey="c1ba076f-6793-45d4-a66d-02d4204b6297"
            config={{
              plugins: {
                options: "block inline color link blockquote list help",
              },
              toolbar: {
                options: "top",
                top: {
                  options:
                    "block inline color link blockquote list advance-image video table history sourceedit help",
                },
              },
            }}
            defaultValue={!nodata && data}
            styleConfig={getTheme(height)}
            addons={[
              new AdvanceImagePlugin(uploadCallback),
              TablePlugin,
              VideoPlugin,
              sourceEditPlugin,
            ]}
          />
        )}
      </div>
    );
  }
}
