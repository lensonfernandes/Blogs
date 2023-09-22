import React from "react";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
     *[_type=='post' && slug.current == $slug][0]
     {
        ...,
        author->,
        categories[]->
     }
    `;
  const post: Post = await client.fetch(query, { slug });
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border">
        <div className="relative min-h-56 flex flex-col ">
          <div className="absolute top-0 w-full h-full opacity-10">
            {/* <Image
              className="object-cover object-center mx-auto"
              src={urlForImage(post.mainImage)}
              alt={post.author.name}
              fill
            /> */}
          </div>
          <section className="p-5 bg-slate-400 w-full">
            <div>
              <div>
                <h1>{post.title}</h1>
                <p>Date</p>
              </div>
              {/* <div>
                            <Image src />
                        </div> */}
              <div className="w-64">
                <h3>{post.author.name}</h3>
              </div>
            </div>

            <div>
              <h2>{post.description} </h2>

              <div></div>
            </div>
          </section>
        </div>
      </section>

      
    </article>
  );
};

export default Post;
