import BlogList from "@/components/BlogList";
import Image from "next/image";
import { groq } from "next-sanity";

const query = groq`
 *[_type == "post"] {
  ...,
  author->,
  categories[]->

} | order(_createdAt desc)
`;

export default function Home() {
  return (
    <div>
      <h1>Not in Preview </h1>
      {/* <BlogList posts={posts} /> */}
    </div>
  );
}
