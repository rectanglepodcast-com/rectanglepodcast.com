import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => {
  const year = useSignal(new Date().getFullYear());

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    year.value = new Date().getFullYear();
  });
  return (
    <footer class="bg-gray-700 p-4 text-center text-white">
      © {year.value} Rectangle Podcast. All rights reserved.
    </footer>
  );
});
