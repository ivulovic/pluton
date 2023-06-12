import Content from "./Content";
import Nav from "./Nav";
import "./style.scss";

export default function OpenSourcePage(): JSX.Element {
  return (
    <div className="open-data">
      <Nav />
      <Content />
    </div>
  );
}
