import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Link } from "#components/Link";

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
  const episodes = [
    {
      link: "https://x.com/PatrickJS__/status/1754033753259958276?s=20",
      image: "https://via.placeholder.com/400x250",
      imageWidth: 400,
      imageHeight: 250,
      imageDescription: "Episode 1",
      title: "Episode 1: React Server components for 2 hours",
      date: "February 3, 2024",
      description:
        "Join us as we learn step-by-step from Astro to RSC and why we need the pattern",
    },
    {
      link: "https://x.com/PatrickJS__/status/1756901484279877820?s=20",
      image: "https://via.placeholder.com/400x250",
      imageWidth: 400,
      imageHeight: 250,
      imageDescription: "Episode 2",
      title: "Episode 2: The future of UI and AI",
      date: "February 11, 2024",
      description: "Dive deep the future of UI with ai",
    },
    {
      link: "https://x.com/patrickjs__/status/1759416279537238451?s=46",
      image: "https://via.placeholder.com/400x250",
      imageWidth: 400,
      imageHeight: 250,
      imageDescription: "Episode 3",
      title: "Episode 3: The shape of build tools to come",
      date: "February 18, 2024",
      description:
        "In this episode we go over 10 years of javascript build tool history from grunt.js to jsr.",
    },
  ];

  return (
    <>
      {/* Episodes List with Images */}
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <ul class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {episodes.map((episode) => (
              <li key={episode.link}>
                <div class="space-y-4">
                  <Link href={episode.link}>
                    <div class="aspect-w-3 aspect-h-2">
                      <img
                        width={episode.imageWidth}
                        height={episode.imageHeight}
                        class="rounded-lg object-cover shadow-lg"
                        src={episode.image}
                        alt={episode.imageDescription}
                      />
                    </div>
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h3>{episode.title}</h3>
                      <p class="text-gray-600">{episode.date}</p>
                    </div>
                    <div class="text-lg">
                      <p class="text-gray-500">{episode.description}</p>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
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
