(this["webpackJsonpnpm-unpkg"]=this["webpackJsonpnpm-unpkg"]||[]).push([[210],{343:function(e,n){!function(e){var n=e.languages.javascript["template-string"],t=n.pattern.source,r=n.inside.interpolation,a=r.inside["interpolation-punctuation"],i=r.pattern.source;function s(n,r){if(e.languages[n])return{pattern:RegExp("((?:"+r+")\\s*)"+t),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:n}}}}function o(n,t,r){var a={code:n,grammar:t,language:r};return e.hooks.run("before-tokenize",a),a.tokens=e.tokenize(a.code,a.grammar),e.hooks.run("after-tokenize",a),a.tokens}function p(n){var t={};t["interpolation-punctuation"]=a;var i=e.tokenize(n,t);if(3===i.length){var s=[1,1];s.push.apply(s,o(i[1],e.languages.javascript,"javascript")),i.splice.apply(i,s)}return new e.Token("interpolation",i,r.alias,n)}function l(n,t,r){var a=e.tokenize(n,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),s=0,l={},g=o(a.map((function(e){if("string"==typeof e)return e;for(var t,a=e.content;-1!==n.indexOf((i=s++,t="___"+r.toUpperCase()+"_"+i+"___")););return l[t]=a,t;var i})).join(""),t,r),u=Object.keys(l);return s=0,function e(n){for(var t=0;t<n.length;t++){if(s>=u.length)return;var r=n[t];if("string"==typeof r||"string"==typeof r.content){var a=u[s],i="string"==typeof r?r:r.content,o=i.indexOf(a);if(-1!==o){++s;var g=i.substring(0,o),c=p(l[a]),f=i.substring(o+a.length),y=[];if(g&&y.push(g),y.push(c),f){var v=[f];e(v),y.push.apply(y,v)}"string"==typeof r?(n.splice.apply(n,[t,1].concat(y)),t+=y.length-1):r.content=y}}else{var d=r.content;Array.isArray(d)?e(d):e([d])}}}(g),new e.Token(r,g,"language-"+r,n)}e.languages.javascript["template-string"]=[s("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),s("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),s("svg","\\bsvg"),s("markdown","\\b(?:md|markdown)"),s("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),n].filter(Boolean);var g={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function u(e){return"string"==typeof e?e:Array.isArray(e)?e.map(u).join(""):u(e.content)}e.hooks.add("after-tokenize",(function(n){n.language in g&&function n(t){for(var r=0,a=t.length;r<a;r++){var i=t[r];if("string"!=typeof i){var s=i.content;if(Array.isArray(s))if("template-string"===i.type){var o=s[1];if(3===s.length&&"string"!=typeof o&&"embedded-code"===o.type){var p=u(o),g=o.alias,c=Array.isArray(g)?g[0]:g,f=e.languages[c];if(!f)continue;s[1]=l(p,f,c)}}else n(s);else"string"!=typeof s&&n([s])}}}(n.tokens)}))}(Prism)}}]);
//# sourceMappingURL=210.b7d6b8ae.chunk.js.map