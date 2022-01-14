export const PriceConversion = (value) => {
  const fullDolars = Math.floor(value / 100);
  const cents = value % 100;

  const dollars = fullDolars.toString();
  const centsString = cents.toString().padStart(2, "0");
  return `$${dollars} ${centsString}c`;
};
