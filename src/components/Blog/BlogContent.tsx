import React from "react";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogList from "./BlogList";
import { BsGrid, BsListUl } from "react-icons/bs";

interface Posts {
  posts: any;
}

const BlogContent: React.FC<Posts> = ({ posts }) => {
  const [isCardView, setIsCardView] = useState<string>("");

  useEffect(() => {
    setIsCardView((prev) => localStorage.getItem("blogView") ?? "list");
    localStorage.setItem("blogView", isCardView);
  }, [isCardView]);

  const handleClick = () => {
    setIsCardView(isCardView === "list" ? "card" : "list");
  };

  return (
    <div className="max-w-3xl p-5">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-4xl font-bold mb-3">Blog</h1>
          <button
            className="p-2 bg-white/50 dark:bg-[#242424] opacity-70 hover:opacity-100 text-xl text-zinc-700 dark:text-zinc-200 border border-gray-300 rounded-xl dark:border-white/20 shadow-inner"
            onClick={handleClick}
          >
            {isCardView === "card" ? <BsGrid /> : <BsListUl />}
          </button>
        </div>
        <p className="text-zinc-700 dark:text-zinc-400 pr-20 md:pr-24">
          My personal collection of code snippets, starter guides, tutorials,
          and interesting things I found online.
        </p>
      </div>

      {isCardView === 'card' ? (
        <div className="px-0.5 md:px-1.5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post: any, index: number) => (
            <BlogCard key={index} post={post.data} slug={post.slug} />
          ))}
        </div>
      ) : (
        <div className="px-0.5 md:px-1.5 border-l space-y-7">
          {posts.map((post: any, index: number) => (
            <BlogList key={index} post={post.data} slug={post.slug} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogContent;
