(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1537:function(t,n){t.exports={content:["section",["p","Mention component. Deprecated, please use ",["a",{title:null,href:"/components/mentions"},"Mentions"]," instead."],["h2","Why deprecated?"],["div",{class:"ant-alert ant-alert-error ant-alert-no-icon"},"\nMention use\n",["a",{href:"https://www.npmjs.com/package/draft-js",target:"_blank",rel:"noopener noreferrer"},"Draft.js"],"\nto measure tips position, which use nearly 11.6% package size. We hope to reduce bundle size by using lightweight solution to handle this.\n"]],meta:{category:"Components",type:"Deprecated",title:"Mention (Deprecated)",filename:"components/mention/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Why-deprecated?",title:"Why deprecated?"},"Why deprecated?"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Mention</span>\n  <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span>\n  <span class="token attr-name">suggestions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'afc163\'</span><span class="token punctuation">,</span> <span class="token string">\'benjycui\'</span><span class="token punctuation">,</span> <span class="token string">\'yiminghe\'</span><span class="token punctuation">,</span> <span class="token string">\'jljsj33\'</span><span class="token punctuation">,</span> <span class="token string">\'dqaria\'</span><span class="token punctuation">,</span> <span class="token string">\'RaoHai\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span>'},["code","<Mention\n  onChange={onChange}\n  suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}\n/>"]],["h3","Mention API"],["table",["thead",["tr",["th","API"],["th","Description"],["th","Type"],["th","Version"]]],["tbody",["tr",["td","getMentions"],["td","get mentioned people in current contentState"],["td","Function(ContentState: contentState): string","[","]"],["td"]],["tr",["td","toContentState"],["td","convert string to ContentState"],["td","Function(value: string): ContentState"],["td"]],["tr",["td","toString"],["td","convert ContentState to string"],["td","Function(contentState: ContentState): string"],["td"]]]],["h3","Mention"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autoFocus"],["td","get focus when component mounted"],["td","boolean"],["td","false"],["td"]],["tr",["td","defaultValue"],["td","default value"],["td","ContentState, you can use ",["code","Mention.toContentState"]," to convert text to ",["code","ContentState"]],["td","null"],["td"]],["tr",["td","defaultSuggestions"],["td","default suggestion content"],["td","Array","<","string","|","Mention.Nav>"],["td","[","]"],["td","3.12.0"]],["tr",["td","disabled"],["td","Tell if the input is disabled."],["td","boolean"],["td","false"],["td"]],["tr",["td","getSuggestionContainer"],["td","rendered to the root of the menu. Default rendered to the body dom. If gets any problem of the menu while scrolling. Try to make the root the dom scrolled, and make it position relative."],["td","function"],["td","() => document.body"],["td"]],["tr",["td","loading"],["td","loading mode"],["td","boolean"],["td","false"],["td"]],["tr",["td","multiLines"],["td","multilines mode"],["td","boolean"],["td","false"],["td"]],["tr",["td","notFoundContent"],["td","suggestion when suggestions empty"],["td","string"],["td","'No matches found'"],["td"]],["tr",["td","placeholder"],["td","placeholder of input"],["td","string"],["td","null"],["td"]],["tr",["td","placement"],["td","The position of the suggestion relative to the target, which can be one of ",["code","top"]," and ",["code","bottom"]],["td","string"],["td","'bottom'."],["td"]],["tr",["td","prefix"],["td","character which will trigger Mention to show mention list"],["td","string or Array","<","string>"],["td","'@'"],["td"]],["tr",["td","readOnly"],["td","Tell if the input is readonly."],["td","boolean"],["td","false"],["td"]],["tr",["td","suggestions"],["td","suggestion content"],["td","Array","<","string","|","Mention.Nav>"],["td","[","]"],["td"]],["tr",["td","suggestionStyle"],["td","style of suggestion container"],["td","object"],["td","{}"],["td"]],["tr",["td","value"],["td","core state of mention"],["td","ContentState"],["td","null"],["td"]],["tr",["td","onBlur"],["td","Callback function called when mention component blur"],["td","function(e)"],["td","null"],["td"]],["tr",["td","onChange"],["td","Callback function called when content of input changes"],["td","function(contentState: ContentState)"],["td","null"],["td"]],["tr",["td","onFocus"],["td","Callback function called when mention component get focus"],["td","function"],["td","null"],["td"]],["tr",["td","onSearchChange"],["td","Callback function called when search content changes"],["td","function(value:string, trigger: string)"],["td","[","]"],["td"]],["tr",["td","onSelect"],["td","Callback function called when select from suggestions"],["td","function(suggestion: string, data?: any)"],["td","null"],["td"]]]],["h3","Mention methods"],["table",["thead",["tr",["th","Name"],["th","Description"],["th","Version"]]],["tbody",["tr",["td","blur()"],["td","remove focus"],["td"]],["tr",["td","focus()"],["td","get focus"],["td"]]]],["h3","Nav"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","children"],["td","suggestion content"],["td","object"],["td","{}"],["td"]],["tr",["td","value"],["td","value of suggestion, the value will insert into input filed while selected"],["td","string"],["td",'""'],["td"]]]]]}}}]);