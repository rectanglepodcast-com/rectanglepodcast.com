import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import { Link } from "#components/Link";

import EpisodePlaceholder from "#assets/images/EpisodePlaceholder";

export const head: DocumentHead = {
  title: "Rectangle Podcast",
  meta: [
    {
      name: "description",
      content: "Rectangle Podcast",
    },
  ],
};

export const useEpisodes = routeLoader$(() => {
  return [
    {
      link: "https://x.com/PatrickJS__/status/1754033753259958276?s=20",
      image: {
        src: "https://via.placeholder.com/400x250",
        alt: "Episode 1",
      },
      title: "Episode 1: React Server components for 2 hours",
      date: "February 3, 2024",
      description:
        "Join us as we learn step-by-step from Astro to RSC and why we need the pattern",
    },
    {
      link: "https://x.com/PatrickJS__/status/1756901484279877820?s=20",
      image: {
        src: "https://via.placeholder.com/400x250",
        alt: "Episode 2",
      },
      title: "Episode 2: The future of UI and AI",
      date: "February 11, 2024",
      description: "Dive deep the future of UI with ai",
    },
    {
      link: "https://x.com/patrickjs__/status/1759416279537238451?s=46",
      image: {
        src: "https://via.placeholder.com/400x250",
        alt: "Episode 3",
      },
      title: "Episode 3: The shape of build tools to come",
      date: "February 18, 2024",
      description:
        "In this episode we go over 10 years of javascript build tool history from grunt.js to jsr.",
    },
  ];
});

export default component$(() => {
  const episodes = useEpisodes();

  return (
    <>
      {/* Episodes List with Images */}
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="space-y-12">
          <ul class="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {episodes.value.map((episode) => (
              <li key={episode.link}>
                <div class="space-y-4">
                  <Link href={episode.link}>
                    <div class="aspect-w-3 aspect-h-2">
                      <EpisodePlaceholder
                        src={episode.image.src}
                        alt={episode.image.alt}
                      />
                    </div>
                    <div class="mt-3 space-y-1 text-lg font-medium leading-6">
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
