import { getPayload } from "payload";
import config from "@payload-config";

const genres = [
  {
    name: "All",
    slug: "all",
  },
  {
    name: "Jazz",
    slug: "jazz",
  },
  {
    name: "Pop",
    slug: "pop",
  },
  {
    name: "Rock",
    slug: "rock",
  },
  {
    name: "R&B",
    slug: "rnb",
  },
  {
    name: "Classical",
    slug: "classic",
  },
];

const seed = async () => {
  const payload = await getPayload({ config });

  for (const genre of genres) {
    const data = await payload.create({
      collection: "Genre",
      data: {
        name: genre.name,
        slug: genre.slug,
      },
    });
  }
};

await seed();
process.exit(0);
