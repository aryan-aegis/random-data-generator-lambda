const randomDigit = (index) =>
  index === 0
    ? Math.floor(Math.random() * 5) + 5
    : Math.floor(Math.random() * 10);

export default randomDigit;
