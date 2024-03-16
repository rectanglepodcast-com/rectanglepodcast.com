import { component$ } from "@builder.io/qwik";

export interface LogoProps {}

export const Logo = component$<LogoProps>((props) => {
  return (
    <img
      width="150"
      height="150"
      class="mx-auto inline-block h-20 w-20 rounded-full object-cover"
      src="https://via.placeholder.com/150"
      alt="Rectangle Podcast Logo"
    />
  );
});
