import Pill from "@/ui/pill";

export default function displayTags(tags: string[], limit = 3) {
  let tagsRow: JSX.Element[] = [];

  for (let i = 0; i < tags.length; i++) {
    if (i === limit) {
      tagsRow.push(
        <Pill variant="ghost" key={tags[i] + i}>
          + {tags.length - limit}
        </Pill>,
      );
      break;
    }
    tagsRow.push(
      <Pill variant="primary" key={tags[i] + i}>
        #{tags[i]}
      </Pill>,
    );
  }

  return tagsRow;
}
