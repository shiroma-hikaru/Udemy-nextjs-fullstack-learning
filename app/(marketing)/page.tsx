import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import  Link  from "next/link";
import { siteConfig } from "../config/site";

export default function IndexPage() {
    return (
        <>
            <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
                <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem] mx-auto">
                    <Link href={siteConfig.links.x} target="_blank" rel="noreferrer" className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm">
                        Xをフォローする
                    </Link>
                    <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Post Writer</h1>
                    <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">このアプリケーションはフルスタックのアプリ開発勉強のために作成されます。</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link 
                            className={cn(buttonVariants({size: "lg"}))}
                            href={"./login"}
                        >はじめる</Link>
                        <Link
                            className={cn(buttonVariants({size: "lg", variant: "secondary"}))}
                            href={"/blog"}
                        >ブログを見る</Link>
                        <Link 
                            className={cn(buttonVariants({size: "lg", variant: "outline"}))} 
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >github</Link>
                    </div>
                </div>
            </section>

            <section id="features" className="container mx-auto px-5 py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6">
                <div className="text-center space-y-6 max-w-[58rem] mx-auto">
                    <h2 className="font-extrabold text-3xl md:text-6xl">サービスの特徴</h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">このプロジェクトはモダンな技術スタックを使って作られたアプリケーションです。<br/>マークダウン形式でブログ投稿ができます。</p>
                </div>

                <div className="grid sm:grid-col-2 md:grid-cols-3 gap-4 mx-auto max-w-[64rem]">
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col gap-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col gap-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                            </div>
                        </div>
                    </div>
                     <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col gap-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                            </div>
                        </div>
                    </div>
                     <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col gap-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                            </div>
                        </div>
                    </div>
                     <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col gap-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-background border p-2 rounded-lg">
                        <div className="flex flex-col gap-6 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="#000000" d="M386.399 35.508C217.06-64.061 1.885 57.55.012 253.882c-1.828 191.716 201.063 315.545 370.02 231.163L185.56 213.636v167.997c0 18.614-35.619 18.614-35.619 0V156.421c0-14.776 27.448-15.989 35.226-3.145L395.43 470.572c157.95-101.737 155.817-338.136-9.031-435.064zm-23.756 317.939L326.91 298.87V149.458c0-13.932 35.732-13.932 35.732 0v203.989z"/></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js</h3>
                                <p className="text-sm text-muted-foreground">AppRouter/Layouts/APIRoutesの技術を使用</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto text-center">
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">Post Writerはログインするとブログ投稿ができるようになります。</p>
                </div>

                <div className="mx-auto flex max-w-[64rem] flex-col items-start justify-between gap-4 rounded-2xl border bg-background px-6 py-6 text-left md:flex-row md:items-center">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-muted-foreground">Learning Blog</p>
                        <h3 className="text-2xl font-extrabold">学習ログや記事をまとめて読めます</h3>
                        <p className="text-muted-foreground">Contentlayer と MDX で書いた記事一覧から、そのまま詳細ページに進めます。</p>
                    </div>
                    <Link
                        className={cn(buttonVariants({ size: "lg" }))}
                        href="/blog"
                    >
                        記事一覧へ
                    </Link>
                </div>
            </section>

            <section id="contact" className="container mx-auto py-8 md:py-12 lg:py-24">
                <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
                    <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
                    <p className="text-muted-foreground sm:text-lg sm:leading-7">
                        もしもwebサービスが気に入った場合は下記xからDMでご連絡ください<br/>
                        お仕事のご連絡をお待ちしております。
                    </p>
                    <Link 
                        href={siteConfig.links.x}
                        className="underline underline-offset-4"  
                        target="brank"
                        rel="noreferrer"
                    >お仕事はxまで</Link>
                </div>
            </section>
        </>
    );
}
