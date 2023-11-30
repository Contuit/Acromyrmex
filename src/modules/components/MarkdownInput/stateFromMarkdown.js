import { convertToRaw, convertFromRaw } from 'draft-js';
import { stateFromMarkdown as rootStateFromMarkdown } from 'draft-js-import-markdown';

export default function stateFromMarkdown(
  markdown,
  mentions,
  mentionStateFromMarkdownFunctions = [],
) {
  const content = rootStateFromMarkdown(markdown);
  const raw = convertToRaw(content);

  let entityCount = Object.keys(raw.entityMap).length;

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

  return convertFromRaw(raw);
}
