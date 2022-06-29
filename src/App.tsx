import * as React from "react";
import { hot } from "react-hot-loader/root";
import ColorSelector from "./ui/ColorSelector";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <ColorSelector />
      </>
    );
  }
}

export default hot(App);
