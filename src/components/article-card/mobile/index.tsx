import React from "react";
import { ArticleCardProps } from "..";
import Actions from "./actions";
import Body from "./body";
import Header from "./header";

export default function MobileCard(props: ArticleCardProps) {
  return (
    <div className="lg:hidden">
      <Header {...props} />
      <Body {...props} /> {/* which is the Title of the article */}
      <Actions {...props} />
    </div>
  );
}
