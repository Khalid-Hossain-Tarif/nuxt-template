export const displayPrice = (
  price: string | number,
  currency: string = "$"
) => {
  return `${currency} ${Number(price).toFixed(2)}`;
};

// export const formatDate = (dateStr) => {
//   const [day, month, year] = dateStr.split("-");
//   return new Date(`${year}-${month}-${day}`);
// };
