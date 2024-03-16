import { component$ } from "@builder.io/qwik";

import Logo from "#assets/images/Logo";

export default component$(() => {
  return (
    <div class="relative bg-gray-800 text-white">
      {/* Logo Placement */}
      <div class="py-4 text-center">
        <Logo />
      </div>
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span class="block">Welcome to Rectangle Podcast</span>
          <span class="block text-gray-300">
            Explore the latest in web development.
          </span>
        </h2>
        <div class="lex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="rounded-md bg-gray-500 px-4 py-2 text-lg font-medium text-white hover:bg-gray-400"
            >
              Listen Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
