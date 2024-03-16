import { component$ } from "@builder.io/qwik";

export interface LogoProps {
  src: string;
  alt: string;
}

export default component$<LogoProps>((props) => {
  return (
    <img
      width="400"
      height="250"
      class="rounded-lg object-cover shadow-lg"
      src={props.src}
      alt={props.alt}
    />
  );
});
