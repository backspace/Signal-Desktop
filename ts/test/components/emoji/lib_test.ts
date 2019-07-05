import { assert } from 'chai';

import {
  replaceColons,
} from '../../../components/emoji/lib';

describe('replaceColons', () => {
  it('replaces known downcased-emoji between colons', () => {
    const noEmoji = replaceColons('hello');
    assert.equal(noEmoji, 'hello');

    const anEmojiWithCaps = replaceColons('hello :Grinning:');
    assert.equal(anEmojiWithCaps, 'hello 😀');

    const skinToneModifierEmoji = replaceColons('hello :wave::skin-tone-5:!');
    assert.equal(skinToneModifierEmoji, 'hello 👋🏿!');
  });
});
