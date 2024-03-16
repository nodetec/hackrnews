/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

import ArticleCard from "@/components/article-card";
import Feed from "@/utils/actions/main-feed";

export default async function Page() {
  const feed = new Feed();
  const posts = await feed.getFeed();

  return (
    <div className="mt-8 w-full">
      {mockProps.map((props) => (
        // pass the index of the post as postNr
        <div
          key={props.postNr}
          className="hover:bg-surface2/30 dark:hover:bg-surface2/15 py-4 px-2 rounded-lg"
        >
          <ArticleCard {...props} key={props.postNr} />
        </div>
      ))}
    </div>
  );
}

const mockProps = [
  {
    postNr: 1,
    title: "Lorem ipsum dolor sit amet, qui minim la",
    date: "20/10/2035",
    author: "John Collogne",
    relay:
      "https://link.to.another-source.net/and-another-one/path/to/an-article-somewhere/on/the-web",
    views: 1000,
    upvotes: 14,
    downvotes: 2,
    comments: 36,
    sats: 36321,
    tags: ["nostr", "nextJS", "astro", "svelte"],
  },
  {
    postNr: 2,
    title:
      "Repellendus saepe placeat quibusdam vero eaque fuga dolore, explicabo distinctio",
    date: "17/09/2033",
    author: "Tes Tost Herona",
    relay:
      "https://link.to.another-source.net/and-another-one/path/to/an-article-somewhere/on/the-web",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks", "nostr", "nextJS", "astro", "svelte"],
  },
  {
    postNr: 3,
    title:
      "Adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor",
    date: "17/09/2033",
    author: "Chris@Machine",
    relay:
      "https://link.to.another-source.net/and-another-one/path/to/an-article-somewhere/on/the-web",
    views: 67000,
    upvotes: 333734,
    downvotes: 333333,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks"],
  },
  {
    postNr: 4,
    title: "Nisi anim cupidatat excepteur officia. Reprehenderit no",
    date: "17/09/2033",
    author: "Tex Uport",
    relay:
      "https://link.to.another-source.net/and-another-one/path/to/an-article-somewhere/on/the-web",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: [],
  },
  {
    postNr: 5,
    title: "REPREHENDERIT NOSTRUD NOSTRUD IPSUM!!!",
    date: "17/09/2033",
    author: "Kah MaelTohe",
    relay: "http://beaver.super-duper-ass-long-link-to-just-because-yes.trim",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks"],
  },
];
