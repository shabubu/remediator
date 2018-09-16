import path from 'path';
import {
  NUMERIC_YEAR,
  NUMERIC_MONTH_LEADING_ZERO,
  STRING_MONTH,
  NUMERIC_DAY_LEADING_ZERO,
  STRING_DAY,
  NUMERIC_HOUR_LEADING_ZERO,
  NUMERIC_MINUTE_LEADING_ZERO,
  EXTENSION,
} from './transformers';

const { sep } = path;

/**
 * Markup separator for format string to add transformers between.
 * @type {string}
 */
export const FORMAT_SEPARATOR = ':';

/**
 * Default value for FORMAT_KEY if not provided as an option.
 * ex: ":YYYY:\:MM0:. :Month:\:DD0: :Day:\:YYYY:.:MM0:.:DD0: :HH0:.:MN0:.:Ext:"
 * @type {string}
 */
export const DEFAULT_FORMAT = `${FORMAT_SEPARATOR}${NUMERIC_YEAR}${FORMAT_SEPARATOR}${sep}${FORMAT_SEPARATOR}${NUMERIC_MONTH_LEADING_ZERO}${FORMAT_SEPARATOR}. ${FORMAT_SEPARATOR}${STRING_MONTH}${FORMAT_SEPARATOR}${sep}${FORMAT_SEPARATOR}${NUMERIC_DAY_LEADING_ZERO}${FORMAT_SEPARATOR} ${FORMAT_SEPARATOR}${STRING_DAY}${FORMAT_SEPARATOR}${sep}${FORMAT_SEPARATOR}${NUMERIC_YEAR}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${NUMERIC_MONTH_LEADING_ZERO}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${NUMERIC_DAY_LEADING_ZERO}${FORMAT_SEPARATOR} ${FORMAT_SEPARATOR}${NUMERIC_HOUR_LEADING_ZERO}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${NUMERIC_MINUTE_LEADING_ZERO}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${EXTENSION}${FORMAT_SEPARATOR}`;

/**
 * Default value for RECURSIVE_KEY if not provided as an option.
 * @type {boolean}
 */
export const DEFAULT_RECURSIVE = false;

/**
 * Config object key for filename format template.
 * @type {string}
 */
export const FORMAT_KEY = 'format';

/**
 * Config object key for output directory.
 * @type {string}
 */
export const OUTPUT_DIRECTORY_KEY = 'output';

/**
 * Config object key for recursively checking directories from SOURCE_DIRECTORIES_KEY.
 * @type {string}
 */
export const RECURSIVE_KEY = 'recursive';

/**
 * Config object key for source directories.
 * @type {string}
 */
export const SOURCE_DIRECTORIES_KEY = 'source';

/**
 * Config object key for transformer action objects.
 * @type {string}
 */
export const TRANSFORMER_ACTIONS_KEY = 'transformerActions';

/**
 * Config transformer action object key for transformer string replacement.
 * @type {string}
 */
export const TRANSFORMER_REPLACE_STRING_KEY = 'replaceString';

/**
 * Config transformer action object key for transformer name.
 * @type {string}
 */
export const TRANSFORMER_NAME_KEY = 'name';
