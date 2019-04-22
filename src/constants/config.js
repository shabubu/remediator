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
} from 'src/constants/transformers';

const { sep } = path;

/**
 * Config object key for amount of files to process at a time.
 * @type {string}
 */
export const BATCH_SIZE_KEY = 'batchSize';

/**
 * Markup separator for format string to add transformers between.
 * @type {string}
 */
export const FORMAT_SEPARATOR = ':';

/**
 * Default value for BATCH_SIZE_KEY if not provided as an option.
 * @type {number}
 */
export const DEFAULT_BATCH_SIZE = 20;

/**
 * Default value for FORMAT_KEY if not provided as an option.
 * ex: ":YYYY:\:MM0:. :Month:\:DD0: :Day:\:YYYY:.:MM0:.:DD0: :HH0:.:MN0:.:Ext:"
 * @type {string}
 */
export const DEFAULT_FORMAT = `${FORMAT_SEPARATOR}${NUMERIC_YEAR}${FORMAT_SEPARATOR}${sep}${FORMAT_SEPARATOR}${NUMERIC_MONTH_LEADING_ZERO}${FORMAT_SEPARATOR}. ${FORMAT_SEPARATOR}${STRING_MONTH}${FORMAT_SEPARATOR}${sep}${FORMAT_SEPARATOR}${NUMERIC_DAY_LEADING_ZERO}${FORMAT_SEPARATOR} ${FORMAT_SEPARATOR}${STRING_DAY}${FORMAT_SEPARATOR}${sep}${FORMAT_SEPARATOR}${NUMERIC_YEAR}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${NUMERIC_MONTH_LEADING_ZERO}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${NUMERIC_DAY_LEADING_ZERO}${FORMAT_SEPARATOR} ${FORMAT_SEPARATOR}${NUMERIC_HOUR_LEADING_ZERO}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${NUMERIC_MINUTE_LEADING_ZERO}${FORMAT_SEPARATOR}.${FORMAT_SEPARATOR}${EXTENSION}${FORMAT_SEPARATOR}`;

/**
 * Default value for GEOCODING_API_KEY_KEY if not provided as an option.
 * @type {string}
 */
export const DEFAULT_GEOCODING_API_KEY = '';

/**
 * Default value for RECURSIVE_KEY if not provided as an option.
 * @type {boolean}
 */
export const DEFAULT_RECURSIVE = false;

/**
 * Default value for SKIP_ERRORS_KEY if not provided as an option.
 * @type {boolean}
 */
export const DEFAULT_SKIP_ERRORS = false;

/**
 * Config object key for exiftool instance.
 * @type {string}
 */
export const EXIFTOOL_KEY = 'exiftool';

/**
 * Config object key for filename format template.
 * @type {string}
 */
export const FORMAT_KEY = 'format';

/**
 * Config object key for google geocoding api key.
 * @type {string}
 */
export const GEOCODING_API_KEY_KEY = 'geoApiKey';

/**
 * Mode to copy files.
 * @type {string}
 */
export const MODE_COPY = 'copy';

/**
 * Mode to not copy or move, but return what changes would be made.
 * @type {string}
 */
export const MODE_DRY = 'dry';

/**
 * Config object key for file mode.
 * @type {string}
 */
export const MODE_KEY = 'mode';

/**
 * Mode to move files.
 * @type {string}
 */
export const MODE_MOVE = 'move';

/**
 * Default value for MODE_KEY if not provided as an option.
 * @type {string}
 */
export const DEFAULT_MODE = MODE_DRY;

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
 * Config object key for skipping errors while processing files.
 * @type {string}
 */
export const SKIP_ERRORS_KEY = 'skipErrors';

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
 * Config transformer action object key for transformer name.
 * @type {string}
 */
export const TRANSFORMER_NAME_KEY = 'name';

/**
 * Config transformer action object key for transformer string replacement.
 * @type {string}
 */
export const TRANSFORMER_REPLACE_STRING_KEY = 'replaceString';
