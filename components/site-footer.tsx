import { siteConfig } from "@/app/config/site";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="border-t">
            <div className="container mx-auto flex items-center justify-center py-10 text-sm text-muted-foreground">
                <p>
                    Built by{" "}
                    <Link
                        href={siteConfig.links.github}
                        className="font-medium underline underline-offset-4"
                        target="_blank"
                        rel="noreferrer"
                    >
                        hikaru
                    </Link>
                </p>
            </div>
        </footer>
    )
}