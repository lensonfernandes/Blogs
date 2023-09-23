import Image from "next/image";
import Link from "next/link";
import urlFor from "@/sanity/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-[300px]">
          <Image
            src={urlFor(value).url()}
            layout="fill"
            objectFit="cover"
            alt={value.alt}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc pl-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal pl-5">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold mt-5 mb-5">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-bold mt-5 mb-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-bold mt-5 mb-5">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-md font-bold mt-5 mb-5">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="text-gray-600 italic my-5">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer" : undefined;
      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};

// list:{
//     bullet
// },

// block: {
//     h1:()
// },

// return (
//     <Link href={value.href} rel={rel}>

//     {children}
//     </Link>
// )
