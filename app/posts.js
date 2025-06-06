import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { Feed } from "feed";

export const metadata = {
  title: "devblog — A blog by Brian Noriega",
  description: "A blog by Brian Noriega",
  openGraph: {
    title: "devblog",
  },
  alternates: {
    types: {
      "application/atom+xml": "https://devblog.briannoriega.com/atom.xml",
      "application/rss+xml": "https://devblog.briannoriega.com/rss.xml",
    },
  },
};

export async function getPosts() {
  const entries = await readdir("./public/", { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const fileContents = await Promise.all(
    dirs.map((dir) => readFile("./public/" + dir + "/index.md", "utf8")),
  );
  const posts = dirs.map((slug, i) => {
    const fileContent = fileContents[i];
    const { data } = matter(fileContent);
    return { slug, ...data };
  });
  posts.sort((a, b) => {
    return Date.parse(a.date) < Date.parse(b.date) ? 1 : -1;
  });
  return posts;
}

export async function generateFeed() {
  const posts = await getPosts();
  const site_url = "https://devblog.briannoriega.com/";

  const feedOptions = {
    author: {
      name: "Brian Noriega",
      email: "hello@briannoriega.com",
      link: site_url,
    },
    description: metadata.description,
    favicon: `${site_url}/icon.ico`,
    feedLinks: { atom: `${site_url}atom.xml`, rss: `${site_url}rss.xml` },
    generator: "Feed for Node.js",
    id: site_url,
    image: "https://github.com/noriega3.png",
    link: site_url,
    title: metadata.title,
  };

  const feed = new Feed(feedOptions);

  for (const post of posts) {
    feed.addItem({
      date: new Date(post.date),
      description: post.spoiler,
      id: `${site_url}${post.slug}/`,
      link: `${site_url}${post.slug}/`,
      title: post.title,
    });
  }

  return feed;
}
