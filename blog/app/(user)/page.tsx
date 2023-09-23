import BlogList from "@/components/BlogList";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PreviewSuspense from "next-sanity/preview";

const query = groq`
 *[_type == "post"] {
  ...,
  author->,
  categories[]->

} | order(_createdAt desc)
`;

export const revalidate = 30;

export default async function Home() {
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
}
