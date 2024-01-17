import React from "react";
import { ArticleCardProps } from "..";
import Actions from "./actions";
import Author from "./author";
import Body from "./body";
import Header from "./header";

export default function MobileCard(props: ArticleCardProps) {
  return (
    <div className="lg:hidden">
      <Header {...props} />
      <Author {...props} />
      <Body {...props} /> {/* which is the Title of the article */}
      <Actions {...props} />
    </div>
  );
}
