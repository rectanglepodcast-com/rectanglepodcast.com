import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "#app/RouterHead";

import "./global.css";

import { serverComponent$ } from "#experiments/fake-server-components";

import { AppProvider } from "#app/global";

export default serverComponent$(async (props) => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <AppProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <body lang="en" class="bg-gray-50 font-sans">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </AppProvider>
    </QwikCityProvider>
  );
});
