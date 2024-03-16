import { serverComponent$ } from "#_experiments/fake-server-component";

import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "#global/RouterHead";

import "./global.css";

import { GlobalProvider } from "#global/context";

export default serverComponent$((props) => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <GlobalProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <RouterHead />
        </head>
        <body lang="en" class="bg-gray-50 font-sans">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </body>
      </GlobalProvider>
    </QwikCityProvider>
  );
});
