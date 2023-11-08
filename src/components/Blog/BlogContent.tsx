import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogList from "./BlogList";
import { BsGrid, BsListUl } from "react-icons/bs";

const BlogContent = () => {
  const blogPosts = [
    {
      title: "First Blog Post",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae sequi ex commodi, assumenda soluta alias velit, aperiam dignissimos unde eligendi voluptates sunt non perferendis labore nesciunt cum fugiat quos.",
      publishedTime: "2023-11-05T12:00:00",
    },
    {
      title: "Second Blog Post",
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      publishedTime: "2023-11-06T14:00:00",
    },
    {
      title: "Third Blog Post",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quae sequi ex commodi, assumenda soluta alias velit, aperiam dignissimos unde eligendi voluptates sunt non perferendis labore nesciunt cum fugiat quos.",
      publishedTime: "2023-11-06T14:00:00",
    },
  ];

  const [isCardView, setIsCardView] = useState(false);

  const toggleView = () => {
    setIsCardView((prevIsCardView) => !prevIsCardView);
  };

  return (
    <div className="max-w-3xl p-5">
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-4xl font-bold mb-3">Blog</h1>
          <button
            className="p-2 bg-white/50 dark:bg-[#242424] opacity-70 hover:opacity-100 text-xl text-zinc-700 dark:text-zinc-200 border border-gray-300 rounded-xl dark:border-white/20 shadow-inner "
            onClick={toggleView}
          >
            {isCardView ? <BsGrid></BsGrid> : <BsListUl></BsListUl>}
          </button>
        </div>
        <p className="text-zinc-700 dark:text-zinc-400 pr-20 md:pr-24">
          My personal collection of code snippets, starter guides, tutorials,
          and interesting things I found online.
        </p>
      </div>

      {isCardView ? (
        <div className="px-1.5 grid grid-cols-2 gap-5">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      ) : (
        <div className="px-1.5 border-l space-y-7">
          {blogPosts.map((post, index) => (
            <BlogList key={index} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogContent;
