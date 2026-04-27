# ledgermem-docs

Public documentation for LedgerMem, served at
[docs.proofly.dev](https://docs.proofly.dev).

Built with [Next.js 15](https://nextjs.org) and
[Fumadocs](https://fumadocs.dev). MDX content lives in `content/docs/`.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

The `postinstall` script runs `fumadocs-mdx` to generate the source
manifest. Re-run it any time you add or rename a content file.

## Layout

```
.
├── app/                       # Next.js App Router pages
│   ├── (home)/page.tsx        # Landing page
│   ├── docs/[[...slug]]       # Docs catch-all
│   └── api/search/route.ts    # Built-in search endpoint
├── content/docs/              # MDX content
│   ├── concepts/              # Conceptual docs
│   ├── sdks/                  # Per-language SDK guides
│   ├── integrations/          # Framework integrations
│   ├── connectors/            # Data connectors
│   ├── mcp/                   # MCP client guides
│   └── api-reference/         # OpenAPI reference
├── public/openapi.yaml        # OpenAPI 3.1 contract
└── source.config.ts           # Fumadocs MDX config
```

## Adding a doc

1. Create `content/docs/<section>/<slug>.mdx`.
2. Add the slug to the section's `meta.json`.
3. `npm run dev` and the page appears under `/docs/<section>/<slug>`.

## Deploy

We deploy to Cloudflare Pages on every push to `main`:

```bash
npm run build
# Cloudflare Pages reads .next/ via @cloudflare/next-on-pages
```

Set `BUCKET_URL` in the Pages project to point at your published
results bucket if you want the docs to fetch live data anywhere.

## License

- Code: MIT (see [LICENSE](./LICENSE)).
- Content: CC-BY 4.0.
