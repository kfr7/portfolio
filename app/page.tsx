import MatrixRain from "@/components/MatrixRain";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import SoccerGame from "@/components/SoccerGame";
import Contact from "@/components/Contact";
import NewsWidgetClient, { NewsItem } from "@/components/NewsWidgetClient";
import Parser from "rss-parser";

export const revalidate = 604800; // revalidate news weekly

const feeds = [
  "https://techcrunch.com/category/artificial-intelligence/feed/",
  "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
  "https://simonwillison.net/atom/everything/",
];

const AI_KEYWORDS = [
  "ai", "llm", "gpt", "claude", "gemini", "perplexity", "openai",
  "anthropic", "model", "agent", "chatbot", "copilot", "coding",
  "developer", "neural", "machine learning", "deepseek", "mistral",
  "multimodal", "inference", "transformer", "fine-tun", "rag",
];

async function fetchNews(): Promise<NewsItem[]> {
  const parser = new Parser();

  try {
    const results = await Promise.allSettled(
      feeds.map((url) => parser.parseURL(url))
    );

    const seen = new Set<string>();
    const merged: NewsItem[] = [];

    for (const result of results) {
      if (result.status !== "fulfilled") continue;
      for (const item of result.value.items) {
        if (!item.title || !item.link || seen.has(item.link)) continue;
        seen.add(item.link);
        merged.push({
          id: item.link,
          title: item.title,
          url: item.link,
          text: item.contentSnippet ?? item.summary ?? null,
          createdAt: item.pubDate ?? item.isoDate ?? new Date().toISOString(),
        });
      }
    }

    const lower = (s: string) => s.toLowerCase();
    const relevant = merged.filter((item) =>
      AI_KEYWORDS.some((kw) => lower(item.title).includes(kw))
    );

    // Fall back to unfiltered if not enough results
    const pool = relevant.length >= 5 ? relevant : merged;

    return pool
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);
  } catch {
    return [];
  }
}

export default async function Home() {
  const news = await fetchNews();

  return (
    <main className="relative min-h-screen">
      <MatrixRain />
      <Nav />

      {/* Hero section — two columns on large screens */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center px-6 z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr,400px] gap-16 items-center py-24">
          <Hero />
          <NewsWidgetClient news={news} />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#333] animate-bounce">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <span className="text-lg">↓</span>
        </div>
      </section>

      <About />
      <Skills />
      <Experience />
      <SoccerGame />
      <Contact />
    </main>
  );
}
