/**
 * Breaks an array down into an array of arrays no larger than chunk size.
 * @param   {Array}   arrayToChunk Array to break into chunks.
 * @param   {Number}  chunkSize    Maximum chunk size.
 * @returns {Array}                New array full of arrays no larger than chunkSize.
 */
export default function chunkArray(arrayToChunk, chunkSize) {
  const chunks = [];

  for (let i = 0; i < arrayToChunk.length; i += chunkSize) {
    chunks.push(
      arrayToChunk.slice(i, i + chunkSize),
    );
  }

  return chunks;
}
