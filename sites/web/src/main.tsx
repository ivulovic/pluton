import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "pluton-ui/src/index.css";

import "./index.css";
import { translationMessages } from "@web/translations";

import DesktopLayout from "./components/Layout/Desktop";
import ZenLayout from "./components/Layout/Zen";
import { IntlProvider, defaultLocale } from "./core";
import store from "./core/redux/utils/createStore";
import AIPage from "./pages/AI";
import Desktop from "./pages/Desktop";
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
