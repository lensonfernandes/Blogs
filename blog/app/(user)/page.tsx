import BlogList from "@/components/BlogList";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import PreviewSuspense from "next-sanity/preview"

const query = groq`
 *[_type == "post"] {
  ...,
  author->,
  categories[]->

} | order(_createdAt desc)
`;

export default async function Home() {
  // if(previewData()){
  //   return <div>PreviewMode</div>
  // }

  const posts = await client.fetch(query);
  console.log("HERE" , posts);
  console.log("HERE" , posts.length);

  return (

    <div>
      {/* <h1>Not in Preview </h1> */}
      <BlogList posts={posts} />
    </div>
  );
}
