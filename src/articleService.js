export const posts = [
  { slug: "intro-web",        title: "Introdução programação WEB" },
  { slug: "intro-javascript", title: "Introdução JavaScript" },
]

const cache = {}

export async function fetchArticle(slug) {
  if (cache[slug]) return cache[slug]
  try {
    const res = await fetch(`./articles/${slug}.md`)
    if (!res.ok) return null
    const text = await res.text()
    cache[slug] = text
    return text
  } catch {
    return null
  }
}

export async function searchArticles(query) {
  const term = query.trim().toLowerCase()
  if (!term) return []
  const results = []
  for (const post of posts) {
    const content = await fetchArticle(post.slug)
    if (!content) continue
    const lower = content.toLowerCase()
    const index = lower.indexOf(term)
    if (index === -1) continue
    const start = Math.max(0, index - 60)
    const end   = Math.min(content.length, index + term.length + 60)
    let excerpt = content.slice(start, end).replace(/[#*`]/g, "").trim()
    if (start > 0)              excerpt = "..." + excerpt
    if (end < content.length)   excerpt = excerpt + "..."
    results.push({ post, excerpt })
  }
  return results
}