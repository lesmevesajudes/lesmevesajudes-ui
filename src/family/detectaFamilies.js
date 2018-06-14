type Custodia = {
  primer: string,
  segon?: string
}

const familyID = (menorID, sustentadors) => sustentadors.join('');

const isCustodyFilled = (menorID, custodies) => typeof custodies[menorID] !== 'undefined'
    && typeof custodies[menorID].primer === 'string'
    && typeof custodies[menorID].segon === 'string';

const sustentadorsConvivents = (menorID, custodies) => [custodies[menorID].primer, custodies[menorID].segon].filter((sustentadorID) => sustentadorID !== 'ningu_mes' && sustentadorID !== 'no_conviu').sort();
export const detectaFamilies = (custodies: { [string]: Custodia }): Object =>
    Object.keys(custodies).reduce(
        (families: Object, menorID: string) => {
          const sustentadors = sustentadorsConvivents(menorID, custodies);
          if (isCustodyFilled(menorID, custodies) && sustentadors.length > 0) {
            const familiaID = familyID(menorID, sustentadors);
            if (typeof families[familiaID] !== 'undefined') {
              families[familiaID].menors.push(menorID);
            } else {
              families[familiaID] =
                  {
                    sustentadors: sustentadors,
                    menors: [menorID],
                    monoparental: sustentadors.length === 1
                  };
            }
          }
          return families;
        }, {});
