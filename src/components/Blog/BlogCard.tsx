import { formatISODate } from "@/utils/formatDate";
import React from "react";

interface Blog {
  post: {
    title: string;
    content: string;
    publishedTime: string;
  };
}

const BlogCard: React.FC<Blog> = ({ post }) => {
  return (
    <div className="w-full h-[360px] overflow-hidden bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-800 rounded-xl transition-all ease-linear duration-200 hover:scale-[1.017]">
      <div className="h-[170px] overflow-hidden bg-neutral-800">
        <img
          src="https://res.cloudinary.com/dlalunvp7/image/upload/ar_1:1,c_fill,g_auto,w_1000/v1697806090/IMG_9165_dug8uz.jpg"
          alt={post.title}
          className="object-cover w-full h-full rounded-t-md"
        />
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
        <p className="text-zinc-700 dark:text-zinc-400 text-sm mb-3">
          {formatISODate(post.publishedTime)}
        </p>
        <p className="text-zinc-700 dark:text-zinc-300 text-sm line-clamp-3">
          {post.content}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
