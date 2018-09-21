import {
  FORMAT_KEY,
  TRANSFORMER_ACTIONS_KEY,
  TRANSFORMER_NAME_KEY,
  TRANSFORMER_REPLACE_STRING_KEY,
} from 'src/constants';
import checkFormatSyntax from 'src/lib/buildConfig/checkFormatSyntax';
import {
  MissingFormatSeparatorError,
  TransformerMissingError,
} from 'src/errors';

describe('src/lib/buildConfig/checkFormatSyntax', () => {
  test('should return config object when format is valid', () => {
    const config = {
      [FORMAT_KEY]: ': DD0:.:Day :.:Ext:',
    };
    const expected = {
      ...config,
      [TRANSFORMER_ACTIONS_KEY]: [
        {
          [TRANSFORMER_NAME_KEY]: 'DD0',
          [TRANSFORMER_REPLACE_STRING_KEY]: ': DD0:',
        },
        {
          [TRANSFORMER_NAME_KEY]: 'Day',
          [TRANSFORMER_REPLACE_STRING_KEY]: ':Day :',
        },
        {
          [TRANSFORMER_NAME_KEY]: 'Ext',
          [TRANSFORMER_REPLACE_STRING_KEY]: ':Ext:',
        },
      ],
    };
    const result = checkFormatSyntax(config);

    expect.assertions(1);
    expect(result).toEqual(expected);
  });

  test('should throw when odd number of transformer separators in format', () => {
    const config = {
      [FORMAT_KEY]: ':Month::',
    };

    expect.assertions(1);
    expect(() => {
      checkFormatSyntax(config);
    }).toThrow(new MissingFormatSeparatorError(config[FORMAT_KEY]));
  });

  test('should throw when no transformer between separators', () => {
    const nonTransformer = ':Foo:';
    const config = {
      [FORMAT_KEY]: `:Month:${nonTransformer}`,
    };

    expect.assertions(1);
    expect(() => {
      checkFormatSyntax(config);
    }).toThrow(new TransformerMissingError(nonTransformer));
  });
});
