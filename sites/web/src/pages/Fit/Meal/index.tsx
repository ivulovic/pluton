import { MealProps } from "../types";
import "./style.scss";

export default function Meal(props: MealProps): JSX.Element {
  const { title, description, size } = props;
  return (
    <div className="meal">
      <h1 className="heading">{title}</h1>
      {size && <h2 className="subheading">{size}</h2>}
      <p className="paragraph">{description || "Ne postoji recept za ovo jelo."}</p>
    </div>
  );
}
