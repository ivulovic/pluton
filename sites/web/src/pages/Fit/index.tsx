import { useState } from "react";

import Calendar from "./Calendar";
import Meal from "./Meal";
import Timeline from "./Timeline";
import "./style.scss";
import { Meal as IMeal } from "./types";

export default function FitPage(): JSX.Element {
  const [date, setDate] = useState(new Date().getDate());
  const [meals, setMeals] = useState<Array<IMeal>>();
  const onSelect = (day: number): void => {
    setDate(day);
    setMeals(undefined);
  };
  return (
    <div className="fit">
      <Calendar date={date} onSelect={onSelect} />
      <Timeline date={date} onSelect={setMeals} />
      {meals ? (
        <>
          <div className="divider"></div>
          {meals.map((meal) => (
            <Meal key={meal.title} title={meal.title} description={meal.description} size={meal.size} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
