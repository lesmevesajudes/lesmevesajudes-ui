//@flow

export function esBarcelona(codiPostal: string) {
  const codiPostalNum = parseInt(codiPostal, 10);
  return (
    (codiPostalNum >= 8001 && codiPostalNum <= 8042) ||
    codiPostalNum === 8196 ||
    codiPostalNum === 8830 ||
    codiPostalNum === 8903 ||
    codiPostalNum === 8904 ||
    codiPostalNum === 8930 ||
    codiPostalNum === 8960
  );
}

export function esCatalunya(codipostal: string) {
  const dosPrimersDigits = codipostal.substring(0, 1);

  const CPBarcelona = "08";
  const CPGirona = "17";
  const CPLleida = "25";
  const CPTarragona = "43";

  return (
    dosPrimersDigits === CPBarcelona ||
    dosPrimersDigits === CPGirona ||
    dosPrimersDigits === CPLleida ||
    dosPrimersDigits === CPTarragona
  );
}
