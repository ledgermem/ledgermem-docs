import { notFound } from "next/navigation";
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page";
import type { Metadata } from "next";
import { getMDXComponents } from "@/mdx-components";
import { source } from "@/lib/source";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

// Docs are 100% MDX-driven via fumadocs. We enumerate every page in
// generateStaticParams below, so any slug not in that list is genuinely
// missing — render a 404 instead of bouncing through SSR (which gives an
// attacker a free way to probe for unpublished URLs and adds latency).
export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) return {};
  return {
    title: page.data.title,
    description: page.data.description,
  };
}
