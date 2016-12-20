describe('palindromePermutation', function() {
  it('returns true if a permutation of a string can be a palindrome', function() {
    expect(palindromePermutation('aabb')).toEqual(true);
    expect(palindromePermutation('aabbc')).toEqual(true);
    expect(palindromePermutation('civic')).toEqual(true);
    expect(palindromePermutation('ivicc')).toEqual(true);
  });

  it('returns false if there is no permutation of a string that can be a palindrome', function() {
    expect(palindromePermutation('abc')).toEqual(false);
    expect(palindromePermutation('civil')).toEqual(false);
    expect(palindromePermutation('livci')).toEqual(false);
  });
});
