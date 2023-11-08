import { formatISODate } from "@/utils/formatDate"

interface Blog {
    post: {
        title: string
        content: string,
        publishedTime: string
    }
}

const BlogList: React.FC<Blog> = ({ post }) => {
    return (
        <div className="w-full min-h-[150px] rounded-lg p-4 hover:bg-white dark:hover:bg-[#222222] cursor-pointer transition-all ease-in duration-200">
            <h3 className="text-zinc-700 dark:text-zinc-400 text-sm mb-2">{formatISODate(post.publishedTime)}</h3>
            <h1 className="text-2xl font-semibold text-primary mb-2">{post.title}</h1>
            <p className="text-zinc-700 dark:text-zinc-400 text-sm line-clamp-2">{post.content}</p>
        </div>
    )
}

export default BlogList;