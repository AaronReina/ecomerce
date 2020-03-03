export default chartBooks =>
  chartBooks
    ? parseFloat(
        Math.round(chartBooks.reduce((a, b) => a + b.price, 0) * 100) / 100
      ).toFixed(2)
    : 0;
