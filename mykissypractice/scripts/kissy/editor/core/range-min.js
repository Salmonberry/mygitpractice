KISSY.Editor.add("range",function(p){function y(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=j;this.collapsed=n;this.document=a}function F(a){var b=a[0].nodeType!=h.NODE_TEXT&&a._4e_name()in z.$removeEmpty,c=!r.trim(a[0].nodeValue),a=!!a.parent().attr("_ke_bookmark");return b||c||a}function x(a){return!G(a)&&!H(a)}function C(a){var b=q,c=w.bookmark(n);return function(e){if(c(e))return n;if(e[0].nodeType==h.NODE_TEXT){if(r.trim(e[0].nodeValue).length)return q}else if(e[0].nodeType==
h.NODE_ELEMENT&&!I[e._4e_name()])if(!a&&!A.ie&&"br"==e._4e_name()&&!b)b=n;else return q;return n}}function J(a,b){function c(a){return a&&"span"==a.nodeName&&a.getAttribute("_ke_bookmark")}return function(e){var d,f;d=e&&!e.nodeName&&(f=e.parentNode)&&c(f);d=a?d:d||c(e);return b^d}}function K(a){return function(b){b=(b=b[0]||b)&&b.nodeType==h.NODE_TEXT&&!r.trim(b.nodeValue);return a^b}}p.RANGE={POSITION_AFTER_START:1,POSITION_BEFORE_END:2,POSITION_BEFORE_START:3,POSITION_AFTER_END:4,ENLARGE_ELEMENT:1,
ENLARGE_BLOCK_CONTENTS:2,ENLARGE_LIST_ITEM_CONTENTS:3,START:1,END:2,SHRINK_ELEMENT:1,SHRINK_TEXT:2};p.RANGE=p.RANGE;var n=!0,q=!1,j=null,r=KISSY,h=p.NODE,g=p.RANGE,L=p.POSITION,w=p.Walker,t=r.DOM,D=p.Utils.getByAddress,A=r.UA,z=p.XHTML_DTD,u=p.ElementPath,s=r.Node,E={area:1,base:1,br:1,col:1,hr:1,img:1,input:1,link:1,meta:1,param:1};y.prototype.toString=function(){var a=[];a.push((this.startContainer[0].id||this.startContainer[0].nodeName)+":"+this.startOffset);a.push((this.endContainer[0].id||this.endContainer[0].nodeName)+
":"+this.endOffset);return a.join("<br/>")};r.augment(y,{updateCollapsed:function(){this.collapsed=this.startContainer&&this.endContainer&&t._4e_equals(this.startContainer,this.endContainer)&&this.startOffset==this.endOffset},optimize:function(){var a=this.startContainer,b=this.startOffset;a[0].nodeType!=h.NODE_ELEMENT&&(b?b>=a[0].nodeValue.length&&this.setStartAfter(a):this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a[0].nodeType!=h.NODE_ELEMENT&&(b?b>=a[0].nodeValue.length&&this.setEndAfter(a):
this.setEndBefore(a))},setStartAfter:function(a){this.setStart(a.parent(),a._4e_index()+1)},setStartBefore:function(a){this.setStart(a.parent(),a._4e_index())},setEndAfter:function(a){this.setEnd(a.parent(),a._4e_index()+1)},setEndBefore:function(a){this.setEnd(a.parent(),a._4e_index())},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a&&"span"==a._4e_name()&&a.attr("_ke_bookmark")&&this.setStartAt(a,g.POSITION_BEFORE_START);b&&"span"==b._4e_name()&&b.attr("_ke_bookmark")&&
this.setEndAt(b,g.POSITION_AFTER_END)},setStart:function(a,b){a[0].nodeType==h.NODE_ELEMENT&&E[a._4e_name()]&&(a=a.parent(),b=a._4e_index());this.startContainer=a;this.startOffset=b;this.endContainer||(this.endContainer=a,this.endOffset=b);this.updateCollapsed()},setEnd:function(a,b){a[0].nodeType==h.NODE_ELEMENT&&E[a._4e_name()]&&(a=a.parent(),b=a._4e_index()+1);this.endContainer=a;this.endOffset=b;this.startContainer||(this.startContainer=a,this.startOffset=b);this.updateCollapsed()},setStartAt:function(a,
b){switch(b){case g.POSITION_AFTER_START:this.setStart(a,0);break;case g.POSITION_BEFORE_END:a[0].nodeType==h.NODE_TEXT?this.setStart(a,a[0].nodeValue.length):this.setStart(a,a[0].childNodes.length);break;case g.POSITION_BEFORE_START:this.setStartBefore(a);break;case g.POSITION_AFTER_END:this.setStartAfter(a)}this.updateCollapsed()},setEndAt:function(a,b){switch(b){case g.POSITION_AFTER_START:this.setEnd(a,0);break;case g.POSITION_BEFORE_END:a[0].nodeType==h.NODE_TEXT?this.setEnd(a,a[0].nodeValue.length):
this.setEnd(a,a[0].childNodes.length);break;case g.POSITION_BEFORE_START:this.setEndBefore(a);break;case g.POSITION_AFTER_END:this.setEndAfter(a)}this.updateCollapsed()},execContentsAction:function(a,b){var c=this.startContainer,e=this.endContainer,d=this.startOffset,f=this.endOffset,g,l=this.document,i;this.optimizeBookmark();e[0].nodeType==h.NODE_TEXT?e=e._4e_splitText(f):0<e[0].childNodes.length&&(f>=e[0].childNodes.length?(e=new s(e[0].appendChild(l.createTextNode(""))),i=n):e=new s(e[0].childNodes[f]));
c[0].nodeType==h.NODE_TEXT?(c._4e_splitText(d),c._4e_equals(e)&&(e=new s(c[0].nextSibling))):d?d>=c[0].childNodes.length?(g=new s(l.createTextNode("")),c.append(g),c=g,g=n):c=new s(c[0].childNodes[d].previousSibling):(g=new s(l.createTextNode("")),c.prepend(g),c=g,g=n);var d=c._4e_parents(),f=e._4e_parents(),k,j,o;for(k=0;k<d.length&&!(j=d[k],o=f[k],!j._4e_equals(o));k++);for(var l=b,m,q,r,p=k;p<d.length;p++){m=d[p];q=l&&!m._4e_equals(c)?l.appendChild(m._4e_clone()[0]):null;for(m=m[0].nextSibling;m&&
!t._4e_equals(f[p],m)&&!t._4e_equals(e,m);)r=m.nextSibling,2==a?l.appendChild(m.cloneNode(n)):(t._4e_remove(m),1==a&&l.appendChild(m)),m=r;q&&(l=q)}for(l=b;k<f.length;k++){m=f[k];q=l&&0<a&&!m._4e_equals(e)?l.appendChild(m._4e_clone()[0]):null;if(!d[k]||!m.parent()._4e_equals(d[k].parent()))for(m=m[0].previousSibling;m&&!t._4e_equals(d[k],m)&&!t._4e_equals(c,m);)r=m.previousSibling,2==a?l.insertBefore(m.cloneNode(n),l.firstChild):(t._4e_remove(m),1==a&&l.insertBefore(m,l.firstChild)),m=r;q&&(l=q)}if(2==
a){if(o=this.startContainer[0],o.nodeType==h.NODE_TEXT&&o.nextSibling&&o.nextSibling.nodeType==h.NODE_TEXT&&(o.data+=o.nextSibling.data,o.parentNode.removeChild(o.nextSibling)),o=this.endContainer[0],o.nodeType==h.NODE_TEXT&&o.nextSibling&&o.nextSibling.nodeType==h.NODE_TEXT)o.data+=o.nextSibling.data,o.parentNode.removeChild(o.nextSibling)}else{if(j&&o&&(!c.parent()._4e_equals(j.parent())||!e.parent()._4e_equals(o.parent())))j=o._4e_index(),g&&o.parent()._4e_equals(c.parent())&&j--,this.setStart(o.parent(),
j);this.collapse(n)}g&&c._4e_remove();i&&e[0].parentNode&&e._4e_remove()},collapse:function(a){a?(this.endContainer=this.startContainer,this.endOffset=this.startOffset):(this.startContainer=this.endContainer,this.startOffset=this.endOffset);this.collapsed=n},clone:function(){var a=new y(this.document);a.startContainer=this.startContainer;a.startOffset=this.startOffset;a.endContainer=this.endContainer;a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},getEnclosedNode:function(){var a=
this.clone();a.optimize();if(a.startContainer[0].nodeType!=h.NODE_ELEMENT||a.endContainer[0].nodeType!=h.NODE_ELEMENT)return j;var b=new p.Walker(a),c=J(n,void 0),e=K(n);a.evaluator=function(a){return e(a)&&c(a)};a=b.next();b.reset();b=b.previous();return a&&a._4e_equals(b)?a:j},shrink:function(a,b){if(!this.collapsed){var a=a||g.SHRINK_TEXT,c=this.clone(),e=this.startContainer,d=this.endContainer,f=this.startOffset,j=this.endOffset,l=1,i=1;e&&e[0].nodeType==h.NODE_TEXT&&(f?f>=e[0].nodeValue.length?
c.setStartAfter(e):(c.setStartBefore(e),l=0):c.setStartBefore(e));d&&d[0].nodeType==h.NODE_TEXT&&(j?j>=d[0].nodeValue.length?c.setEndAfter(d):(c.setEndAfter(d),i=0):c.setEndBefore(d));c=new w(c);c.evaluator=function(b){b=b[0]||b;return b.nodeType==(a==g.SHRINK_ELEMENT?h.NODE_ELEMENT:h.NODE_TEXT)};var k;c.guard=function(b,c){b=b[0]||b;if(a==g.SHRINK_ELEMENT&&b.nodeType==h.NODE_TEXT||c&&b==k)return q;!c&&b.nodeType==h.NODE_ELEMENT&&(k=b);return n};l&&(e=c[a==g.SHRINK_ELEMENT?"lastForward":"next"]())&&
this.setStartAt(e,b?g.POSITION_AFTER_START:g.POSITION_BEFORE_START);i&&(c.reset(),(c=c[a==g.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(c,b?g.POSITION_BEFORE_END:g.POSITION_AFTER_END));return!(!l&&!i)}},createBookmark2:function(a){var b=this.startContainer,c=this.endContainer,e=this.startOffset,d=this.endOffset,f,g;if(!b||!c)return{start:0,end:0};if(a){if(b[0].nodeType==h.NODE_ELEMENT&&(f=new s(b[0].childNodes[e]))&&f[0]&&f[0].nodeType==h.NODE_TEXT&&0<e&&f[0].previousSibling.nodeType==
h.NODE_TEXT)b=f,e=0;for(;b[0].nodeType==h.NODE_TEXT&&(g=b._4e_previous())&&g[0].nodeType==h.NODE_TEXT;)b=g,e+=g[0].nodeValue.length;if(!this.collapsed){if(c[0].nodeType==h.NODE_ELEMENT&&(f=new s(c[0].childNodes[d]))&&f[0]&&f[0].nodeType==h.NODE_TEXT&&0<d&&f[0].previousSibling.nodeType==h.NODE_TEXT)c=f,d=0;for(;c[0].nodeType==h.NODE_TEXT&&(g=c._4e_previous())&&g[0].nodeType==h.NODE_TEXT;)c=g,d+=g[0].nodeValue.length}}return{start:b._4e_address(a),end:this.collapsed?j:c._4e_address(a),startOffset:e,
endOffset:d,normalized:a,is2:n}},createBookmark:function(a){var b,c,e,d,f=this.collapsed;b=new s("<span>",j,this.document);b.attr("_ke_bookmark",1);b.css("display","none");b.html("&nbsp;");a&&(e=r.guid("ke_bm_"),b.attr("id",e+"S"));f||(c=b._4e_clone(),c.html("&nbsp;"),a&&c.attr("id",e+"E"),d=this.clone(),d.collapse(),d.insertNode(c));d=this.clone();d.collapse(n);d.insertNode(b);c?(this.setStartAfter(b),this.setEndBefore(c)):this.moveToPosition(b,g.POSITION_AFTER_END);return{startNode:a?e+"S":b,endNode:a?
e+"E":c,serializable:a,collapsed:f}},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(n)},trim:function(a,b){var c=this.startContainer,e=this.startOffset,d=this.collapsed;if((!a||d)&&c[0]&&c[0].nodeType==h.NODE_TEXT){if(e)if(e>=c[0].nodeValue.length)e=c._4e_index()+1,c=c.parent();else{var f=c._4e_splitText(e),e=c._4e_index()+1,c=c.parent();t._4e_equals(this.startContainer,this.endContainer)?this.setEnd(f,this.endOffset-this.startOffset):t._4e_equals(c,this.endContainer)&&(this.endOffset+=
1)}else e=c._4e_index(),c=c.parent();this.setStart(c,e);if(d){this.collapse(n);return}}c=this.endContainer;e=this.endOffset;!b&&!d&&c[0]&&c[0].nodeType==h.NODE_TEXT&&(e?(e>=c.nodeValue.length||c._4e_splitText(e),e=c._4e_index()+1):e=c._4e_index(),c=c.parent(),this.setEnd(c,e))},insertNode:function(a){this.optimizeBookmark();this.trim(q,n);var b=this.startContainer;b[0].insertBefore(a[0]||a,b[0].childNodes[this.startOffset]||null);t._4e_equals(a.parent(),this.endContainer)&&this.endOffset++;this.setStartBefore(a)},
moveToBookmark:function(a){if(a.is2){var b=D(this.document,a.start,a.normalized),c=a.startOffset,e=a.end&&D(this.document,a.end,a.normalized),a=a.endOffset;this.setStart(b,c);e?this.setEnd(e,a):this.collapse(n)}else b=(c=a.serializable)?r.one("#"+a.startNode,this.document):a.startNode,a=c?r.one("#"+a.endNode,this.document):a.endNode,this.setStartBefore(b),b._4e_remove(),a&&a[0]?(this.setEndBefore(a),a._4e_remove()):this.collapse(n)},getCommonAncestor:function(a,b){var c=this.startContainer,e=this.endContainer,
c=t._4e_equals(c,e)?a&&c[0].nodeType==h.NODE_ELEMENT&&this.startOffset==this.endOffset-1?new s(c[0].childNodes[this.startOffset]):c:c._4e_commonAncestor(e);return b&&c[0].nodeType==h.NODE_TEXT?c.parent():c},enlarge:function(a){switch(a){case g.ENLARGE_ELEMENT:if(this.collapsed)break;var a=this.getCommonAncestor(),b=new s(this.document.body),c,e,d,f,p,l=q,i,k;i=this.startContainer;k=this.startOffset;if(i[0].nodeType==h.NODE_TEXT){if(k&&(i=!r.trim(i[0].nodeValue.substring(0,k)).length&&i,l=!!i),i&&
!(f=i[0].previousSibling))d=i.parent()}else k&&(f=i[0].childNodes[k-1]||i[0].lastChild),f||(d=i);for(;d||f;){if(d&&!f){!p&&t._4e_equals(d,a)&&(p=n);if(!b.contains(d))break;if(!l||"inline"!=d.css("display"))l=q,p?c=d:this.setStartBefore(d);f=d[0].previousSibling}for(;f;){i=q;if(f.nodeType==h.NODE_TEXT)k=f.nodeValue,/[^\s\ufeff]/.test(k)&&(f=j),i=/[\s\ufeff]$/.test(k);else if((0<f.offsetWidth||"br"==t._4e_name(f))&&!f.getAttribute("_ke_bookmark"))if(l&&z.$removeEmpty[f.nodeName.toLowerCase()]){k=t.text(f);
if(/[^\s\ufeff]/.test(k))f=j;else for(var u=f.all||f.getElementsByTagName("*"),o=0,m;m=u[o++];)if(!z.$removeEmpty[m.nodeName.toLowerCase()]){f=j;break}f&&(i=!!k.length)}else f=j;i&&(l?p?c=d:d&&this.setStartBefore(d):l=n);if(f){i=f.previousSibling;if(!d&&!i){d=new s(f);f=j;break}f=i}else d=j}d&&(d=d.parent())}i=this.endContainer;k=this.endOffset;d=f=j;p=l=q;if(i[0].nodeType==h.NODE_TEXT){if(i=!r.trim(i[0].nodeValue.substring(k)).length&&i,l=!(i&&i[0].nodeValue.length),i&&!(f=i[0].nextSibling))d=i.parent()}else(f=
i[0].childNodes[k])||(d=i);for(;d||f;){if(d&&!f){!p&&t._4e_equals(d,a)&&(p=n);if(!b.contains(d))break;if(!l||"inline"!=d.css("display"))l=q,p?e=d:d&&this.setEndAfter(d);f=d[0].nextSibling}for(;f;){i=q;if(f.nodeType==h.NODE_TEXT)k=f.nodeValue,/[^\s\ufeff]/.test(k)&&(f=j),i=/^[\s\ufeff]/.test(k);else if((0<f.offsetWidth||"br"==t._4e_name(f))&&!f.getAttribute("_ke_bookmark"))if(l&&z.$removeEmpty[f.nodeName.toLowerCase()]){k=t.text(f);if(/[^\s\ufeff]/.test(k))f=j;else{u=f.all||f.getElementsByTagName("*");
for(o=0;m=u[o++];)if(!z.$removeEmpty[m.nodeName.toLowerCase()]){f=j;break}}f&&(i=!!k.length)}else f=j;i&&l&&(p?e=d:this.setEndAfter(d));if(f){i=f.nextSibling;if(!d&&!i){d=new s(f);f=j;break}f=i}else d=j}d&&(d=d.parent())}c&&e&&(a=c.contains(e)?e:c,this.setStartBefore(a),this.setEndAfter(a));break;case g.ENLARGE_BLOCK_CONTENTS:case g.ENLARGE_LIST_ITEM_CONTENTS:d=new y(this.document);b=new s(this.document.body);d.setStartAt(b,g.POSITION_AFTER_START);d.setEnd(this.startContainer,this.startOffset);d=
new w(d);var v,x,A=w.blockBoundary(a==g.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:j),B=function(a){var b=A(a);b||(v=a);return b};c=function(a){var b=B(a);!b&&a[0]&&"br"==a._4e_name()&&(x=a);return b};d.guard=B;d=d.lastBackward();v=v||b;this.setStartAt(v,"br"!=v._4e_name()&&(!d&&this.checkStartOfBlock()||d&&v.contains(d))?g.POSITION_AFTER_START:g.POSITION_AFTER_END);d=this.clone();d.collapse();d.setEndAt(b,g.POSITION_BEFORE_END);d=new w(d);d.guard=a==g.ENLARGE_LIST_ITEM_CONTENTS?c:B;v=j;d=d.lastForward();
v=v||b;this.setEndAt(v,!d&&this.checkEndOfBlock()||d&&v.contains(d)?g.POSITION_BEFORE_END:g.POSITION_BEFORE_START);x&&this.setEndAfter(x)}},checkStartOfBlock:function(){var a=this.startContainer,b=this.startOffset;if(b&&a[0].nodeType==h.NODE_TEXT&&r.trim(a[0].nodeValue.substring(0,b)).length)return q;this.trim();a=new u(this.startContainer);b=this.clone();b.collapse(n);b.setStartAt(a.block||a.blockLimit,g.POSITION_AFTER_START);a=new w(b);a.evaluator=C(n);return a.checkBackward()},checkEndOfBlock:function(){var a=
this.endContainer,b=this.endOffset;if(a[0].nodeType==h.NODE_TEXT&&r.trim(a[0].nodeValue.substring(b)).length)return q;this.trim();a=new u(this.endContainer);b=this.clone();b.collapse(q);b.setEndAt(a.block||a.blockLimit,g.POSITION_BEFORE_END);a=new w(b);a.evaluator=C(q);return a.checkForward()},deleteContents:function(){this.collapsed||this.execContentsAction(0)},extractContents:function(){var a=this.document.createDocumentFragment();this.collapsed||this.execContentsAction(1,a);return a},checkBoundaryOfElement:function(a,
b){var c=this.clone();c[b==g.START?"setStartAt":"setEndAt"](a,b==g.START?g.POSITION_AFTER_START:g.POSITION_BEFORE_END);c=new w(c);c.evaluator=F;return c[b==g.START?"checkBackward":"checkForward"]()},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,e=this.endOffset,d;if(a[0].nodeType==h.NODE_ELEMENT)if(d=a[0].childNodes.length,d>c)a=new s(a[0].childNodes[c]);else if(1>d)a=a._4e_previousSourceNode();else{for(a=a[0];a.lastChild;)a=a.lastChild;a=new s(a);a=
a._4e_nextSourceNode()||a}if(b[0].nodeType==h.NODE_ELEMENT)if(d=b[0].childNodes.length,d>e)b=(new s(b[0].childNodes[e]))._4e_previousSourceNode(n);else if(1>d)b=b._4e_previousSourceNode();else{for(b=b[0];b.lastChild;)b=b.lastChild;b=new s(b)}a._4e_position(b)&L.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},fixBlock:function(a,b){var c=this.createBookmark(),e=new s(this.document.createElement(b));this.collapse(a);this.enlarge(g.ENLARGE_BLOCK_CONTENTS);e[0].appendChild(this.extractContents());
e._4e_trim();A.ie||e._4e_appendBogus();this.insertNode(e);this.moveToBookmark(c);return e},splitBlock:function(a){var b=new u(this.startContainer),c=new u(this.endContainer),e=b.block,d=c.block,f=j;if(!b.blockLimit._4e_equals(c.blockLimit))return j;"br"!=a&&(e||(e=this.fixBlock(n,a),d=(new u(this.endContainer)).block),d||(d=this.fixBlock(q,a)));a=e&&this.checkStartOfBlock();b=d&&this.checkEndOfBlock();this.deleteContents();e&&t._4e_equals(e,d)&&(b?(f=new u(this.startContainer),this.moveToPosition(d,
g.POSITION_AFTER_END),d=j):a?(f=new u(this.startContainer),this.moveToPosition(e,g.POSITION_BEFORE_START),e=j):(d=this.splitElement(e),!A.ie&&!r.inArray(e._4e_name(),["ul","ol"])&&e._4e_appendBogus()));return{previousBlock:e,nextBlock:d,wasStartOfBlock:a,wasEndOfBlock:b,elementPath:f}},splitElement:function(a){if(!this.collapsed)return j;this.setEndAt(a,g.POSITION_BEFORE_END);var b=this.extractContents(),c=a._4e_clone(q);c[0].appendChild(b);c.insertAfter(a);this.moveToPosition(a,g.POSITION_AFTER_END);
return c},moveToElementEditablePosition:function(a,b){var c,e=p.XHTML_DTD;if(e.$empty[a._4e_name()])return q;for(;a&&a[0].nodeType==h.NODE_ELEMENT;){if(c=a._4e_isEditable())this.moveToPosition(a,b?g.POSITION_BEFORE_END:g.POSITION_AFTER_START);else if(e.$inline[a._4e_name()])return this.moveToPosition(a,b?g.POSITION_AFTER_END:g.POSITION_BEFORE_START),n;if((a=e.$empty[a._4e_name()]?a[b?"_4e_previous":"_4e_next"](x):b?a._4e_last(x):a._4e_first(x))&&a[0].nodeType==h.NODE_TEXT)return this.moveToPosition(a,
b?g.POSITION_AFTER_END:g.POSITION_BEFORE_START),n}return c},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a[0].nodeType==h.NODE_TEXT?a[0].nodeValue.length:a[0].childNodes.length)}});var I={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},G=new w.whitespaces,H=new w.bookmark;p.Range=y});