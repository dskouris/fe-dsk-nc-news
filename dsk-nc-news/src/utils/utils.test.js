import * as utils from './utils';

describe('capitalise', () => {
  it('returns an empty string when passed empty string', () => {
    expect(utils.capitalise('')).toBe('');
  });
  it('returns a string with the first letter capitalised', () => {
    expect(utils.capitalise('teststring')).toBe('Teststring');
  });
});

// 2018-05-30T15:59:13.341Z

describe('formatTimestamp', () => {
  it('returns an empty string when passed an empty string', () => {
    expect(utils.formatTimestamp('')).toBe('');
  });
  it('returns a correctly formatted string containing date and time', () => {
    expect(utils.formatTimestamp('2018-05-30T15:59:13.341Z')).toBe(
      '15:59, 30-05-2018'
    );
  });
});
