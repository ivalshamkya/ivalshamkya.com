import { formatISODate } from "@/utils/formatDate"

interface Blog {
    post: {
        title: string
        description: string,
        publishedDate: string
    },
    slug: string;
}

const BlogList: React.FC<Blog> = ({ post, slug }) => {
    return (
        <div className="w-full min-h-[150px] rounded-lg p-4 hover:bg-white dark:hover:bg-[#222222] cursor-pointer transition-all ease-in duration-200">
            <h3 className="text-zinc-700 dark:text-zinc-400 text-sm mb-2">{formatISODate(post.publishedDate)}</h3>
            <a href={`/blog/${slug}`} className="text-2xl font-semibold text-primary mb-2">{post.title}</a>
            <p className="text-zinc-700 dark:text-zinc-400 text-sm line-clamp-2">{post.description}</p>
        </div>
    )
}

export default BlogList;