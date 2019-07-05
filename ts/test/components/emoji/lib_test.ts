import { assert } from 'chai';

import {
  replaceColons,
} from '../../../components/emoji/lib';

describe('replaceColons', () => {
  it('replaces known emoji between colons', () => {
    const noEmoji = replaceColons('hello');
    assert.equal(noEmoji, 'hello');

    const anEmoji = replaceColons('hello :grinning:');
    assert.equal(anEmoji, 'hello 😀');

    const skinToneModifierEmoji = replaceColons('hello :wave::skin-tone-5:!');
    assert.equal(skinToneModifierEmoji, 'hello 👋🏿!');
  });
});
