var Lexer = function () {
    var self = this;

    self.KEYWORDS = [
        "def",
        "if",
        "end",
        "true",
        "false",
        "none",
        "or",
        "and"
    ];

    self.tokenize = function (code) {
        var tokens = [],
            i = 0, // current character position
            chunk,
            identifier,
            matched,
            block_depth = 0;

        while (i < code.length) {
            chunk = code.slice(i);

            // block end
            matched = chunk.match(/^end/);
            if (matched !== null) {
                block_depth -= 1;

                tokens.push(["END_BLOCK", block_depth]);

                i += matched[0].length;
                continue;
            }


            // keywords and identifiers
            matched = chunk.match(/^[a-z]\w*/);
            if (matched !== null) {
                identifier = matched[0];

                if (self.KEYWORDS.indexOf(identifier) !== -1) {
                    tokens.push([identifier.toUpperCase(), identifier]);
                } else {
                    tokens.push(["IDENTIFIER", identifier]);
                }

                i += identifier.length;
                continue;
            }

            // numbers
            matched = chunk.match(/^\d/);
            if (matched !== null) {
                identifier = matched[0];

                tokens.push(["NUMBER", parseInt(identifier)]);

                i += identifier.length;
                continue;
            }

            // strings
            matched = chunk.match(/^"([^"]*)/);
            if (matched !== null) {
                identifier = matched[1];

                tokens.push(["STRING", identifier]);

                i += identifier.length + 2; // skip the ""
                continue;
            }

            // block start
            matched = chunk.match(/^: *\n */);
            if (matched !== null) {
                block_depth += 1;

                tokens.push(["START_BLOCK", block_depth]);

                i += matched[0].length;
                continue;
            }

            // long operators
            matched = chunk.match(/^==|^!=|^<=|^>=/);
            if (matched !== null) {
                identifier = matched[0];

                tokens.push([identifier, identifier]);

                i += matched[0].length;
                continue;
            }

            // spaces
            matched = chunk.match(/^ /);
            if (matched !== null) {
                i += 1;
                continue;
            }

            // one character operators
            matched = chunk[0];
            tokens.push([matched, matched]);
            i += 1
        }

        if (block_depth !== 0) {
            console.log(tokens);
            throw "Bad block nesting !";
        }

        return tokens;
    }
}

l = new Lexer();
console.log(l.tokenize([
'hello + 2:',
'   in_block(1)',
'   another_thing("string")',
'   if 5 >= 4:',
'       do_stuff()',
'       stuff = true',
'   end',
'end'
].join('\n')
));