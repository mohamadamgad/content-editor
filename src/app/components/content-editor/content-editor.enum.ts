export enum ContentEditor {
    HEADER = '# H1\n' + '## H2\n' + '### H3\n' + '#### H4\n' + '##### H5\n' + '###### H6\n',
    LIST = '1. First ordered list item\n' +
    '2. Another item\n' +
    '⋅⋅* Unordered sub-list. \n' +
    '1. Actual numbers don\'t matter, just that it\'s a number\n' +
    '⋅⋅1. Ordered sub-list\n' +
    '4. And another item.\n',
    CODE = 'Inline `code` has `back-ticks around` it.',
    TABLE = 'Colons can be used to align columns.\n' +
    '\n' +
    '| Tables        | Are           | Cool  |\n' +
    '| ------------- |:-------------:| -----:|\n' +
    '| col 3 is      | right-aligned | $1600 |\n' +
    '| col 2 is      | centered      |   $12 |\n' +
    '| zebra stripes | are neat      |    $1 |\n' +
    '\n' +
    'There must be at least 3 dashes separating each header cell.\n' +
    'The outer pipes (|) are optional, and you don\'t need to make the \n' +
    'raw Markdown line up prettily. You can also use inline Markdown.\n' +
    '\n' +
    'Markdown | Less | Pretty\n' +
    '--- | --- | ---\n' +
    '*Still* | `renders` | **nicely**\n' +
    '1 | 2 | 3'
}
