import { MealType } from "./types";

export const getMealType = (i: number): MealType => {
  switch (i) {
    case 0:
      return {
        time24: "07:00",
        time: "07:00 AM",
        name: "Doručak",
      };
    case 1:
      return {
        time24: "10:00",
        time: "10:00 AM",
        name: "Užina",
      };
    case 2:
      return {
        time24: "13:00",
        time: "01:00 PM",
        name: "Ručak",
      };
    case 3:
      return {
        time24: "16:00",
        time: "04:00 PM",
        name: "Užina",
      };
    case 4:
      return {
        time24: "19:00",
        time: "07:00 PM",
        name: "Večera",
      };
    default:
      return {
        time24: "22:00",
        time: "10:00 AM",
        name: "Dodatni obrok",
      };
  }
};
