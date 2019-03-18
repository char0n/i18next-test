# Analysis

## Extracting 

Both parser and scanner does similar job in extracting the translations.
Both cannot detect the namespace of the Trans component passed as 
as `ns` prop. Scanner is adding plural forms, parser is not. Parse documentation
is saying that is supports plural forms but couldn't find a way make it work.

Issue to scanner has been reported: https://github.com/i18next/i18next-scanner/issues/137 (this is already implemented and resolved)
Additional issue with auto-generating keys is report here: https://github.com/i18next/i18next-scanner/issues/125#issuecomment-473919033

I recommend using `i18nKey` when using `Trans` component.

Repeating scanning overrides the modified values in extracted translations,
we must use `dev` language for scanning/parsing.


## Translation

Tool for finding plural forms for specific language. https://jsfiddle.net/jamuhl/3sL01fn0/#tabs=result

## Formatting

Formatting is very primitive and doesn't contain any default formatters implementation.
We can use either Intl or numerals.js (Intl prefered) for locale aware formatting. moment.js for formatting
dates. We'll have to come up with open/closed systems of formatters because the i18next implementation
is just wrong.
