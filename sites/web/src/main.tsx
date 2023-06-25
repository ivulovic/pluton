import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "pluton-ui/src/index.css";

import "./index.css";
import { translationMessages } from "@web/translations";

import DefaultLayout from "./components/Layout/Default";
import DesktopLayout from "./components/Layout/Desktop";
import OpenDataLayout from "./components/Layout/OpenData";
import ZenLayout from "./components/Layout/Zen";
import { IntlProvider, defaultLocale } from "./core";
import store from "./core/redux/utils/createStore";
import AIPage from "./pages/AI";
import AppsPage from "./pages/Apps";
import Desktop from "./pages/Desktop";
import FitPage from "./pages/Fit";
import OpenSourcePage from "./pages/OpenData";
import AirQualityDocumentation from "./pages/OpenData/Documentation/Environment/AirQuality";
import Covid19ClinicDocumentation from "./pages/OpenData/Documentation/Health/Covid19Clinic";
import Covid19StatisticDocumentation from "./pages/OpenData/Documentation/Health/Covid19Statistic";
import OverviewDocumentation from "./pages/OpenData/Documentation/Overview";
import VisualizationPage from "./pages/OpenData/Visualization";
import AirQualityVisualization from "./pages/OpenData/Visualization/Environment/AirQuality";
import Covid19ClinicVisualization from "./pages/OpenData/Visualization/Health/InfoCovid19Clinic";
import Covid19StatisticVisualization from "./pages/OpenData/Visualization/Health/InfoCovid19Statistic";
import OverviewVisualization from "./pages/OpenData/Visualization/Overview";
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
    path: "/fit",
    element: (
      <ZenLayout>
        <FitPage />
      </ZenLayout>
    ),
  },
  // {
  //   path: "/apps",
  //   element: (
  //     <DefaultLayout>
  //       <AppsPage />
  //     </DefaultLayout>
  //   ),
  // },
  {
    path: "/open-data",
    element: (
      <OpenDataLayout>
        <OpenSourcePage />
      </OpenDataLayout>
    ),
    children: [
      {
        path: "",
        element: <OverviewDocumentation />,
      },
      {
        path: "documentation",
        children: [
          {
            path: "",
            element: <OverviewDocumentation />,
          },
          {
            path: "covid-19-statistic",
            element: <Covid19StatisticDocumentation />,
          },
          {
            path: "covid-19-clinic",
            element: <Covid19ClinicDocumentation />,
          },
          {
            path: "air-quality",
            element: <AirQualityDocumentation />,
          },
        ],
      },
      {
        path: "visualization",
        element: <VisualizationPage />,
        children: [
          {
            path: "",
            element: <OverviewVisualization />,
          },
          {
            path: "covid-19-statistic",
            element: <Covid19StatisticVisualization />,
          },
          {
            path: "covid-19-clinic",
            element: <Covid19ClinicVisualization />,
          },
          {
            path: "air-quality",
            element: <AirQualityVisualization />,
          },
        ],
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
