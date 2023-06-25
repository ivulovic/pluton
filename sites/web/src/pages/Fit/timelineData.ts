import { recipes } from "./recipesData";
import { Recipe, Timetable } from "./types";

const ts = (day: number, month: number, year: number): number => {
  return new Date(`${month}.${day}.${year}`).setHours(0, 0, 0, 0);
};

const recipe = (slug: string, size = ""): Recipe => {
  const r = recipes.find((x) => x.slug === slug)!;
  return {
    ...r,
    size,
  };
};

export const timeline: Array<Timetable> = [
  {
    date: ts(19, 6, 2023),
    recipes: [
      {
        meals: [recipe("integralni-sendvic", "5 komada"), recipe("limunada")],
      },
      {
        meals: [recipe("jabuka", "2 komada")],
      },
      {
        meals: [recipe("piletina", "480g"), recipe("tikvice", "200g"), recipe("salata")],
      },
      {
        meals: [recipe("kiselo-mleko"), recipe("cia")],
      },
      {
        meals: [recipe("piletina", "200g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(20, 6, 2023),
    recipes: [
      {
        meals: [recipe("proja", "200g"), recipe("kiselo-mleko")],
      },
      {
        meals: [recipe("breskva", "4 komada")],
      },
      {
        meals: [recipe("juneci-cevapi", "400g"), recipe("salata")],
      },
      {
        meals: [recipe("kruska", "2 komada")],
      },
      {
        meals: [recipe("nemasni-sir", "300g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(21, 6, 2023),
    recipes: [
      {
        meals: [recipe("pileca-prsa", "250g"), recipe("integralna-kifla", "1 komad")],
      },
      {
        meals: [recipe("jabuka", "2 komada")],
      },
      {
        meals: [recipe("piletina", "480g"), recipe("paprika", "200g"), recipe("salata")],
      },
      {
        meals: [recipe("smoothie")],
      },
      {
        meals: [recipe("cezar-salata", "200g")],
      },
    ],
  },
  {
    date: ts(22, 6, 2023),
    recipes: [
      {
        meals: [recipe("namaz-od-nemasnog-sira"), recipe("integralni-hleb", "4 kriške")],
      },
      {
        meals: [recipe("kajsija", "4 komada")],
      },
      {
        meals: [recipe("nemasna-riba", "400g"), recipe("salata")],
      },
      {
        meals: [recipe("kruska", "2 komada")],
      },
      {
        meals: [recipe("juneci-cevapi", "200g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(23, 6, 2023),
    recipes: [
      {
        meals: [recipe("palenta", "300g"), recipe("kiselo-mleko")],
      },
      {
        meals: [recipe("kruska", "2 komada")],
      },
      {
        meals: [recipe("juneci-cevapi", "400g")],
      },
      {
        meals: [recipe("kiselo-mleko"), recipe("cia")],
      },
      {
        meals: [recipe("nemasni-sir", "300g"), recipe("salata")],
      },
    ],
  },

  {
    date: ts(24, 6, 2023),
    recipes: [
      {
        meals: [recipe("brusketi", "5 komada")],
      },
      {
        meals: [recipe("tresnja", "200g")],
      },
      {
        meals: [recipe("musaka-sa-tikvicama", "450g"), recipe("salata")],
      },
      {
        meals: [recipe("supa", "500ml")],
      },
      {
        meals: [recipe("piletina", "200g"), recipe("salata")],
      },
    ],
  },

  {
    date: ts(25, 6, 2023),
    recipes: [
      {
        meals: [recipe("integralni-sendvic", "5 komada"), recipe("limunada")],
      },
      {
        meals: [recipe("jabuka", "2 komada")],
      },
      {
        meals: [recipe("musaka-sa-tikvicama", "450g"), recipe("salata")],
      },
      {
        meals: [recipe("supa", "500ml")],
      },
      {
        meals: [recipe("juneci-cevapi", "200g"), recipe("salata")],
      },
    ],
  },

  {
    date: ts(26, 6, 2023),
    recipes: [
      {
        meals: [recipe("humus"), recipe("integralni-hleb", "4 kriške")],
      },
      {
        meals: [recipe("jabuka", "2 komada")],
      },
      {
        meals: [recipe("piletina", "450g"), recipe("tikvice", "200g"), recipe("salata")],
      },
      {
        meals: [recipe("kiselo-mleko"), recipe("cia")],
      },
      {
        meals: [recipe("piletina", "200g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(27, 6, 2023),
    recipes: [
      {
        meals: [recipe("proja", "200g"), recipe("kiselo-mleko")],
      },
      {
        meals: [recipe("breskva", "4 komada")],
      },
      {
        meals: [recipe("juneci-cevapi", "400g"), recipe("salata")],
      },
      {
        meals: [recipe("jogurt", "500ml")],
      },
      {
        meals: [recipe("nemasni-sir", "300g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(28, 6, 2023),
    recipes: [
      {
        meals: [recipe("pileca-prsa", "250g"), recipe("integralna-kifla")],
      },
      {
        meals: [recipe("jabuka", "2 komada")],
      },
      {
        meals: [recipe("piletina", "480g"), recipe("tikvice", "200g"), recipe("salata")],
      },
      {
        meals: [recipe("kruska")],
      },
      {
        meals: [recipe("cezar-salata", "200g")],
      },
    ],
  },
  {
    date: ts(29, 6, 2023),
    recipes: [
      {
        meals: [recipe("integralni-sendvic", "5 komada")],
      },
      {
        meals: [recipe("breskva", "4 komada")],
      },
      {
        meals: [recipe("nemasna-riba", "400g"), recipe("salata")],
      },
      {
        meals: [recipe("smoothie")],
      },
      {
        meals: [recipe("juneci-cevapi", "200g")],
      },
    ],
  },

  {
    date: ts(30, 6, 2023),
    recipes: [
      {
        meals: [recipe("ajvar"), recipe("integralni-hleb", "3 kriške")],
      },
      {
        meals: [recipe("jabuka", "2 komada")],
      },
      {
        meals: [recipe("juneci-cevapi", "400g"), recipe("salata")],
      },
      {
        meals: [recipe("kruska", "2 komada")],
      },
      {
        meals: [recipe("nemasni-sir", "300g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(1, 7, 2023),
    recipes: [
      {
        meals: [recipe("brusketi", "4 komada")],
      },
      {
        meals: [recipe("tresnja", "300g")],
      },
      {
        meals: [recipe("muckalica", "450g"), recipe("salata")],
      },
      {
        meals: [recipe("supa", "500ml")],
      },
      {
        meals: [recipe("piletina", "200g"), recipe("salata")],
      },
    ],
  },
  {
    date: ts(2, 7, 2023),
    recipes: [
      {
        meals: [recipe("integralni-sendvic", "4 komada")],
      },
      {
        meals: [recipe("kruska", "2 komada")],
      },
      {
        meals: [recipe("muckalica", "450g"), recipe("salata")],
      },
      {
        meals: [recipe("supa", "500ml")],
      },
      {
        meals: [recipe("juneci-cevapi", "200g"), recipe("salata")],
      },
    ],
  },
];
