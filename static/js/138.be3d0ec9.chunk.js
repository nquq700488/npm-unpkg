(this["webpackJsonpnpm-unpkg"]=this["webpackJsonpnpm-unpkg"]||[]).push([[138],{271:function(e,n){!function(e){for(var n="[^<()\"']|\\((?:<expr>)*\\)|<(?!#--)|<#--(?:[^-]|-(?!->))*--\x3e|\"(?:[^\\\\\"]|\\\\.)*\"|'(?:[^\\\\']|\\\\.)*'",t=0;t<2;t++)n=n.replace(/<expr>/g,(function(){return n}));n=n.replace(/<expr>/g,"[^\\s\\S]");var i={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp("(\"|')(?:(?!\\1|\\$\\{)[^\\\\]|\\\\.|\\$\\{(?:<expr>)*?\\})*\\1".replace(/<expr>/g,(function(){return n}))),greedy:!0,inside:{interpolation:{pattern:RegExp("((?:^|[^\\\\])(?:\\\\\\\\)*)\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g,(function(){return n}))),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:true|false)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\w+(?=\s*\()/,number:/\d+(?:\.\d+)?/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};i.string[1].inside.interpolation.inside.rest=i,e.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/[\s\S]*\S[\s\S]*/,alias:"ftl",inside:i}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/[\s\S]*\S[\s\S]*/,alias:"ftl",inside:i}}}},e.hooks.add("before-tokenize",(function(t){var i=RegExp("<#--[^]*?--\x3e|</?[#@][a-zA-Z](?:<expr>)*?>|\\$\\{(?:<expr>)*?\\}".replace(/<expr>/g,(function(){return n})),"gi");e.languages["markup-templating"].buildPlaceholders(t,"ftl",i)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ftl")}))}(Prism)}}]);
//# sourceMappingURL=138.be3d0ec9.chunk.js.map