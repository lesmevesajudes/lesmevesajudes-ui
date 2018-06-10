type Custodia = {
  primer: string,
  segon?: string
}

const familyID = (menorID, custodies) => [custodies[menorID].primer, custodies[menorID].segon].sort().join('');

function isCustodyFilled(menorID, custodies) {
  return typeof custodies[menorID] !== 'undefined'
      && typeof custodies[menorID].primer === 'string'
      && typeof custodies[menorID].segon === 'string';
}

export const detectaFamilies = (custodies: { [string]: Custodia }): Object =>
    Object.keys(custodies).reduce(
        (families: Object, menorID: string) => {
          if (isCustodyFilled(menorID, custodies)) {
            const familiaID = familyID(menorID, custodies);
            if (typeof families[familiaID] !== 'undefined') {
              families[familiaID].menors.push(menorID);
            } else {
              families[familiaID] =
                  {
                    sustentadors: custodies[menorID].segon === 'ningu_mes' || custodies[menorID].segon === 'no_conviu'
                        ? [custodies[menorID].primer]
                        : [custodies[menorID].primer, custodies[menorID].segon],
                    menors: [menorID],
                    monoparental: custodies[menorID].segon === 'ningu_mes'
                  };
            }
          }
          return families;
        }, {});
