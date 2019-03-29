# Analysis

## Extracting 

I recommend using scanner for extracting the strings from codebase.
It support generating plural form for different languages automtically.

There are couple of issues with scanner. One has been reported: https://github.com/i18next/i18next-scanner/issues/137 (this is already implemented and resolved)
Additional issue with auto-generating keys is reported here: https://github.com/i18next/i18next-scanner/issues/125#issuecomment-473919033
We modified the scanner alghorytm to support intelligent merging, only new keys is added to
translation files old keys are preserved and not deleted.

I would avoid creating surrogate translations keys and let extractor autogenerate
key for us from the extracted text. The scanner is already configured in this way
and demonstration `IntlComponent` demonstrates this.


## Formatting

Formatting is very primitive and doesn't contain any default formatters implementation.
I strongly suggest to use native Intl for numbers. For dates we can use moment.js. I've provided implementation of the 
number formatting function as well as React component for it. I strongly discourage to use formatting
functionality of i18next that is embeded inside the interpolation strings, but rather format
numbers and dates before they are interpolated to translation. 

# Translation process

Our scanner extracts new strings to the configured locales and merges them with the already existing ones.
Then we use our `json2po` npm script to transform the JSON locale messages into PO files. 
PO files are then sent to the translators and they translate them. When we receive back the translated PO
files we'll use our `po2json` npm script to transform translated PO files into JSON format.

**Warning:** we have to make sure that we don't modify locale files while they are being translated.
Modifying locale files may cause the translations to get out of sync and merging the old and new 
translations is going to be very difficult. 