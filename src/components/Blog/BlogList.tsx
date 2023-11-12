import { STACKS } from "@/common/constant/stack";
import { formatISODate } from "@/utils/formatDate"

interface Blog {
    post: {
        title: string
        description: string,
        publishedDate: string,
        tools: []
    },
    slug: string;
}

const BlogList: React.FC<Blog> = ({ post, slug }) => {
    return (
        <div className="w-full min-h-[150px] rounded-lg p-4 hover:bg-white dark:hover:bg-[#222222] cursor-pointer transition-all ease-in duration-200">
            <h3 className="text-zinc-700 dark:text-zinc-400 text-sm mb-2">{formatISODate(post.publishedDate)}</h3>
            <a href={`/blog/${slug}`} className="text-2xl font-semibold text-primary mb-2">{post.title}</a>
            <p className="text-zinc-700 dark:text-zinc-400 text-sm line-clamp-2 mb-2">{post.description}</p>
            <div className="flex flex-wrap items-center gap-2 my-1">
                {
                    post.tools.map((tool: string) => (
                        <div className="w-fit py-1.5 px-1.5 flex justify-center items-center space-x-2 backdrop-blur-sm drop-shadow-sm bg-white/10 dark:bg-[#212121] border border-slate-50 dark:border-white/5 rounded-full shadow dark:shadow-white/5 transition-all linear duration-300">
                            <div className="w-4">{STACKS[tool]}</div>
                            <h1 className="whitespace-nowrap text-primary text-xs">{tool}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList;