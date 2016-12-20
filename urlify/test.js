describe('urlify', function() {
  it('replaces spaces with "%20"', function() {
    expect(urlify('Mr John Smith    ')).toEqual('Mr%20John%20Smith');
  });
});
