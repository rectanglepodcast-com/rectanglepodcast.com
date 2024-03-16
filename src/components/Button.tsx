import { component$, Slot, sync$ } from "@builder.io/qwik";

import { Link } from "#components/Link";

import Spinner from "#assets/icons/Spinner";

// save it's Tailwind
export const LoadingSpinner = () => (
  <div class="absolute bottom-[2px] left-[2px] right-[2px] top-[2px] flex items-center justify-center rounded-3xl  backdrop-blur-[1px]">
    <Spinner />
    <span class="sr-only">Loading...</span>
  </div>
);

export const Button = component$(({ loading, onClick$, ...props }: any) => {
  const loading$ = sync$((_e: Event, target: HTMLButtonElement) => {
    const span = target.querySelector("span");
    target.disabled = span!.hidden;
    span!.hidden = !span!.hidden;
  });
  let clickListener = {};
  if (onClick$) {
    if (Array.isArray(onClick$)) {
      clickListener = { onClick$: [loading$, ...onClick$, loading$] };
    } else {
      clickListener = { onClick$: [loading$, onClick$, loading$] };
    }
  }
  const Tag = props.href ? Link : "button";

  return (
    <Tag {...props} {...clickListener}>
      <Slot /> <span hidden>{loading ? loading : <LoadingSpinner />}</span>
    </Tag>
  );
});
