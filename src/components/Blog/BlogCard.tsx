import { formatISODate } from "@/utils/formatDate";
import React from "react";

interface Blog {
  post: {
    title: string;
    description: string;
    publishedDate: string;
    hero: string;
  };
  slug: string;
}

const BlogCard: React.FC<Blog> = ({ post, slug }) => {
  return (
    <div className="w-full h-[360px] overflow-hidden bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-800 rounded-xl transition-all ease-linear duration-200 hover:scale-[1.017]">
      <div className="h-[170px] overflow-hidden bg-neutral-800">
        <img
          src={post.hero}
          alt={post.title}
          className="object-cover w-full h-full rounded-t-md"
        />
      </div>

      <div className="p-5">
        <a href={`/blog/${slug}`} className="text-lg font-semibold mb-1">{post.title}</a>
        <p className="text-zinc-700 dark:text-zinc-400 text-sm mb-3">
          {formatISODate(post.publishedDate)}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm line-clamp-3">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
