import { Component } from "react";

import Nav from "./Nav";

export default function withVisualizationLinks(WrappedComponent: React.FC): React.ComponentClass {
  return class Enhanced extends Component {
    render(): JSX.Element {
      return (
        <div className="visualization">
          <Nav />
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
