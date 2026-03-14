import { allPosts } from "@/.contentlayer/generated"
import { notFound } from "next/navigation"
import { format } from "date-fns";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import  Link  from "next/link";
import { cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";


async function getPostFromSlug(slug: string){
    const post = allPosts.find((post) => post.slugAsParams == slug)

    return post
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slugAsParams,
    }))
}

export default async function PostPage({ params }: {params: {slug: string} }) {
    const slug = params.slug
    const post = await getPostFromSlug(slug);

    if (!post){
        notFound();
    }

    return (
        <article className="container max-w-3xl py-6 lg:py-10">
            <div>
                {post.date && (<time>Published on {format(new Date(post.date), "yyyy/MM/dd")}</time>)}
                <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight"> {post.title} </h1>
            </div>
            {post.image && <Image src={post.image} alt={post.title} width={720} height={405} className="my-8 border rounded-md bg-muted"/>}
            <div className="max-w-none text-base leading-7 [&>*:first-child]:mt-0 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:pl-6 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_h2]:mt-10 [&_h2]:scroll-m-20 [&_h2]:text-3xl [&_h2]:font-bold [&_h3]:mt-8 [&_h3]:scroll-m-20 [&_h3]:text-2xl [&_h3]:font-semibold [&_h4]:mt-6 [&_h4]:scroll-m-20 [&_h4]:text-xl [&_h4]:font-semibold [&_img]:my-8 [&_img]:rounded-md [&_img]:border [&_img]:bg-muted [&_li]:mt-2 [&_ol]:my-6 [&_ol]:ml-6 [&_ol]:list-decimal [&_p]:mt-6 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:px-4 [&_pre]:py-4 [&_table]:my-6 [&_table]:w-full [&_td]:border [&_td]:px-4 [&_td]:py-2 [&_th]:border [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_ul]:my-6 [&_ul]:ml-6 [&_ul]:list-disc">
                <Mdx code={post.body.code} />
            </div>
            <hr className="mt-12" />
            <div className="py-6 text-center lg:py-10">
                <Link className={cn(buttonVariants({ variant: "ghost"}))} href={"/blog"}>すべての記事を見る</Link>
            </div>
        </article>
    )
}
