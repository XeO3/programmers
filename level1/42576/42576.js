function solution(participant, completion) {
  const completionHash = new Object();
  completion.forEach(
    (c) => (completionHash[c] = completionHash[c] ? completionHash[c] + 1 : 1)
  );

  for (const p of participant) {
    const count = completionHash[p];
    if (!count) {
      return p;
    }
    completionHash[p] -= 1;
  }
}
