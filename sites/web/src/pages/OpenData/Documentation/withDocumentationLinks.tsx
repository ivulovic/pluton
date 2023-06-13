import { Component } from "react";
import "./style.scss";

import Nav from "./Nav";

export default function withDocumentationLinks(WrappedComponent: React.FC): React.ComponentClass {
  return class Enhanced extends Component {
    render(): JSX.Element {
      return (
        <div className="open-data">
          <Nav />
          <div className="open-data-content">
            <WrappedComponent {...this.props} />
          </div>
        </div>
      );
    }
  };
}
