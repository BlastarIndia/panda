/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var grammar = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Root":3,"Expressions":4,"Expression":5,"Terminator":6,"NEWLINE":7,"Literal":8,"Call":9,"Operator":10,"GetConstant":11,"SetConstant":12,"GetLocal":13,"SetLocal":14,"Def":15,"If":16,"(":17,")":18,"NUMBER":19,"STRING":20,"TRUE":21,"FALSE":22,"NONE":23,"IDENTIFIER":24,"Arguments":25,".":26,"ArgList":27,",":28,"OR":29,"AND":30,"==":31,"!=":32,">":33,">=":34,"<":35,"<=":36,"+":37,"-":38,"*":39,"/":40,"+=":41,"-=":42,"*=":43,"/=":44,"CONSTANT":45,"=":46,"Block":47,"START_BLOCK":48,"END_BLOCK":49,"DEF":50,"ParamList":51,"IF":52,"$accept":0,"$end":1},
terminals_: {2:"error",7:"NEWLINE",13:"GetLocal",14:"SetLocal",17:"(",18:")",19:"NUMBER",20:"STRING",21:"TRUE",22:"FALSE",23:"NONE",24:"IDENTIFIER",26:".",28:",",29:"OR",30:"AND",31:"==",32:"!=",33:">",34:">=",35:"<",36:"<=",37:"+",38:"-",39:"*",40:"/",41:"+=",42:"-=",43:"*=",44:"/=",45:"CONSTANT",46:"=",48:"START_BLOCK",49:"END_BLOCK",50:"DEF",52:"IF"},
productions_: [0,[3,0],[3,1],[4,1],[4,3],[4,2],[4,2],[4,1],[6,1],[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[5,1],[5,3],[8,1],[8,1],[8,1],[8,1],[8,1],[9,2],[9,4],[25,2],[25,3],[27,1],[27,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[11,1],[11,1],[12,3],[12,3],[47,2],[47,3],[15,6],[51,0],[51,1],[51,3],[16,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
            this.$ = new n.Nodes(null, createLoc(null, _$[$0], _$[$0]));
        
break;
case 2:
            this.$ = new n.Nodes($$[$0], createLoc(null, _$[$0], _$[$0]));
            return this.$;
        
break;
case 3:
            this.$ = new n.Nodes([$$[$0]], createLoc(_$[$0], _$[$0]));
        
break;
case 4:
            this.$ = $$[$0-2].push($$[$0]);
        
break;
case 5:
            this.$ = $$[$0-1];
        
break;
case 6:
            this.$ = $$[$0];
        
break;
case 7:
            this.$ = [];
        
break;
case 18:
            this.$ = $$[$0-1];
        
break;
case 19:
            this.$ = new n.NumberNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 20:
            this.$ = new n.StringNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 21:
            this.$ = new n.TrueNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 22:
            this.$ = new n.FalseNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 23:
            this.$ = new n.NoneNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 24:
            this.$ = new n.CallNode(null, $$[$0-1], $$[$0], createLoc(_$[$0-1], _$[$0]));
        
break;
case 25:
            this.$ = new n.CallNode($$[$0-3], $$[$0-1], $$[$0], createLoc(_$[$0-3], _$[$0]));
        
break;
case 26:
            this.$ = [];
        
break;
case 27:
            this.$ = $$[$0-1];
        
break;
case 28:
            this.$ = $$[$0];
        
break;
case 29:
            this.$ = $$[$0-2].concat($$[$0]);
        
break;
case 30:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 31:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 32:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 33:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 34:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 35:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 36:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 37:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 38:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 39:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 40:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 41:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 42:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 43:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 44:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 45:
            this.$ = new n.CallNode($$[$0-2], $$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 46:
            this.$ = new n.GetConstantNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 47:
            this.$ = new n.GetLocalNode($$[$0], createLoc(_$[$0], _$[$0]));
        
break;
case 48:
            this.$ = new n.SetConstantNode($$[$0-2], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 49:
            this.$ = new n.SetLocalNode($$[$0-2], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
case 50:
            this.$ = [];
        
break;
case 51:
            this.$ = $$[$0-1];
        
break;
case 52:
            this.$ = new n.DefNode($$[$0-4], $$[$0-2], $$[$0], createLoc(_$[$0-5], _$[$0]));
        
break;
case 53:
            this.$ = [];
        
break;
case 54:
            this.$ = $$[$0];
        
break;
case 55:
            this.$ = $$[$0-2].concat($$[$0]);
        
break;
case 56:
            this.$ = new n.IfNode($$[$0-1], $$[$0], createLoc(_$[$0-2], _$[$0]));
        
break;
}
},
table: [{1:[2,1],3:1,4:2,5:3,6:4,7:[1,15],8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{1:[3]},{1:[2,2],6:25,7:[1,15]},{1:[2,3],7:[2,3],26:[1,26],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],49:[2,3]},{1:[2,7],4:43,5:3,6:4,7:[1,15],8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],49:[2,7],50:[1,23],52:[1,24]},{1:[2,9],7:[2,9],18:[2,9],26:[2,9],28:[2,9],29:[2,9],30:[2,9],31:[2,9],32:[2,9],33:[2,9],34:[2,9],35:[2,9],36:[2,9],37:[2,9],38:[2,9],39:[2,9],40:[2,9],41:[2,9],42:[2,9],43:[2,9],44:[2,9],48:[2,9],49:[2,9]},{1:[2,10],7:[2,10],18:[2,10],26:[2,10],28:[2,10],29:[2,10],30:[2,10],31:[2,10],32:[2,10],33:[2,10],34:[2,10],35:[2,10],36:[2,10],37:[2,10],38:[2,10],39:[2,10],40:[2,10],41:[2,10],42:[2,10],43:[2,10],44:[2,10],48:[2,10],49:[2,10]},{1:[2,11],7:[2,11],18:[2,11],26:[2,11],28:[2,11],29:[2,11],30:[2,11],31:[2,11],32:[2,11],33:[2,11],34:[2,11],35:[2,11],36:[2,11],37:[2,11],38:[2,11],39:[2,11],40:[2,11],41:[2,11],42:[2,11],43:[2,11],44:[2,11],48:[2,11],49:[2,11]},{1:[2,12],7:[2,12],18:[2,12],26:[2,12],28:[2,12],29:[2,12],30:[2,12],31:[2,12],32:[2,12],33:[2,12],34:[2,12],35:[2,12],36:[2,12],37:[2,12],38:[2,12],39:[2,12],40:[2,12],41:[2,12],42:[2,12],43:[2,12],44:[2,12],48:[2,12],49:[2,12]},{1:[2,13],7:[2,13],18:[2,13],26:[2,13],28:[2,13],29:[2,13],30:[2,13],31:[2,13],32:[2,13],33:[2,13],34:[2,13],35:[2,13],36:[2,13],37:[2,13],38:[2,13],39:[2,13],40:[2,13],41:[2,13],42:[2,13],43:[2,13],44:[2,13],48:[2,13],49:[2,13]},{1:[2,14],7:[2,14],18:[2,14],26:[2,14],28:[2,14],29:[2,14],30:[2,14],31:[2,14],32:[2,14],33:[2,14],34:[2,14],35:[2,14],36:[2,14],37:[2,14],38:[2,14],39:[2,14],40:[2,14],41:[2,14],42:[2,14],43:[2,14],44:[2,14],48:[2,14],49:[2,14]},{1:[2,15],7:[2,15],18:[2,15],26:[2,15],28:[2,15],29:[2,15],30:[2,15],31:[2,15],32:[2,15],33:[2,15],34:[2,15],35:[2,15],36:[2,15],37:[2,15],38:[2,15],39:[2,15],40:[2,15],41:[2,15],42:[2,15],43:[2,15],44:[2,15],48:[2,15],49:[2,15]},{1:[2,16],7:[2,16],18:[2,16],26:[2,16],28:[2,16],29:[2,16],30:[2,16],31:[2,16],32:[2,16],33:[2,16],34:[2,16],35:[2,16],36:[2,16],37:[2,16],38:[2,16],39:[2,16],40:[2,16],41:[2,16],42:[2,16],43:[2,16],44:[2,16],48:[2,16],49:[2,16]},{1:[2,17],7:[2,17],18:[2,17],26:[2,17],28:[2,17],29:[2,17],30:[2,17],31:[2,17],32:[2,17],33:[2,17],34:[2,17],35:[2,17],36:[2,17],37:[2,17],38:[2,17],39:[2,17],40:[2,17],41:[2,17],42:[2,17],43:[2,17],44:[2,17],48:[2,17],49:[2,17]},{5:44,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{1:[2,8],7:[2,8],13:[2,8],14:[2,8],17:[2,8],19:[2,8],20:[2,8],21:[2,8],22:[2,8],23:[2,8],24:[2,8],45:[2,8],49:[2,8],50:[2,8],52:[2,8]},{1:[2,19],7:[2,19],18:[2,19],26:[2,19],28:[2,19],29:[2,19],30:[2,19],31:[2,19],32:[2,19],33:[2,19],34:[2,19],35:[2,19],36:[2,19],37:[2,19],38:[2,19],39:[2,19],40:[2,19],41:[2,19],42:[2,19],43:[2,19],44:[2,19],48:[2,19],49:[2,19]},{1:[2,20],7:[2,20],18:[2,20],26:[2,20],28:[2,20],29:[2,20],30:[2,20],31:[2,20],32:[2,20],33:[2,20],34:[2,20],35:[2,20],36:[2,20],37:[2,20],38:[2,20],39:[2,20],40:[2,20],41:[2,20],42:[2,20],43:[2,20],44:[2,20],48:[2,20],49:[2,20]},{1:[2,21],7:[2,21],18:[2,21],26:[2,21],28:[2,21],29:[2,21],30:[2,21],31:[2,21],32:[2,21],33:[2,21],34:[2,21],35:[2,21],36:[2,21],37:[2,21],38:[2,21],39:[2,21],40:[2,21],41:[2,21],42:[2,21],43:[2,21],44:[2,21],48:[2,21],49:[2,21]},{1:[2,22],7:[2,22],18:[2,22],26:[2,22],28:[2,22],29:[2,22],30:[2,22],31:[2,22],32:[2,22],33:[2,22],34:[2,22],35:[2,22],36:[2,22],37:[2,22],38:[2,22],39:[2,22],40:[2,22],41:[2,22],42:[2,22],43:[2,22],44:[2,22],48:[2,22],49:[2,22]},{1:[2,23],7:[2,23],18:[2,23],26:[2,23],28:[2,23],29:[2,23],30:[2,23],31:[2,23],32:[2,23],33:[2,23],34:[2,23],35:[2,23],36:[2,23],37:[2,23],38:[2,23],39:[2,23],40:[2,23],41:[2,23],42:[2,23],43:[2,23],44:[2,23],48:[2,23],49:[2,23]},{1:[2,47],7:[2,47],17:[1,47],18:[2,47],25:45,26:[2,47],28:[2,47],29:[2,47],30:[2,47],31:[2,47],32:[2,47],33:[2,47],34:[2,47],35:[2,47],36:[2,47],37:[2,47],38:[2,47],39:[2,47],40:[2,47],41:[2,47],42:[2,47],43:[2,47],44:[2,47],46:[1,46],48:[2,47],49:[2,47]},{1:[2,46],7:[2,46],18:[2,46],26:[2,46],28:[2,46],29:[2,46],30:[2,46],31:[2,46],32:[2,46],33:[2,46],34:[2,46],35:[2,46],36:[2,46],37:[2,46],38:[2,46],39:[2,46],40:[2,46],41:[2,46],42:[2,46],43:[2,46],44:[2,46],46:[1,48],48:[2,46],49:[2,46]},{24:[1,49]},{5:50,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{1:[2,5],5:51,7:[2,5],8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],49:[2,5],50:[1,23],52:[1,24]},{24:[1,52]},{5:53,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:54,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:55,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:56,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:57,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:58,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:59,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:60,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:61,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:62,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:63,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:64,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:65,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:66,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:67,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:68,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{1:[2,6],6:25,7:[1,15],49:[2,6]},{18:[1,69],26:[1,26],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42]},{1:[2,24],7:[2,24],18:[2,24],26:[2,24],28:[2,24],29:[2,24],30:[2,24],31:[2,24],32:[2,24],33:[2,24],34:[2,24],35:[2,24],36:[2,24],37:[2,24],38:[2,24],39:[2,24],40:[2,24],41:[2,24],42:[2,24],43:[2,24],44:[2,24],48:[2,24],49:[2,24]},{5:70,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{5:73,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],18:[1,71],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],27:72,45:[1,22],50:[1,23],52:[1,24]},{5:74,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{17:[1,75]},{26:[1,26],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],47:76,48:[1,77]},{1:[2,4],7:[2,4],26:[1,26],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],49:[2,4]},{17:[1,47],25:78},{1:[2,30],7:[2,30],18:[2,30],26:[1,26],28:[2,30],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,30],49:[2,30]},{1:[2,31],7:[2,31],18:[2,31],26:[1,26],28:[2,31],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,31],49:[2,31]},{1:[2,32],7:[2,32],18:[2,32],26:[1,26],28:[2,32],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,32],49:[2,32]},{1:[2,33],7:[2,33],18:[2,33],26:[1,26],28:[2,33],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,33],49:[2,33]},{1:[2,34],7:[2,34],18:[2,34],26:[1,26],28:[2,34],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,34],49:[2,34]},{1:[2,35],7:[2,35],18:[2,35],26:[1,26],28:[2,35],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,35],49:[2,35]},{1:[2,36],7:[2,36],18:[2,36],26:[1,26],28:[2,36],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,36],49:[2,36]},{1:[2,37],7:[2,37],18:[2,37],26:[1,26],28:[2,37],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,37],49:[2,37]},{1:[2,38],7:[2,38],18:[2,38],26:[1,26],28:[2,38],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,38],49:[2,38]},{1:[2,39],7:[2,39],18:[2,39],26:[1,26],28:[2,39],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,39],49:[2,39]},{1:[2,40],7:[2,40],18:[2,40],26:[1,26],28:[2,40],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,40],49:[2,40]},{1:[2,41],7:[2,41],18:[2,41],26:[1,26],28:[2,41],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,41],49:[2,41]},{1:[2,42],7:[2,42],18:[2,42],26:[1,26],28:[2,42],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,42],49:[2,42]},{1:[2,43],7:[2,43],18:[2,43],26:[1,26],28:[2,43],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,43],49:[2,43]},{1:[2,44],7:[2,44],18:[2,44],26:[1,26],28:[2,44],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,44],49:[2,44]},{1:[2,45],7:[2,45],18:[2,45],26:[1,26],28:[2,45],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,45],49:[2,45]},{1:[2,18],7:[2,18],18:[2,18],26:[2,18],28:[2,18],29:[2,18],30:[2,18],31:[2,18],32:[2,18],33:[2,18],34:[2,18],35:[2,18],36:[2,18],37:[2,18],38:[2,18],39:[2,18],40:[2,18],41:[2,18],42:[2,18],43:[2,18],44:[2,18],48:[2,18],49:[2,18]},{1:[2,49],7:[2,49],18:[2,49],26:[1,26],28:[2,49],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,49],49:[2,49]},{1:[2,26],7:[2,26],18:[2,26],26:[2,26],28:[2,26],29:[2,26],30:[2,26],31:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],37:[2,26],38:[2,26],39:[2,26],40:[2,26],41:[2,26],42:[2,26],43:[2,26],44:[2,26],48:[2,26],49:[2,26]},{18:[1,79],28:[1,80]},{18:[2,28],26:[1,26],28:[2,28],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42]},{1:[2,48],7:[2,48],18:[2,48],26:[1,26],28:[2,48],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42],48:[2,48],49:[2,48]},{18:[2,53],24:[1,82],28:[2,53],51:81},{1:[2,56],7:[2,56],18:[2,56],26:[2,56],28:[2,56],29:[2,56],30:[2,56],31:[2,56],32:[2,56],33:[2,56],34:[2,56],35:[2,56],36:[2,56],37:[2,56],38:[2,56],39:[2,56],40:[2,56],41:[2,56],42:[2,56],43:[2,56],44:[2,56],48:[2,56],49:[2,56]},{4:84,5:3,6:4,7:[1,15],8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],49:[1,83],50:[1,23],52:[1,24]},{1:[2,25],7:[2,25],18:[2,25],26:[2,25],28:[2,25],29:[2,25],30:[2,25],31:[2,25],32:[2,25],33:[2,25],34:[2,25],35:[2,25],36:[2,25],37:[2,25],38:[2,25],39:[2,25],40:[2,25],41:[2,25],42:[2,25],43:[2,25],44:[2,25],48:[2,25],49:[2,25]},{1:[2,27],7:[2,27],18:[2,27],26:[2,27],28:[2,27],29:[2,27],30:[2,27],31:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],37:[2,27],38:[2,27],39:[2,27],40:[2,27],41:[2,27],42:[2,27],43:[2,27],44:[2,27],48:[2,27],49:[2,27]},{5:85,8:5,9:6,10:7,11:8,12:9,13:[1,10],14:[1,11],15:12,16:13,17:[1,14],19:[1,16],20:[1,17],21:[1,18],22:[1,19],23:[1,20],24:[1,21],45:[1,22],50:[1,23],52:[1,24]},{18:[1,86],28:[1,87]},{18:[2,54],28:[2,54]},{1:[2,50],7:[2,50],18:[2,50],26:[2,50],28:[2,50],29:[2,50],30:[2,50],31:[2,50],32:[2,50],33:[2,50],34:[2,50],35:[2,50],36:[2,50],37:[2,50],38:[2,50],39:[2,50],40:[2,50],41:[2,50],42:[2,50],43:[2,50],44:[2,50],48:[2,50],49:[2,50]},{6:25,7:[1,15],49:[1,88]},{18:[2,29],26:[1,26],28:[2,29],29:[1,27],30:[1,28],31:[1,29],32:[1,30],33:[1,31],34:[1,32],35:[1,33],36:[1,34],37:[1,35],38:[1,36],39:[1,37],40:[1,38],41:[1,39],42:[1,40],43:[1,41],44:[1,42]},{47:89,48:[1,77]},{24:[1,90]},{1:[2,51],7:[2,51],18:[2,51],26:[2,51],28:[2,51],29:[2,51],30:[2,51],31:[2,51],32:[2,51],33:[2,51],34:[2,51],35:[2,51],36:[2,51],37:[2,51],38:[2,51],39:[2,51],40:[2,51],41:[2,51],42:[2,51],43:[2,51],44:[2,51],48:[2,51],49:[2,51]},{1:[2,52],7:[2,52],18:[2,52],26:[2,52],28:[2,52],29:[2,52],30:[2,52],31:[2,52],32:[2,52],33:[2,52],34:[2,52],35:[2,52],36:[2,52],37:[2,52],38:[2,52],39:[2,52],40:[2,52],41:[2,52],42:[2,52],43:[2,52],44:[2,52],48:[2,52],49:[2,52]},{18:[2,55],28:[2,55]}],
defaultActions: {},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

// End Grammar


var n = require('./nodes');

// This is taken from
// https://github.com/cjihrig/jsparser
function SourceLocation(source, start, end, loc) {
    this.source = source;
    this.start = start;
    this.end = end;
}

function createLoc(source, firstToken, lastToken) {
    return new SourceLocation(
        source,
        new Position(0, 0),//firstToken.first_line, firstToken.first_column),
        new Position(0, 0)//lastToken.last_line, lastToken.last_column)
    );
}

function Position(line, column) {
    this.line = line;
    this.column = column;
}

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = grammar;
exports.Parser = grammar.Parser;
exports.parse = function () { return grammar.parse.apply(grammar, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}