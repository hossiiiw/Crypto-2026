export const formatPrice = (value) =>
  Number(value).toLocaleString("en-US", {
    maximumFractionDigits: 8,
  });
