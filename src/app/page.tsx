import AricleCard from "@/components/aricle-card";
import React from "react";

export default function Page() {
  return (
    <div className="mt-8">
      {mockProps.map((props) => (
        <AricleCard {...props} />
      ))}
    </div>
  );
}

const mockProps = [
  {
    postNr: 1,
    title:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    date: "20/10/2035",
    author: "John Collogne",
    relay: "relay.sky.net",
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
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    date: "17/09/2033",
    author: "Tesz Tost Herona",
    relay: "beaver.relay.super-duper-ass-long-relay-name-just-because-yes.trim",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks"],
  },
  {
    postNr: 3,
    title:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    date: "17/09/2033",
    author: "Tesz Tost Herona",
    relay: "beaver.relay.super-duper-ass-long-relay-name-just-because-yes.trim",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks"],
  },
  {
    postNr: 4,
    title:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    date: "17/09/2033",
    author: "Tesz Tost Herona",
    relay: "beaver.relay.super-duper-ass-long-relay-name-just-because-yes.trim",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks"],
  },
  {
    postNr: 5,
    title:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    date: "17/09/2033",
    author: "Tesz Tost Herona",
    relay: "beaver.relay.super-duper-ass-long-relay-name-just-because-yes.trim",
    views: 67000,
    upvotes: 12734,
    downvotes: 23903,
    comments: 3182,
    sats: 379000000,
    tags: ["java", "sucks"],
  },
];
