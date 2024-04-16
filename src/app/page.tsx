import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/e101bbc1-cd3b-46c7-85bb-9cf1141d049e-f2i6wk.png",
  "https://utfs.io/f/9c18d322-8887-4395-9b4a-6db94855245a-f2i6xe.png",
  "https://utfs.io/f/dc5b6e07-e935-4bcf-bca6-7860c9d2b158-f2hldk.png",
  "https://utfs.io/f/3c00daec-b41f-4b0a-a359-9873d23578dc-f2hmuz.png",
  "https://utfs.io/f/1172536a-04e3-4aa9-9a76-6f8242d0f43b-f2i6ux.png"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      {[...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))}
    </div>
    </main>
  );
}
