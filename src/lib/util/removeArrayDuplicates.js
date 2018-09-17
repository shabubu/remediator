/**
 * Returns array with no duplicate elements.
 * @param   {Array} nonUniqueArray Array to filter out duplicates.
 * @returns {Array}                Returns array with unique elements.
 */
export default function removeArrayDuplicates(nonUniqueArray) {
  const existsMap = {};

  return nonUniqueArray.filter(
    (element) => {
      const notExists = !Object
        .prototype
        .hasOwnProperty
        .call(existsMap, element);

      if (notExists) {
        existsMap[element] = true;
      }

      return notExists;
    },
  );
}
