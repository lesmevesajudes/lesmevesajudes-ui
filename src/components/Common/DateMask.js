const normalizeDate = (value,previousValue) => {
  
  if (!value) {
    return value;
  } 

  const actualYear = (new Date()).getFullYear();
  const onlyNumbers = value.replace(/[^\d]/g, '');

  if (onlyNumbers.length <= 2) {
    if(value.length === 2){
      return `${onlyNumbers.slice(0, 2)}/`;
    }
    return onlyNumbers;
  }
  if (onlyNumbers.length <= 4) {
    if(value.length === 5){
      return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2)}/`;
    }  
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2)}`;

  }
  if (onlyNumbers.length <= 8) {
    if(onlyNumbers.slice(4,5) > String(actualYear).charAt(0)){
      return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/`;
    }
      if(onlyNumbers.slice(5,6) > String(actualYear).charAt(1)){
        return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4, 5)}`;
      }
      if(onlyNumbers.slice(6,7) > String(actualYear).charAt(2)){
      }
      if(onlyNumbers.slice(7,8) > String(actualYear).charAt(3)){
      }
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4, 12)}`;
  }
};

export default normalizeDate;
