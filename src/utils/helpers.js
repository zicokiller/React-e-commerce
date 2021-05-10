export const formatPrice = (number) => {
  return new Intl.NumberFormat("fr-EU", {
        style: "currency",
        currency: "EUR"
    }).format(number / 100)
};

export const getUniqueValues = () => {};
