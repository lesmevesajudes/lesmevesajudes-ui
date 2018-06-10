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

  const CPBarcelona = '08';
  const CPGirona = '17';
  const CPLleida = '25';
  const CPTarragona = '43';

  return (
    dosPrimersDigits === CPBarcelona ||
    dosPrimersDigits === CPGirona ||
    dosPrimersDigits === CPLleida ||
    dosPrimersDigits === CPTarragona
  );
}

export function esBarcelonaCiutat(codi_postal: number) {
  const codis_postals_barcelona_ciutat = [
    8001,
    8002,
    8003,
    8004,
    8005,
    8006,
    8007,
    8008,
    8009,
    8010,
    8011,
    8012,
    8013,
    8014,
    8015,
    8016,
    8017,
    8018,
    8019,
    8020,
    8021,
    8022,
    8023,
    8024,
    8025,
    8026,
    8027,
    8028,
    8029,
    8030,
    8031,
    8032,
    8033,
    8034,
    8035,
    8036,
    8037,
    8038,
    8039,
    8040,
    8041,
    8042,
    8075,
    8196,
    8830,
    8903,
    8904,
    8930,
    8960
  ];
  return codis_postals_barcelona_ciutat.indexOf(codi_postal) !== -1;
}
