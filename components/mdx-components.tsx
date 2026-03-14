"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { useMDXComponent } from "next-contentlayer/hooks"

type MdxProps = {
  code: string
}

type MdxImageProps = {
  src: string
  alt: string
  width?: number | string
  height?: number | string
}

function MdxImage({ alt, width, height, ...props }: MdxImageProps) {
  return (
    <Image
      alt={alt}
      width={typeof width === "string" ? Number(width) : width ?? 1200}
      height={typeof height === "string" ? Number(height) : height ?? 630}
      className="rounded-md border bg-muted"
      {...props}
    />
  )
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm leading-7 text-muted-foreground">
      {children}
    </div>
  )
}

const components = {
  Image: MdxImage,
  Callout,
}

/* eslint-disable react-hooks/static-components */
export function Mdx({ code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent components={components} />
}
/* eslint-enable react-hooks/static-components */
