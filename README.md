# Analysis

## Extracting 

Both parser and scanner does similar job in extracting the translations.
Both cannot detect the namespace of the Trans component passed as 
as `ns` prop. Scanner is adding plural forms, parser is not. Parse documentation
is saying that is supports plural forms but couldn't find a way make it work.

Issue to scanner has been reported: https://github.com/i18next/i18next-scanner/issues/137

I recommend using `i18nKey` when using `Trans` component.

Repeting scanning overrides the modified values in extracted translations,
we must use `dev` language for scanning/parsing.


## Translation

Tool for finding plural forms for specific language.
