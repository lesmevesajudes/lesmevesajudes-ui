const normalizeDate = value => {
  if (!value) {
    return value;
  }

  const onlyNumbers = value.replace(/[^\d]/g, '');

  if (onlyNumbers.length <= 2) {
    return onlyNumbers;
  }
  if (onlyNumbers.length <= 4) {
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2)}`;
  }
  if (onlyNumbers.length <= 8) {
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4, 12)}`;
  }
};

export default normalizeDate;
