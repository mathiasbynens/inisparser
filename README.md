## INISPARSER

Take OSTI notation and convert to INIS.

    npm install inisparser
    
    var parse = require('inisparser').parseOSTItoINIS
    var output = parse('... string containing OSTI notations ...')
    
The purpose of this package is to convert the OSTI notations for formulas and
convert it to the INIS notation. There are a couple of other functions that do
things like reverse that conversion ( poorly, so any help or ideas there are welcome ),
and one that makes a valiant attempt and picking UTF-8 characters.

#### Note
The UTF-8 character replacement is best effort. Obviously these formulas can get
quite complex, and can't really be represented in this way. MathML or something
similar would be a better solution, but it is a request that I had to fulfill for
other reasons.

