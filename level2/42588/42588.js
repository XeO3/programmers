function solution(heights) {
  var answer = heights.reduce(
    (acc, item, index) => {
      const recived = acc.leftList.find((lItem) => lItem.height > item);
      acc.reciveds.push(recived ? recived.position : 0);
      acc.leftList = [{ position: index + 1, height: item }, ...acc.leftList];
      return acc;
    },
    { leftList: [], reciveds: [] }
  );
  return answer.reciveds;
}
