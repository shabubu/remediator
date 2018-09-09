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
 * Default value for FORMAT_KEY if not provided as an option.
 * @type {string}
 */
export const DEFAULT_FORMAT = `:${NUMERIC_YEAR}:${sep}:${NUMERIC_MONTH_LEADING_ZERO}:. :${STRING_MONTH}:${sep}:${NUMERIC_DAY_LEADING_ZERO}: :${STRING_DAY}:${sep}:${NUMERIC_YEAR}:.:${NUMERIC_MONTH_LEADING_ZERO}:.:${NUMERIC_DAY_LEADING_ZERO}: :${NUMERIC_HOUR_LEADING_ZERO}:.:${NUMERIC_MINUTE_LEADING_ZERO}:.:${EXTENSION}:`;

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
