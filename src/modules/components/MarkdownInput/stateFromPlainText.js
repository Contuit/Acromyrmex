// import { Map } from 'immutable';
import { convertToRaw, convertFromRaw, ContentState } from 'draft-js';

export default function stateFromMarkdown(
  markdown,
  mentions,
  mentionStateFromMarkdownFunctions = [],
) {
  console.log({ markdown });
  const content = ContentState.createFromText(markdown);
  const raw = convertToRaw(content);

  let entityCount = Object.keys(raw.entityMap).length;

  console.log({ raw });

  raw.blocks.forEach((block) => {
    let tempText = block.text;
    mentionStateFromMarkdownFunctions.forEach((func, index) => {
      const { entityCount: newEntityCount, tempText: newTempText } = func(
        raw,
        entityCount,
        block,
        mentions[index] || [],
        tempText,
      );
      entityCount = newEntityCount;
      tempText = newTempText;
    });
  });

  // console.log(raw.entityMap);

  return convertFromRaw(raw);
}