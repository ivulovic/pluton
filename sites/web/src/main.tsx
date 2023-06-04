import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "pluton-ui/src/index.css";

import "./index.css";
import { translationMessages } from "@web/translations";

import DefaultLayout from "./components/Layout/Default";
import DesktopLayout from "./components/Layout/Desktop";
import ZenLayout from "./components/Layout/Zen";
import { IntlProvider, defaultLocale } from "./core";
import store from "./core/redux/utils/createStore";
import AIPage from "./pages/AI";
import Desktop from "./pages/Desktop";
import OpenSourcePage from "./pages/OpenSource";
import AirQuality from "./pages/OpenSource/Content/Health/AirQuality";
import Covid19Ambulances from "./pages/OpenSource/Content/Health/Covid19Ambulances";
import Covid19Statistic from "./pages/OpenSource/Content/Health/Covid19Statistic";
import OpenSourceOverview from "./pages/OpenSource/Content/Overview";
import { ThemeProvider } from "./providers/Theme";

const container = document.getElementById("root");

const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DesktopLayout>
        <Desktop />
      </DesktopLayout>
    ),
  },
  {
    path: "/ai",
    element: (
      <ZenLayout>
        <AIPage />
      </ZenLayout>
    ),
  },
  {
    path: "/open-source",
    element: (
      <DefaultLayout>
        <OpenSourcePage />
      </DefaultLayout>
    ),
    children: [
      {
        path: "",
        element: <OpenSourceOverview />,
      },
      {
        path: "covid-19-statistika",
        element: <Covid19Statistic />,
      },
      {
        path: "covid-19-ambulante",
        element: <Covid19Ambulances />,
      },
      {
        path: "kvalitet-vazduha",
        element: <AirQuality />,
      },
    ],
  },
]);

root.render(
  <ReduxProvider store={store.store}>
    <PersistGate loading={<></>} persistor={store.persistor}>
      <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale} messages={translationMessages}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </IntlProvider>
    </PersistGate>
  </ReduxProvider>,
);
