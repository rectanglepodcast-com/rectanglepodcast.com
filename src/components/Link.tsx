import { component$, HTMLAttributes, Signal, Slot } from "@builder.io/qwik";
import {
  Link as QwikLink,
  // useLocation
} from "@builder.io/qwik-city";

import { twMerge } from "tailwind-merge";

type LinkProps = {
  key?: string | number | null;
  ref?: Signal<HTMLAnchorElement | undefined>;
  path?: string;
  class?: string;
  href?: string;
  server?: boolean;
  base?: string;
  target?: string;
} & HTMLAttributes<HTMLAnchorElement>;

export const Link = component$<LinkProps>(
  ({ path, base, ref, server = true, class: className = "", ...props }) => {
    // const baseUrl = "/"; //baseUrl(base);
    const baseUrl = undefined;
    // const location = useLocation();

    const Tag = server ? "a" : QwikLink;

    // href = '' will link to root
    if (props.href === undefined || props.href === "/") {
      props.href = "";
    } else {
      if (server && baseUrl && baseUrl !== "/") {
        if (props.href.startsWith("/")) {
          props.href = props.href.replace(/^\//, baseUrl);
        } else {
          props.href = baseUrl + props.href;
        }
      }
      // fallthrough no baseUrl
    }

    return (
      <Tag
        {...(ref ? { ref } : {})}
        class={twMerge("cursor-pointer", className)}
        {...props}
      >
        <Slot />
      </Tag>
    );
  },
);
