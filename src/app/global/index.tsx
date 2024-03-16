import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  // useSignal,
  useStore,
  // type Signal,
} from "@builder.io/qwik";

export interface AppStore {}

export const AppContext = createContextId<AppStore>("app-context");

export const AppProvider = component$(() => {
  // const something = useSignal();

  const app = useStore({});

  useContextProvider(AppContext, app);

  return <Slot />;
});
