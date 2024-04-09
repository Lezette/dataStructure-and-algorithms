function timeRequiredToBuy(tickets: number[], k: number): number {

  const _tickets = tickets
  let _k = k
  let time = 0;

  while (_tickets[_k] > 0) {
    _tickets.forEach((value, index) => {

      if (value > 0) {
        time = time + 1
        _tickets[index] = _tickets[index] - 1
      }
    });

  }
  return time
};

console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));
