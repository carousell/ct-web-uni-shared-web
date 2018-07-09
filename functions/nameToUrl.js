export function nameToUrl(name) {
  const plainString = removeUnicode(name);
  return plainString.split(' ').join('-');
}
