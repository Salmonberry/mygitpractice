KISSY.Editor.add("xiami-music",function(a){var e=KISSY.Editor,b=a.htmlDataProcessor,g=b&&b.dataFilter;g&&g.addRules({elements:{object:function(a){var d=a.attributes,f=a.attributes.title,i;if(!d.classid||!(""+d.classid).toLowerCase()){for(d=0;d<a.children.length;d++)if(i=a.children[d],"embed"==i.name){if(!e.Utils.isFlashEmbed(i))break;if(/xiami\.com/i.test(i.attributes.src))return b.createFakeParserElement(a,"ke_xiami","xiami-music",!0,{title:f})}return null}for(d=0;d<a.children.length;d++)if(i=a.children[d],
"param"==i.name&&"movie"==i.attributes.name.toLowerCase()&&/xiami\.com/i.test(i.attributes.value))return b.createFakeParserElement(a,"ke_xiami","xiami-music",!0,{title:f})},embed:function(a){if(!e.Utils.isFlashEmbed(a))return null;if(/xiami\.com/i.test(a.attributes.src))return b.createFakeParserElement(a,"ke_xiami","xiami-music",!0,{title:a.attributes.title})}}},4);a.addPlugin("xiami-music",function(){var b=a.addButton("xiami-music",{contentCls:"ke-toolbar-music",title:"\u63d2\u5165\u867e\u7c73\u97f3\u4e50",mode:e.WYSIWYG_MODE,
loading:!0});e.use("xiami-music/support",function(){var d=new e.XiamiMusic(a);b.reload({offClick:function(){d.show()},destroy:function(){d.destroy()}})});this.destroy=function(){b.destroy()}})},{attach:!1,requires:["fakeobjects"]});
KISSY.Editor.add("xiami-music/support",function(){function a(c){a.superclass.constructor.apply(this,arguments);if(!c.cfg.disableObjectResizing)d.on(c.document.body,g.ie?"resizestart":"resize",function(c){(new b.Node(c.target)).hasClass(h)&&c.preventDefault()})}function e(c){return"img"===c._4e_name()&&!!c.hasClass(h)&&c}var b=KISSY,g=b.UA,h="ke_xiami",d=b.Event,f=b.Editor;b.extend(a,f.Flash,{_config:function(){this._cls=h;this._type="xiami-music";this._contextMenu=i;this._flashRules=["img."+h]},_updateTip:function(c,
a){var b=this.editor.restoreRealElement(a);b&&(c.html(a.attr("title")),c.attr("href",this._getFlashUrl(b)))}});var i={"\u867e\u7c73\u5c5e\u6027":function(c){var a=c.editor.getSelection(),a=a&&a.getStartElement();(a=e(a))&&c.show(null,a)}};f.Flash.registerBubble("xiami-music","\u5728\u65b0\u7a97\u53e3\u67e5\u770b",e);f.XiamiMusic=a;f.add({"xiami-music/dialog":{attach:!1,charset:"utf-8",fullpath:f.Utils.debugUrl("../biz/ext/plugins/music/dialog/plugin.js")}});f.add({"xiami-music/dialog/support":{attach:!1,charset:"utf-8",requires:["flash/dialog/support"],
fullpath:f.Utils.debugUrl("../biz/ext/plugins/music/dialog/support/plugin.js")}})},{attach:!1,requires:["flash/support"]});KISSY.Editor.add("checkbox-sourcearea",function(a){var e=KISSY.Editor;1.92>KISSY.UA.gecko||e.use("checkbox-sourcearea/support",function(){var b=new e.CheckboxSourceArea(a);a.on("destroy",function(){b.destroy()})})},{attach:!1});
KISSY.Editor.add("checkbox-sourcearea/support",function(){function a(a){this.editor=a;this._init()}var e=KISSY,b=e.Editor,g=e.Node,h=b.SOURCE_MODE,d=b.WYSIWYG_MODE;e.augment(a,{_init:function(){var a=this.editor,b=a.statusDiv;this.holder=(new g("<span style='zoom:1;display:inline-block;height:22px;line-height:22px;'><input style='margin:0 5px;vertical-align:middle;' type='checkbox' /><span style='vertical-align:middle;'>\u7f16\u8f91\u6e90\u4ee3\u7801</span></span>")).appendTo(b);var c=this.el=this.holder.one("input");c.on("click",
this._check,this);a.on("sourcemode",function(){c[0].checked=!0});a.on("wysiwygmode",function(){c[0].checked=!1})},_check:function(){this.el[0].checked?this._show():this._hide()},_show:function(){b.SourceAreaSupport.exec(this.editor,h)},_hide:function(){b.SourceAreaSupport.exec(this.editor,d)},destroy:function(){this.el.detach();this.holder.remove()}});b.CheckboxSourceArea=a},{attach:!1,requires:["sourcearea/support"]});
KISSY.Editor.add("multi-upload",function(a){var e=KISSY.Editor;e.Env.mods["multi-upload/dialog"]||(e.add({"multi-upload/dialog":{attach:!1,charset:"utf-8",fullpath:e.Utils.debugUrl("../biz/ext/plugins/upload/dialog/plugin.js")}}),e.add({"multi-upload/dialog/support":{attach:!1,charset:"utf-8",requires:["progressbar","localstorage","overlay"],fullpath:e.Utils.debugUrl("../biz/ext/plugins/upload/dialog/support/plugin.js")}}));a.addPlugin("multi-upload",function(){var b=a.addButton("multi-upload",{contentCls:"ke-toolbar-mul-image",
title:"\u6279\u91cf\u63d2\u56fe",mode:e.WYSIWYG_MODE,offClick:function(){this.editor.showDialog("multi-upload/dialog")},destroy:function(){this.editor.destroyDialog("multi-upload/dialog")}});this.destroy=function(){b.destroy()}})},{attach:!1});
KISSY.Editor.add("video",function(a){function e(a){for(var c=0;c<d.length;c++){var b=d[c];if(b.reg.test(a))return b}}var b=KISSY.Editor,g=a.htmlDataProcessor,h=g&&g.dataFilter,d=[],f=a.cfg.pluginConfig;f.video=f.video||{};f=f.video;f.providers&&d.push.apply(d,f.providers);f.getProvider=e;h&&h.addRules({elements:{object:function(a){var c=a.attributes;if(!c.classid||!(""+c.classid).toLowerCase()){for(c=0;c<a.children.length;c++)if("embed"==a.children[c].name){if(!b.Utils.isFlashEmbed(a.children[c]))break;
if(e(a.children[c].attributes.src))return g.createFakeParserElement(a,"ke_video","video",!0)}return null}for(c=0;c<a.children.length;c++){var d=a.children[c];if("param"==d.name&&"movie"==d.attributes.name.toLowerCase()&&e(d.attributes.value))return g.createFakeParserElement(a,"ke_video","video",!0)}},embed:function(a){if(!b.Utils.isFlashEmbed(a))return null;if(e(a.attributes.src))return g.createFakeParserElement(a,"ke_video","video",!0)}}},4);a.addPlugin("video",function(){var d=a.addButton("video",
{contentCls:"ke-toolbar-video",title:"\u63d2\u5165\u89c6\u9891",mode:b.WYSIWYG_MODE,loading:!0});b.use("video/support",function(){var c=new b.Video(a);d.reload({offClick:function(){c.show()},destroy:function(){c.destroy()}})});this.destroy=function(){d.destroy()}})},{attach:!1,requires:["fakeobjects"]});
KISSY.Editor.add("video/support",function(){function a(c){a.superclass.constructor.apply(this,arguments)}function e(a){return"img"===a._4e_name()&&!!a.hasClass(d)&&a}var b=KISSY,g=b.Editor,h=g.Flash,d="ke_video",f=["img."+d];a.CLS_VIDEO=d;a.TYPE_VIDEO="video";b.extend(a,h,{_config:function(){this._cls=d;this._type="video";this._contextMenu=i;this._flashRules=f}});h.registerBubble("video","\u5728\u65b0\u7a97\u53e3\u67e5\u770b",e);g.Video=a;var i={"\u89c6\u9891\u5c5e\u6027":function(a){var b=a.editor.getSelection();(b=(b=b&&b.getStartElement())&&e(b))&&
a.show(null,b)}};g.add({"video/dialog":{attach:!1,charset:"utf-8",fullpath:g.Utils.debugUrl("../biz/ext/plugins/video/dialog/plugin.js")}});g.add({"video/dialog/support":{attach:!1,charset:"utf-8",requires:["flash/dialog/support"],fullpath:g.Utils.debugUrl("../biz/ext/plugins/video/dialog/support/plugin.js")}})},{attach:!1,requires:["flash/support"]});
