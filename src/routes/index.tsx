import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
  title: "Rectangle Podcast",
  meta: [
    {
      name: "description",
      content: "Rectangle Podcast",
    },
  ],
};

export default component$(() => {
  return (
    <>
      {/* Hero Section with Logo */}
      <div class="relative bg-gray-800 text-white">
        {/* Logo Placement */}
        <div class="py-4 text-center">
          <img
            width="150"
            height="150"
            class="mx-auto inline-block h-20 w-20 rounded-full object-cover"
            src="https://via.placeholder.com/150"
            alt="Rectangle Podcast Logo"
          />
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

      {/* Episodes List with Images */}
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <ul class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {/* Episode 1 */}
            <li>
              <div class="space-y-4">
                <a href="https://x.com/PatrickJS__/status/1754033753259958276?s=20">
                  <div class="aspect-w-3 aspect-h-2">
                    <img
                      width="400"
                      height="250"
                      class="rounded-lg object-cover shadow-lg"
                      src="https://via.placeholder.com/400x250"
                      alt="Episode 1"
                    />
                  </div>
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>Episode 1: React Server components for 2 hours</h3>
                    <p class="text-gray-600">February 3, 2024</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">
                      Join us as we learn step-by-step from Astro to RSC and why
                      we need the pattern
                    </p>
                  </div>
                </a>
              </div>
            </li>
            {/* Episode 2 */}
            <li>
              <div class="space-y-4">
                <a href="https://x.com/PatrickJS__/status/1756901484279877820?s=20">
                  <div class="aspect-w-3 aspect-h-2">
                    <img
                      width="400"
                      height="250"
                      class="rounded-lg object-cover shadow-lg"
                      src="https://via.placeholder.com/400x250"
                      alt="Episode 2"
                    />
                  </div>
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>Episode 2: The future of UI and AI </h3>
                    <p class="text-gray-600">February 11, 2024</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">
                      Dive deep the future of UI with ai
                    </p>
                  </div>
                </a>
              </div>
            </li>
            {/* Episode 3 */}
            <li>
              <div class="space-y-4">
                <a href="https://x.com/patrickjs__/status/1759416279537238451?s=46">
                  <div class="aspect-w-3 aspect-h-2">
                    <img
                      width="400"
                      height="250"
                      class="rounded-lg object-cover shadow-lg"
                      src="https://via.placeholder.com/400x250"
                      alt="Episode 3"
                    />
                  </div>
                  <div class="space-y-1 text-lg font-medium leading-6">
                    <h3>Episode 3: The shape of build tools to come</h3>
                    <p class="text-gray-600">February 18, 2024</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500">
                      In this episode we go over 10 years of javascript build
                      tool history from grunt.js to jsr.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Subscription CTA Section */}
      <div class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span class="block">Stay Updated on the Latest Episodes</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="rounded-md bg-gray-500 px-4 py-2 text-lg font-medium text-white hover:bg-gray-400"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

