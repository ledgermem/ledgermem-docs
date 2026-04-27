import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-4xl flex-1 flex-col gap-8 px-6 py-16">
      <section>
        <h1 className="text-5xl font-bold tracking-tight">
          LedgerMem documentation
        </h1>
        <p className="mt-4 text-lg text-fd-muted-foreground">
          Long-term memory for LLM agents — managed, multi-tenant, fast. Start
          with the quickstart, browse SDKs in eight languages, or wire up an
          integration with your favorite framework.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/docs/quickstart"
            className="rounded-md bg-fd-primary px-5 py-2.5 text-sm font-semibold text-fd-primary-foreground"
          >
            Get started
          </Link>
          <Link
            href="/docs"
            className="rounded-md border border-fd-border px-5 py-2.5 text-sm font-semibold"
          >
            Browse docs
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          href="/docs/concepts/memory"
          className="rounded-lg border border-fd-border p-5 transition hover:border-fd-foreground/40"
        >
          <h2 className="font-semibold">Concepts</h2>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            How memory, workspaces, embeddings, and hub-spoke retrieval fit
            together.
          </p>
        </Link>
        <Link
          href="/docs/sdks/typescript"
          className="rounded-lg border border-fd-border p-5 transition hover:border-fd-foreground/40"
        >
          <h2 className="font-semibold">SDKs</h2>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            TypeScript, Python, Go, Rust, Java, C#, Ruby, PHP — first-class
            clients for every stack.
          </p>
        </Link>
        <Link
          href="/docs/integrations/langchain"
          className="rounded-lg border border-fd-border p-5 transition hover:border-fd-foreground/40"
        >
          <h2 className="font-semibold">Integrations</h2>
          <p className="mt-1 text-sm text-fd-muted-foreground">
            LangChain, LangGraph, LlamaIndex, CrewAI, AutoGen, Vercel AI SDK,
            Mastra, Pydantic AI.
          </p>
        </Link>
      </section>
    </main>
  );
}
