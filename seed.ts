import { getPayload } from "payload";
import config from "@payload-config";


const genres = [
  { name: "All", slug: "all" },
  { name: "Jazz", slug: "jazz" },
  { name: "Pop", slug: "pop" },
  { name: "Rock", slug: "rock" },
  { name: "R&B", slug: "rnb" },
  { name: "Classical", slug: "classic" },
];

(async () => {
  try {
    const payload = await getPayload({ config });

    for (const genre of genres) {
      try {
        await payload.create({
          collection: "Genre", // 👈 Make sure this matches the exact collection slug
          data: {
            name: genre.name,
            slug: genre.slug,
          },
        });
        console.log(`✅ Seeded genre: ${genre.name}`);
      } catch (err) {
        console.error(`❌ Failed to seed genre "${genre.name}":`, err);
      }
    }

    console.log("✅ All genres attempted.");
  } catch (err) {
    console.error("❌ Failed to initialize Payload or seed genres:", err);
  } finally {
    process.exit(0);
  }
})();
