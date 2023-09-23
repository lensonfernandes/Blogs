import React from "react";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

import urlFor from "@/sanity/lib/urlFor";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#F4AB00] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2  px-10  gap-10 gap-y-16  pb-24">
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`} key={post._id}>
            <div className="flex flex-col  bg-[#999999]/10 p-5 rounded-lg">
              <div className="relative w-full h-80 drop-shadow-xl">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />

                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold"> {post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories?.map((category, index) => (
                      <div
                        key={index}
                        className="bg-[#E69A09] text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg fonnt-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>

              <p className="text-black-500 text-sm mt-5 bg-[#E69A09] p-2 rounded-full w-fit mr-auto text-right cursor-pointer hover:bg-[#E69A09]/80 transition-all duration-300 ease-in-out  ">
                Read Post
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
