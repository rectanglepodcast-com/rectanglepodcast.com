import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
  // useSignal,
  useStore,
  // type Signal,
} from "@builder.io/qwik";

export interface GlobalStore {}

export const GlobalContext = createContextId<GlobalStore>("global-context");

export const GlobalProvider = component$(() => {
  // const something = useSignal();

  const app = useStore({});

  useContextProvider(GlobalContext, app);

  return <Slot />;
});
