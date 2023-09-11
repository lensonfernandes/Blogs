import React from "react";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#F4AB00] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2  px-10  gap-10 gap-y-16  pb-24">
        {posts.map((post) => (
          <ClientSideRoute route={`/post/${post.slug.current}`}>
            <div key={post._id}>
              <div className="relative w-full h-80 drop-shadow-xl">
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlForImage(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />

                <div className="absolute bottom-0 w-full bg-opacity-20 ">
                  <div>
                    <p className="font-bold"> {post.title}</p>
                    <p> Date</p>
                  </div>

                  <div className="flex flex-col ">
                    {post.categories.map((category) => (
                      <div>
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="">{post.title}</p>
                <p>{post.description}</p>
              </div>

              <p>Read Post </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
