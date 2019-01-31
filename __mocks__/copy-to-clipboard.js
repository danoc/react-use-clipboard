/**
 * Assume that the `copy-to-clipboard` package will work as expected. This is needed because Jest
 * can't simulate storing a value in a clipboard.
 *
 * https://www.npmjs.com/package/copy-to-clipboard
 */
module.exports = text => {
  return !!text;
};
