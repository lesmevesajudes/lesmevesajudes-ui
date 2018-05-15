const normalizeDate = (value,previousValue) => {
  
  if (!value) {
    return value;
  }

  const onlyNumbers = value.replace(/[^\d]/g, '');

  if (onlyNumbers.length <= 2) {

      console.log(value.length +" "+ onlyNumbers.length);
      console.log(value +" "+ onlyNumbers);
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
    return `${onlyNumbers.slice(0, 2)}/${onlyNumbers.slice(2, 4)}/${onlyNumbers.slice(4, 12)}`;
  }
};

export default normalizeDate;
