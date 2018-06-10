//@flow

function edat(dob: string) {
  if (typeof dob === 'undefined') return undefined;
  const dobAsDate = new Date(dob);
  const diff_ms = Date.now() - dobAsDate.getTime();
  const age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}
export default edat;
