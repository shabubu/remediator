import {
  EXTENSION,
  EXTENSION_LOWERCASE,
  EXTENSION_UPPERCASE,
  HEIGHT,
  MAKE,
  MAKE_LOWERCASE,
  MAKE_UPPERCASE,
  MODEL,
  MODEL_LOWERCASE,
  MODEL_UPPERCASE,
  NUMERIC_DAY,
  NUMERIC_DAY_LEADING_ZERO,
  NUMERIC_HOUR,
  NUMERIC_HOUR_LEADING_ZERO,
  NUMERIC_MINUTE,
  NUMERIC_MINUTE_LEADING_ZERO,
  NUMERIC_MONTH,
  NUMERIC_MONTH_LEADING_ZERO,
  NUMERIC_YEAR,
  ORIENTATION,
  ORIENTATION_LOWERCASE,
  ORIENTATION_UPPERCASE,
  STRING_DAY,
  STRING_DAY_LOWERCASE,
  STRING_DAY_UPPERCASE,
  STRING_MONTH,
  STRING_MONTH_LOWERCASE,
  STRING_MONTH_UPPERCASE,
  WIDTH,
} from 'src/constants/transformers';
import getExtension from 'src/lib/transformPaths/transformers/getExtension';
import getExtensionLowercase from 'src/lib/transformPaths/transformers/getExtensionLowercase';
import getExtensionUppercasse from 'src/lib/transformPaths/transformers/getExtensionUppercase';
import getHeight from 'src/lib/transformPaths/transformers/getHeight';
import getMake from 'src/lib/transformPaths/transformers/getMake';
import getMakeLowercase from 'src/lib/transformPaths/transformers/getMakeLowercase';
import getMakeUppercase from 'src/lib/transformPaths/transformers/getMakeUppercase';
import getModel from 'src/lib/transformPaths/transformers/getModel';
import getModelLowercase from 'src/lib/transformPaths/transformers/getModelLowercase';
import getModelUppercase from 'src/lib/transformPaths/transformers/getModelUppercase';
import getNumericDay from 'src/lib/transformPaths/transformers/getNumericDay';
import getNumericDayWithLeadingZero
  from 'src/lib/transformPaths/transformers/getNumericDayWithLeadingZero';
import getNumericHour from 'src/lib/transformPaths/transformers/getNumericHour';
import getNumericHourWithLeadingZero
  from 'src/lib/transformPaths/transformers/getNumericHourWithLeadingZero';
import getNumericMinute from 'src/lib/transformPaths/transformers/getNumericMinute';
import getNumericMinuteWithLeadingZero
  from 'src/lib/transformPaths/transformers/getNumericMinuteWithLeadingZero';
import getNumericMonth from 'src/lib/transformPaths/transformers/getNumericMonth';
import getNumericMonthWithLeadingZero
  from 'src/lib/transformPaths/transformers/getNumericMonthWithLeadingZero';
import getNumericYear from 'src/lib/transformPaths/transformers/getNumericYear';
import getOrientation from 'src/lib/transformPaths/transformers/getOrientation';
import getOrientationLowercase from 'src/lib/transformPaths/transformers/getOrientationLowercase';
import getOrientationUppercase from 'src/lib/transformPaths/transformers/getOrientationUppercase';
import getStringDay from 'src/lib/transformPaths/transformers/getStringDay';
import getStringDayLowercase from 'src/lib/transformPaths/transformers/getStringDayLowercase';
import getStringDayUppercase from 'src/lib/transformPaths/transformers/getStringDayUppercase';
import getStringMonth from 'src/lib/transformPaths/transformers/getStringMonth';
import getStringMonthLowercase from 'src/lib/transformPaths/transformers/getStringMonthLowercase';
import getStringMonthUppercase from 'src/lib/transformPaths/transformers/getStringMonthUppercase';
import getWidth from 'src/lib/transformPaths/transformers/getWidth';

/**
 * Exports an object with transformer names mapped to their associated transform function.
 */
export default {
  [EXTENSION]: getExtension,
  [EXTENSION_LOWERCASE]: getExtensionLowercase,
  [EXTENSION_UPPERCASE]: getExtensionUppercasse,
  [HEIGHT]: getHeight,
  [MAKE]: getMake,
  [MAKE_LOWERCASE]: getMakeLowercase,
  [MAKE_UPPERCASE]: getMakeUppercase,
  [MODEL]: getModel,
  [MODEL_LOWERCASE]: getModelLowercase,
  [MODEL_UPPERCASE]: getModelUppercase,
  [NUMERIC_DAY]: getNumericDay,
  [NUMERIC_DAY_LEADING_ZERO]: getNumericDayWithLeadingZero,
  [NUMERIC_HOUR]: getNumericHour,
  [NUMERIC_HOUR_LEADING_ZERO]: getNumericHourWithLeadingZero,
  [NUMERIC_MINUTE]: getNumericMinute,
  [NUMERIC_MINUTE_LEADING_ZERO]: getNumericMinuteWithLeadingZero,
  [NUMERIC_MONTH]: getNumericMonth,
  [NUMERIC_MONTH_LEADING_ZERO]: getNumericMonthWithLeadingZero,
  [NUMERIC_YEAR]: getNumericYear,
  [ORIENTATION]: getOrientation,
  [ORIENTATION_LOWERCASE]: getOrientationLowercase,
  [ORIENTATION_UPPERCASE]: getOrientationUppercase,
  [STRING_DAY]: getStringDay,
  [STRING_DAY_LOWERCASE]: getStringDayLowercase,
  [STRING_DAY_UPPERCASE]: getStringDayUppercase,
  [STRING_MONTH]: getStringMonth,
  [STRING_MONTH_LOWERCASE]: getStringMonthLowercase,
  [STRING_MONTH_UPPERCASE]: getStringMonthUppercase,
  [WIDTH]: getWidth,
};
