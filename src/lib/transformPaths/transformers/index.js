import {
  NUMERIC_DAY,
  NUMERIC_DAY_LEADING_ZERO,
  NUMERIC_HOUR,
  NUMERIC_HOUR_LEADING_ZERO,
  NUMERIC_MINUTE,
  NUMERIC_MINUTE_LEADING_ZERO,
  NUMERIC_MONTH,
  NUMERIC_MONTH_LEADING_ZERO,
  NUMERIC_YEAR,
  STRING_DAY,
  STRING_DAY_LOWERCASE,
  STRING_DAY_UPPERCASE,
  STRING_MONTH,
  STRING_MONTH_LOWERCASE,
  STRING_MONTH_UPPERCASE,
} from 'src/constants/transformers';
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
import getStringDay from 'src/lib/transformPaths/transformers/getStringDay';
import getStringDayLowercase from 'src/lib/transformPaths/transformers/getStringDayLowercase';
import getStringDayUppercase from 'src/lib/transformPaths/transformers/getStringDayUppercase';
import getStringMonth from 'src/lib/transformPaths/transformers/getStringMonth';
import getStringMonthLowercase from 'src/lib/transformPaths/transformers/getStringMonthLowercase';
import getStringMonthUppercase from 'src/lib/transformPaths/transformers/getStringMonthUppercase';

/**
 * Exports an object with transformer names mapped to their associated transform function.
 */
export default {
  [NUMERIC_DAY]: getNumericDay,
  [NUMERIC_DAY_LEADING_ZERO]: getNumericDayWithLeadingZero,
  [NUMERIC_HOUR]: getNumericHour,
  [NUMERIC_HOUR_LEADING_ZERO]: getNumericHourWithLeadingZero,
  [NUMERIC_MINUTE]: getNumericMinute,
  [NUMERIC_MINUTE_LEADING_ZERO]: getNumericMinuteWithLeadingZero,
  [NUMERIC_MONTH]: getNumericMonth,
  [NUMERIC_MONTH_LEADING_ZERO]: getNumericMonthWithLeadingZero,
  [NUMERIC_YEAR]: getNumericYear,
  [STRING_DAY]: getStringDay,
  [STRING_DAY_LOWERCASE]: getStringDayLowercase,
  [STRING_DAY_UPPERCASE]: getStringDayUppercase,
  [STRING_MONTH]: getStringMonth,
  [STRING_MONTH_LOWERCASE]: getStringMonthLowercase,
  [STRING_MONTH_UPPERCASE]: getStringMonthUppercase,
};
