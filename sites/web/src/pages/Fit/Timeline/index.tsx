import { useEffect, useState } from "react";

import useDate from "@web/hooks/useDate";

import "./style.scss";
import { timeline } from "../timelineData";
import { Meal, TimelineProps, TimetableRecipe } from "../types";
import { getMealType } from "../utils";

export default function Timeline(props: TimelineProps): JSX.Element {
  const { date } = props;
  const dateUtils = useDate();
  const [selected, setSelected] = useState<number>(-1);
  const [closestTime] = dateUtils.getClosestTime();
  const ts = dateUtils.getDayTimestamp(date);
  const timetable = timeline.find((x) => x.date === ts);

  const onSelect = (meals: Array<Meal>, i: number): void => {
    props.onSelect(meals);
    setSelected(i);
  };
  useEffect(() => {
    if (!timetable) {
      return;
    }
    let index = -1;
    const closest = timetable.recipes.find((j, i) => {
      const type = getMealType(i);
      if (!type) {
        return false;
      }
      index = i;
      const isClosest = closestTime.hour === type.time;
      if (isClosest) {
        index = i;
      }
      return isClosest;
    });
    if (closest) {
      onSelect(closest.meals, index);
    }
  }, [timetable]);
  return (
    <div className="timeline">
      {timetable ? (
        timetable.recipes.map((recipe: TimetableRecipe, i) => {
          const type = getMealType(i);
          // handle nearest for different dates, not only times
          const isClosest = selected > -1 ? i === selected : type ? closestTime.hour === type.time : false;
          const { meals } = recipe;
          return (
            <div className={`cell ${isClosest ? "closest" : ""}`} key={type.name}>
              <div className="time">
                <div className={`cell ${isClosest ? "closest" : ""}`}>{type.time24}</div>
              </div>
              <div
                style={{
                  // backgroundImage: `url(${"https://archive.org/download/no-photo-available/no-photo-available.png"})`,
                  backgroundImage: `url(${`/images/${meals[0].slug}.png`})`,
                }}
                className="img"
                role="presentation"
                onClick={(): void => onSelect(recipe.meals, i)}
              ></div>
              <div className="info">
                <div className="type">{type?.name}</div>
                <div className="title">{meals.map((meal) => meal.title).join(" + ")}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="cell closest">Nema plana ishrane za ovaj dan.</div>
      )}
    </div>
  );
}
