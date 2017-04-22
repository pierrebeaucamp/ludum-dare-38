/** @constructor */
var i$VM = function() {
  this.valstack = {};
  this.valstack_top = 0;
  this.valstack_base = 0;

  this.ret = null;

  this.callstack = [];
}

var i$vm;
var i$valstack;
var i$valstack_top;
var i$valstack_base;
var i$ret;
var i$callstack;

var i$Int = {};
var i$String = {};
var i$Integer = {};
var i$Float = {};
var i$Char = {};
var i$Ptr = {};
var i$Forgot = {};

/** @constructor */
var i$CON = function(tag,args,app,ev) {
  this.tag = tag;
  this.args = args;
  this.app = app;
  this.ev = ev;
}

/** @constructor */
var i$POINTER = function(addr) {
  this.addr = addr;
}

var i$SCHED = function(vm) {
  i$vm = vm;
  i$valstack = vm.valstack;
  i$valstack_top = vm.valstack_top;
  i$valstack_base = vm.valstack_base;
  i$ret = vm.ret;
  i$callstack = vm.callstack;
}

var i$SLIDE = function(args) {
  for (var i = 0; i < args; ++i)
    i$valstack[i$valstack_base + i] = i$valstack[i$valstack_top + i];
}

var i$PROJECT = function(val,loc,arity) {
  for (var i = 0; i < arity; ++i)
    i$valstack[i$valstack_base + i + loc] = val.args[i];
}

var i$CALL = function(fun,args) {
  i$callstack.push(args);
  i$callstack.push(fun);
}

var i$ffiWrap = function(fid,oldbase,myoldbase) {
  return function() {
    var oldstack = i$callstack;
    i$callstack = [];

    var res = fid;

    for(var i = 0; i < (arguments.length ? arguments.length : 1); ++i) {
      while (res instanceof i$CON) {
        i$valstack_top += 1;
        i$valstack[i$valstack_top] = res;
        i$valstack[i$valstack_top + 1] = arguments[i];
        i$SLIDE(2);
        i$valstack_top = i$valstack_base + 2;
        i$CALL(_idris__123_APPLY0_125_,[oldbase])
        while (i$callstack.length) {
          var func = i$callstack.pop();
          var args = i$callstack.pop();
          func.apply(this,args);
        }
        res = i$ret;
      }
    }

    i$callstack = oldstack;

    return i$ret;
  }
}

var i$charCode = function(str) {
  if (typeof str == "string")
    return str.charCodeAt(0);
  else
    return str;
}

var i$fromCharCode = function(chr) {
  if (typeof chr == "string")
    return chr;
  else
    return String.fromCharCode(chr);
}

var i$RUN = function () {
  for (var i = 0; i < 10000 && i$callstack.length; i++) {
    var func = i$callstack.pop();
    var args = i$callstack.pop();
    func.apply(this,args);
  };

  if (i$callstack.length)
    setTimeout(i$RUN, 0);
}
var i$getLine = function() {
    return prompt("Prelude.getLine");
}

var i$putStr = function(s) {
  console.log(s);
};

var i$systemInfo = function(index) {
  switch(index) {
    case 0:
      return "javascript";
    case 1:
      return navigator.platform;
  }
  return "";
}
var _idris_Prelude_46_Monad_46__62__62__61_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Prelude_46_Monad_46__62__62__61_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$PROJECT(i$valstack[i$valstack_base + 1],4,2);
  ;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Monad_46__62__62__61_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_call_95__95_IO = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46_clear = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].clear(i$valstack[i$valstack_base + 1]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46_clearColor = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].clearColor(i$valstack[i$valstack_base + 1], i$valstack[i$valstack_base + 2], i$valstack[i$valstack_base + 3], i$valstack[i$valstack_base + 4]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65723;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base] = undefined;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65672,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65672,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_getContext = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  if (i$valstack[i$valstack_base + 1] == "webgl") {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = undefined;
    i$valstack[i$valstack_base + 4] = undefined;
    i$valstack[i$valstack_base + 5] = new i$CON(65686,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65686,null);
    i$valstack[i$valstack_base + 6] = i$CON$65688;
    i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65892,null);
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  } else {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = undefined;
    i$valstack[i$valstack_base + 4] = i$CON$0;
    i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 0:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 5];
      i$SLIDE(5);
      i$valstack_top = i$valstack_base + 5;
      i$CALL(_idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0,[oldbase]);
      break;
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 5];
      i$SLIDE(5);
      i$valstack_top = i$valstack_base + 5;
      i$CALL(_idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0,[oldbase]);
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65696,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65696,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65716,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65716,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0,[myoldbase]);
}
var _idris_Prelude_46_Basics_46_id = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46_initMainSceneWith$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65891,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65891,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46_initMainSceneWith = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith$0,[oldbase,myoldbase]);
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_context_58_0,[myoldbase]);
}
var _idris_io_95_bind$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_io_95_bind$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_io_95_bind$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_io_95_bind = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 6;
  i$CALL(_idris_io_95_bind$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_io_95_bind2_125_,[myoldbase]);
}
var _idris_io_95_pure = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 2];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_Console_46_log = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = console.log(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_main$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65869;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_main = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base] = undefined;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris_Main_46_main$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow,[myoldbase]);
}
var _idris_IdrisScript_46_pack$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65805,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65805,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46_pack = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_IdrisScript_46_pack$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_typeOf,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46_pure = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46_requestAnimationFrame = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 7;
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_base + 4] = new i$CON(65727,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65727,null);
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = i$CON$65729;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_requestFrame = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_step$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 5] = new i$CON(65867,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65867,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_step$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_step$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = new i$CON(65812,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65812,null);
  i$valstack[i$valstack_base + 5] = new i$CON(65857,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65857,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_update = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65732,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65732,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = new i$CON(65747,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65747,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].localName;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].namespaceURI;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].getElementById(i$valstack[i$valstack_base + 1]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].height;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].localName;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].width;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].localName;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY0_125_$65665 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_Console_46_log,[oldbase]);
}
var _idris__123_APPLY0_125_$65666 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer,[oldbase]);
}
var _idris__123_APPLY0_125_$65667 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65668 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65669 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65670 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65671 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65672 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65673 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65674 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65675 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65676 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65677 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65678 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65679 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65680 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65681 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65682 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65683 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65684 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65685 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65686 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65687 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65688 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65689 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_45_95_10_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65690 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_45_95_10_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65691 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65692 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65693 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65694 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65695 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65696 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65697 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65698 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65699 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65700 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65701 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65702 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65703 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65704 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65705 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65706 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65707 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65708 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65709 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65710 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65711 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65712 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65713 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65714 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65715 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65716 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65717 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65718 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65719 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_self_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65720 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65721 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65722 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65723 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65724 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65725 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65726 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65727 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65728 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65729 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65730 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_WebGL_46_Context_46_clear,[oldbase]);
}
var _idris__123_APPLY0_125_$65731 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_API_46_WebGL_46_Context_46_clearColor,[oldbase]);
}
var _idris__123_APPLY0_125_$65732 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65733 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65734 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65735 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65736 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65737 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65738 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65739 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65740 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65741 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65742 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65743 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65744 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65745 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65746 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65747 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65748 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65749 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65750 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65751 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65752 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65753 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65754 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65755 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65756 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65757 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65758 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65759 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65760 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65761 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65762 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65763 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65764 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65765 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65766 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65767 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65768 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46_typeOf_58_ctrName_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65769 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65770 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65771 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65772 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65773 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65774 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65775 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65776 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65777 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65778 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65779 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65780 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65781 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65782 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65783 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65784 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65785 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65786 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack25_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65787 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack26_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65788 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack27_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65789 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack28_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65790 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack29_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65791 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65792 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack30_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65793 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack31_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65794 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack32_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65795 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack33_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65796 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack34_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65797 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack35_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65798 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack36_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65799 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack37_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65800 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack38_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65801 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack39_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65802 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65803 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack40_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65804 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack41_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65805 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65806 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65807 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65808 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65809 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65810 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65811 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65812 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65813 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65814 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65815 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65816 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65817 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65818 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65819 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65820 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65821 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65822 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65823 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65824 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65825 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65826 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65827 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65828 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65829 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf25_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65830 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf26_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65831 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf27_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65832 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf28_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65833 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf29_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65834 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65835 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf30_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65836 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf31_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65837 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf32_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65838 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf33_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65839 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf34_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65840 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf35_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65841 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf36_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65842 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf37_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65843 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf38_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65844 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf39_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65845 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65846 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf40_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65847 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf41_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65848 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf42_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65849 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf43_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65850 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf44_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65851 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf45_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65852 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf46_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65853 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf47_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65854 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf48_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65855 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf49_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65856 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65857 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65858 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65859 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65860 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65861 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65862 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65863 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65864 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0_58_discardInt_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65865 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Interfaces_46__123_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65866 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Interfaces_46__123_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65867 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,4);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 1];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Main_46_step_58_step_39__58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65868 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65869 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65870 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65871 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65872 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65873 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65874 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65875 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65876 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65877 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65878 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65879 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95__95__95__95__95_src_95__95_Main_95__95_idr_95_28_95_25_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65880 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95__95__95__95__95_src_95__95_Main_95__95_idr_95_28_95_25_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65881 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95__95__95__95__95_src_95__95_Main_95__95_idr_95_28_95_25_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65882 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65883 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65884 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65885 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65886 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65887 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65888 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Basics_46_id,[oldbase]);
}
var _idris__123_APPLY0_125_$65889 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65890 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Scenes_46_Main_46__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95__95__95__95__95_src_95__95_Scenes_95__95_MainScene_95__95_idr_95_49_95_19_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65891 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Scenes_46_Main_46__123_initMainSceneWith0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65892 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,5);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 1];
  i$SLIDE(6);
  i$valstack_top = i$valstack_base + 6;
  i$CALL(_idris_io_95_bind,[oldbase]);
}
var _idris__123_APPLY0_125_$65893 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_io_95_pure,[oldbase]);
}
var _idris__123_APPLY0_125_$65894 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65895 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65896 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65897 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65898 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65899 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65900 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65901 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65902 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65903 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65904 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65905 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65906 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65907 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65908 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65909 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65910 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65911 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65912 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65913 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65914 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65915 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65916 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65917 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65918 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65919 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65920 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65921 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65922 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65923 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65924 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65925 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65926 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65927 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_context_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65928 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,6);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 1];
  i$SLIDE(7);
  i$valstack_top = i$valstack_base + 7;
  i$CALL(_idris__123_io_95_bind1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].app) {
    i$valstack[i$valstack_base].app(oldbase,myoldbase);
  } else {
    i$ret = undefined;
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_EVAL0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  if (i$valstack[i$valstack_base] instanceof i$CON && i$valstack[i$valstack_base].ev) {
    i$valstack[i$valstack_base].ev(oldbase,myoldbase);
  } else {
    i$ret = i$valstack[i$valstack_base];
    i$valstack_top = i$valstack_base;
    i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0_95_lam0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = 16384;
  i$ret = new i$CON(65730,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65730,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0_95_lam0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_getContext_58_0,[myoldbase]);
}
var _idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 4] = new i$CON(65867,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65867,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Interfaces_46_requestFrame,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Interfaces_46__123_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95__95__95__95__95_src_95__95_Scenes_95__95_MainScene_95__95_idr_95_49_95_19_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_context_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = "webgl";
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_getContext,[oldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].getContext(i$valstack[i$valstack_base + 1]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_45_95_10_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 1]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Scenes_46_Main_46__123_initMainSceneWith0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 2]],null,null);
      i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris__123_io_95_bind0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_main0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95__95__95__95__95_src_95__95_Main_95__95_idr_95_28_95_25_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0,[oldbase]);
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0,[oldbase]);
}
var _idris_IdrisScript_46__123_pack0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].requestAnimationFrame(i$ffiWrap(i$valstack[i$valstack_base + 1],oldbase,myoldbase));
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_runMain0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_EVAL0_125_,[oldbase]);
}
var _idris__123_runMain0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base] = i$ret;
  i$valstack[i$valstack_base + 1] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_runMain0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_runMain0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$CALL(_idris__123_runMain0_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Main_46_main,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = (function(arg) {
         if (typeof arg == 'number')
           return 0;
         else if (typeof arg == 'string')
           return 1;
         else if (typeof arg == 'boolean')
           return 2;
         else if (typeof arg == 'function')
           return 3;
         else if (typeof arg == 'undefined')
           return 4;
         else if (typeof arg == 'object')
           return 5;
         else
           return 6;
       })(i$valstack[i$valstack_base]);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$5;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$CALL(_idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],3,2);
;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].drawingBufferWidth;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
;
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
;
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 5];
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
;
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 5];
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
;
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = new i$CON(65886,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65886,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46__123_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = "test";
  i$valstack[i$valstack_base + 5] = new i$CON(65665,[i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65665,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65865,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65865,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65919;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(0,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65667;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = i$CON$65684;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 3].tag){
    case 1:
      i$valstack[i$valstack_base + 4] = i$valstack[i$valstack_base + 3].args[0];
      if (i$valstack[i$valstack_base] == "http://www.w3.org/1999/xhtml") {
        i$valstack[i$valstack_base + 5] = undefined;
        i$valstack[i$valstack_base + 6] = undefined;
        i$valstack[i$valstack_base + 7] = undefined;
        i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
        i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
        i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
        i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
        myoldbase.addr = i$valstack_base;
        i$valstack_base = i$valstack_top;
        i$valstack_top += 4;
        i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95_lam1_125_$0,[oldbase,myoldbase]);
        i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      } else {
        i$valstack[i$valstack_base + 5] = undefined;
        i$valstack[i$valstack_base + 6] = undefined;
        i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 2]],null,null);
        i$valstack[i$valstack_base + 7] = new i$CON(1,[i$valstack[i$valstack_base + 7]],null,null);
        i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65893,null);
        i$valstack_top = i$valstack_base;
        i$valstack_base = oldbase.addr;
      };
      break;
    case 0:
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 1]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_45_95_10_95_case_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65689;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_45_95_10_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_45_95_10_95_case_95_lam1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65691;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65707,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65707,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 1:
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 2].args[0];
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95_lam1_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65709;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_io_95_bind1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_io_95_bind1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 5] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 6] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 7;
  i$CALL(_idris__123_io_95_bind1_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris__123_io_95_bind0_125_,[myoldbase]);
}
var _idris_Main_46__123_main1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65868;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95__95__95__95__95_src_95__95_Main_95__95_idr_95_28_95_25_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0,[oldbase]);
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0,[oldbase]);
}
var _idris_IdrisScript_46__123_pack1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65769;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$PROJECT(i$valstack[i$valstack_base],1,2);
  switch(i$valstack[i$valstack_base + 1].tag){
    case 0:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame1_125_$0,[oldbase,myoldbase]);
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 2].args[0];
      i$valstack[i$valstack_base + 5] = i$valstack[i$valstack_base + 5];
      break;
    default:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_IdrisScript_46__123_typeOf1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65895;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95_lam2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65898;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95_lam2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65902;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95_lam2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65905;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65908;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95_lam2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65911;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95_lam2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].document;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65721,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65721,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65725,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65725,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65687;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_getContext2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_io_95_bind2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65928,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65928,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95__95__95__95__95_src_95__95_Main_95__95_idr_95_28_95_25_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65880,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65880,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65883,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65883,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65728;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame2_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65823;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65743;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65757;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65764;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65915,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65915,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65921,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65921,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 6];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_base + 10] = i$CON$65719;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 14;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$65720;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = i$CON$65722;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 13] = new i$CON(65893,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65893,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 13];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65674,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65674,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65698,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65698,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65711,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65711,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65871,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65871,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65882;
      i$valstack[i$valstack_base + 4] = i$CON$65884;
      i$valstack[i$valstack_base + 2] = new i$CON(65867,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65867,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0,[oldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = "Couldn\'t init main scene";
      i$ret = new i$CON(65665,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65665,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65791,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65791,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65758;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65765;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65922;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65675;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65699;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65712;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65872;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65802;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65845,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65845,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65749,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65749,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65759;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case_95_lam4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65766;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65923;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65676;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65700;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65713;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65873;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65806;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65856;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65750;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 10];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = i$ret;
  i$valstack[i$valstack_base + 14] = undefined;
  i$valstack[i$valstack_base + 15] = undefined;
  i$valstack[i$valstack_base + 14] = new i$CON(65893,[i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 15],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 17] = new i$CON(65893,[i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18],i$valstack[i$valstack_base + 19]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 17];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = i$ret;
  i$valstack[i$valstack_base + 17] = undefined;
  i$valstack[i$valstack_base + 18] = undefined;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$3,[oldbase,myoldbase]);
  i$valstack[i$valstack_base + 19] = i$valstack[i$valstack_base + 5].args[0];
  i$valstack[i$valstack_base + 19] = i$valstack[i$valstack_base + 19];
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 20] = new i$CON(65893,[i$valstack[i$valstack_base + 20],i$valstack[i$valstack_base + 21],i$valstack[i$valstack_base + 22]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 20];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = i$ret;
  i$valstack[i$valstack_base + 20] = undefined;
  i$valstack[i$valstack_base + 21] = undefined;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$1,[oldbase,myoldbase]);
  i$valstack[i$valstack_base + 22] = i$valstack[i$valstack_base + 1].args[0];
  i$valstack[i$valstack_base + 22] = i$valstack[i$valstack_base + 22];
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 19;
  i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
  switch(i$valstack[i$valstack_base + 4].tag){
    case 0:
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = i$CON$65756;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_base + 17] = undefined;
      i$valstack[i$valstack_base + 18] = undefined;
      i$valstack[i$valstack_base + 19] = undefined;
      i$valstack[i$valstack_base + 20] = undefined;
      i$valstack[i$valstack_base + 21] = undefined;
      i$valstack[i$valstack_base + 22] = i$CON$65760;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 19];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 20];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 21];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 22];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam5_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[myoldbase]);
      break;
    default:
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46__123_main6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0,[oldbase]);
}
var _idris_IdrisScript_46__123_pack6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65858;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65751;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65761,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65761,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_lam6_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam7_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$65925;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam7_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = "Could not get canvas";
  i$valstack[i$valstack_base + 2] = new i$CON(65665,[i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65665,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam7_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      switch(i$valstack[i$valstack_base + 1].tag){
        case 0:
          i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
          switch(i$valstack[i$valstack_base + 2].tag){
            case 0:
              i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 2].args[0];
              i$valstack[i$valstack_base + 4] = undefined;
              i$valstack[i$valstack_base + 5] = undefined;
              i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 3]],null,null);
              i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65893,null);
              i$valstack_top = i$valstack_base;
              i$valstack_base = oldbase.addr;
              break;
            case 1:
              i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 2].args[0];
              i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
              i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
              i$valstack_top = i$valstack_base + 1;
              i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer,[oldbase]);
              break;
          };
          break;
        case 1:
          i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
          i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
          i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
          i$valstack_top = i$valstack_base + 1;
          i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer,[oldbase]);
          break;
      };
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = i$CON$65920;
      i$valstack[i$valstack_base + 3] = i$CON$65924;
      i$valstack[i$valstack_base + 2] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 4];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris__123_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95_lam7_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
  };
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65678;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65702;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65715;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      if (i$valstack[i$valstack_base + 2] == "canvas") {
        i$valstack[i$valstack_base + 3] = undefined;
        i$valstack[i$valstack_base + 4] = i$CON$65710;
        i$valstack[i$valstack_base + 5] = i$CON$65714;
        i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
        i$valstack[i$valstack_base + 5] = undefined;
        i$valstack[i$valstack_base + 6] = undefined;
        i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
        i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
        i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
        i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
        myoldbase.addr = i$valstack_base;
        i$valstack_base = i$valstack_top;
        i$valstack_top += 4;
        i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46__123_htmlElementFromPointer7_125_$0,[oldbase,myoldbase]);
        i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      } else {
        i$valstack[i$valstack_base + 3] = undefined;
        i$valstack[i$valstack_base + 4] = undefined;
        i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
        i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
        i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
        i$valstack_top = i$valstack_base;
        i$valstack_base = oldbase.addr;
      };
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46__123_main7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0,[oldbase]);
}
var _idris_IdrisScript_46__123_pack7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65808;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].drawingBufferHeight;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65876,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65876,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65860;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65680,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65680,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65704,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65704,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65875;
      i$valstack[i$valstack_base + 4] = i$CON$65877;
      i$valstack[i$valstack_base + 2] = new i$CON(65867,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65867,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0,[oldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = "Couldn\'t init main scene";
      i$ret = new i$CON(65665,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65665,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65810,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65810,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65754;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65681;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65705;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main10_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$65878;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46__123_main10_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46__123_main10_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46__123_main10_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46__123_main10_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith,[myoldbase]);
}
var _idris_Main_46__123_main10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65870;
      i$valstack[i$valstack_base + 4] = i$CON$65874;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_Main_46__123_main10_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = "Couldn\'t get default window Object";
      i$ret = new i$CON(65665,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65665,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65811;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65862,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65862,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65668;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65692;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65770;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65813;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65733,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65733,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
      i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base + 4]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = undefined;
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65814;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65734;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65670;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base + 2].tag){
    case 1:
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 2].args[0];
      if (i$valstack[i$valstack_base] == "http://www.w3.org/1999/xhtml") {
        i$valstack[i$valstack_base + 4] = undefined;
        i$valstack[i$valstack_base + 5] = i$CON$65679;
        i$valstack[i$valstack_base + 6] = i$CON$65669;
        i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
        i$valstack[i$valstack_base + 6] = undefined;
        i$valstack[i$valstack_base + 7] = undefined;
        i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
        i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
        i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
        i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
        myoldbase.addr = i$valstack_base;
        i$valstack_base = i$valstack_top;
        i$valstack_top += 4;
        i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer13_125_$0,[oldbase,myoldbase]);
        i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      } else {
        i$valstack[i$valstack_base + 4] = undefined;
        i$valstack[i$valstack_base + 5] = undefined;
        i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 1]],null,null);
        i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base + 6]],null,null);
        i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65893,null);
        i$valstack_top = i$valstack_base;
        i$valstack_base = oldbase.addr;
      };
      break;
    case 0:
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65694,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65694,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$65703;
      i$valstack[i$valstack_base + 5] = i$CON$65693;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer13_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65772;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65735;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65671,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65671,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$65673;
      i$valstack[i$valstack_base + 5] = i$CON$65677;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_API_46_Web_46_DOM_46_Element_46__123_elementFromPointer14_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65695,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65695,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 1:
      i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 1].args[0];
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$65697;
      i$valstack[i$valstack_base + 5] = i$CON$65701;
      i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46__123_htmlCanvasElementFromPointer14_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = undefined;
      i$valstack[i$valstack_base + 4] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65816;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65774,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65774,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65775;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65818,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65818,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65738;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65776;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65819;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65739;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65820;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65740;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65778;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].canvas;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65822;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 9];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 12] = i$ret;
  i$valstack[i$valstack_base + 13] = undefined;
  i$valstack[i$valstack_base + 14] = undefined;
  i$valstack[i$valstack_base + 13] = new i$CON(65893,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 13];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 16] = new i$CON(65893,[i$valstack[i$valstack_base + 16],i$valstack[i$valstack_base + 17],i$valstack[i$valstack_base + 18]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 14];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 16];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 15] = i$ret;
  i$valstack[i$valstack_base + 16] = undefined;
  i$valstack[i$valstack_base + 17] = undefined;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$3,[oldbase,myoldbase]);
  i$valstack[i$valstack_base + 18] = i$valstack[i$valstack_base + 4].args[0];
  i$valstack[i$valstack_base + 18] = i$valstack[i$valstack_base + 18];
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 19] = new i$CON(65893,[i$valstack[i$valstack_base + 19],i$valstack[i$valstack_base + 20],i$valstack[i$valstack_base + 21]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 15];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 19];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 18] = i$ret;
  i$valstack[i$valstack_base + 19] = undefined;
  i$valstack[i$valstack_base + 20] = undefined;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$1,[oldbase,myoldbase]);
  i$valstack[i$valstack_base + 21] = i$valstack[i$valstack_base + 1].args[0];
  i$valstack[i$valstack_base + 21] = i$valstack[i$valstack_base + 21];
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 20;
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  switch(i$valstack[i$valstack_base + 3].tag){
    case 0:
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = i$CON$65737;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = undefined;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 15] = undefined;
      i$valstack[i$valstack_base + 16] = undefined;
      i$valstack[i$valstack_base + 17] = undefined;
      i$valstack[i$valstack_base + 18] = undefined;
      i$valstack[i$valstack_base + 19] = undefined;
      i$valstack[i$valstack_base + 20] = undefined;
      i$valstack[i$valstack_base + 21] = i$CON$65741;
      i$valstack[i$valstack_base + 22] = new i$CON(65742,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65742,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 18];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 19];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 20];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 21];
      i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 22];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 5;
      i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer20_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[myoldbase]);
      break;
    default:
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_IdrisScript_46__123_pack21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65781,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65781,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = new i$CON(65744,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65744,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = i$CON$65755;
  i$valstack[i$valstack_base + 5] = i$CON$65736;
  i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 4;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer21_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65782;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65825,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65825,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer22_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65745,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65745,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer22_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65753,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65753,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer22_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  switch(i$valstack[i$valstack_base + 2].tag){
    case 0:
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = i$CON$65748;
      i$valstack[i$valstack_base + 6] = i$CON$65752;
      i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
      i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
      i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
      myoldbase.addr = i$valstack_base;
      i$valstack_base = i$valstack_top;
      i$valstack_top += 4;
      i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer22_125_$0,[oldbase,myoldbase]);
      i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
      break;
    default:
      i$valstack[i$valstack_base + 4] = undefined;
      i$valstack[i$valstack_base + 5] = undefined;
      i$valstack[i$valstack_base + 6] = i$CON$0;
      i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65893,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_IdrisScript_46__123_pack23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65783;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65826;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer23_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65746,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65746,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_WebGL_46_Context_46__123_webGlRenderingContextFromPointer23_125_$0,[oldbase,myoldbase]);
  i$CALL(_idris_IdrisScript_46_pack,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack24_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf24_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65827;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack25_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65785;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf25_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack26_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf26_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65829;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack27_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65787,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65787,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf27_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack28_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65788;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf28_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65831,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65831,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack29_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65789;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf29_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65832;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack30_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf30_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65833;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack31_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65792;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf31_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack32_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf32_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65836;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack33_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65794,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65794,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf33_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack34_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65795;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf34_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65838,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65838,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack35_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65796;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf35_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65839;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack36_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf36_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65840;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack37_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65798;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf37_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack38_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf38_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65842;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack39_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65800,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65800,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf39_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack40_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65801;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf40_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65844,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65844,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack41_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65803;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf41_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65846;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack42_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$2;
  i$valstack[i$valstack_base + 4] = i$CON$2;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$3;
  i$valstack[i$valstack_base + 4] = i$CON$3;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$4;
  i$valstack[i$valstack_base + 4] = i$CON$4;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_base + 4] = new i$CON(0,[i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$7,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$5;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$9,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$1;
  i$valstack[i$valstack_base + 4] = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$11,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$13 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$6;
  i$valstack[i$valstack_base + 4] = i$CON$6;
  i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_$12 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_$13,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_pack42_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  switch(i$valstack[i$valstack_base + 1].tag){
    case 2:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65780;
      i$valstack[i$valstack_base + 4] = i$CON$65807;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$0,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 3:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65809;
      i$valstack[i$valstack_base + 4] = i$CON$65771;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$2,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 4:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65773;
      i$valstack[i$valstack_base + 4] = i$CON$65777;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$4,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65779;
      i$valstack[i$valstack_base + 4] = i$CON$65784;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$6,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 5:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65786;
      i$valstack[i$valstack_base + 4] = i$CON$65790;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$8,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 1:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65793;
      i$valstack[i$valstack_base + 4] = i$CON$65797;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$10,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    default:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65799;
      i$valstack[i$valstack_base + 4] = i$CON$65804;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$12,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  };
}
var _idris_IdrisScript_46__123_typeOf42_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65847;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf43_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 1] = i$ret;
  i$valstack[i$valstack_base + 2] = i$CON$5;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf43_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf43_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf43_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = i$CON$65843;
  i$valstack[i$valstack_base + 3] = i$CON$65848;
  i$valstack[i$valstack_base + 2] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],null,null);
  i$CALL(_idris_IdrisScript_46__123_typeOf43_125_$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base + 2],3,2);
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base + 3];
}
var _idris_IdrisScript_46__123_typeOf44_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf45_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65850;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf46_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf47_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65852,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65852,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf48_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65853;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf49_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65854;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf50_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$3;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$7,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$6;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$9,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$65849;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = new i$CON(65768,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65768,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$11,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$13 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = i$CON$4;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$12 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$13,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  if (i$valstack[i$valstack_base + 1] == 0) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65834;
    i$valstack[i$valstack_base + 4] = i$CON$65859;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$0,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 1) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65861;
    i$valstack[i$valstack_base + 4] = i$CON$65815;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$2,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 2) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65817;
    i$valstack[i$valstack_base + 4] = i$CON$65821;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$4,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 3) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65824;
    i$valstack[i$valstack_base + 4] = i$CON$65828;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$6,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 4) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65830;
    i$valstack[i$valstack_base + 4] = i$CON$65835;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$8,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 5) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65837;
    i$valstack[i$valstack_base + 4] = i$CON$65841;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$valstack[i$valstack_base + 4] = undefined;
    i$valstack[i$valstack_base + 5] = undefined;
    i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
    i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
    i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
    i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 5];
    myoldbase.addr = i$valstack_base;
    i$valstack_base = i$valstack_top;
    i$valstack_top += 4;
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$10,[oldbase,myoldbase]);
    i$CALL(_idris_Prelude_46_Monad_46__62__62__61_,[myoldbase]);
  } else {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65851;
    i$valstack[i$valstack_base + 4] = i$CON$65855;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$12,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  };
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 4];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 10] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Monad_46_Prelude_46_Monad_46__64_Prelude_46_Monad_46_Monad_36_IO_39__32_ffi_58__33_join_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 15;
  i$valstack[i$valstack_base] = undefined;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = i$CON$65913;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = i$CON$65914;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_base + 9] = undefined;
  i$valstack[i$valstack_base + 10] = undefined;
  i$valstack[i$valstack_base + 11] = undefined;
  i$valstack[i$valstack_base + 12] = undefined;
  i$valstack[i$valstack_base + 13] = i$CON$65916;
  i$valstack[i$valstack_base + 14] = i$CON$65719;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 12];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 13];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 14];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_self_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = window;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65894,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65894,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$65896;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65897,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65897,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$65899;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 7] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 7];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Prelude_46_Monad_46_Prelude_46_Monad_46__64_Prelude_46_Monad_46_Monad_36_IO_39__32_ffi_58__33_join_58_0,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 7;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_base + 9] = undefined;
  i$valstack[i$valstack_base + 10] = i$CON$65666;
  i$valstack[i$valstack_base + 11] = new i$CON(65900,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65900,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 11];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById_58_getElementById_39__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65901,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65901,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$65903;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65904,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65904,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$65906;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65907,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65907,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$65909;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = new i$CON(65910,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65910,null);
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$65912;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65926;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = "canvas";
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_DOM_46_NonElementParentNode_46_getElementById,[myoldbase]);
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_elm_58_0,[myoldbase]);
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_context_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65927;
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_context_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_context_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0,[myoldbase]);
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_elm_58_0$0 = function(oldbase,myoldbase){
  i$ret = new i$CON(0,[i$valstack[i$valstack_base + 1]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Scenes_46_Main_46_initMainSceneWith_58_elm_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith_58_elm_58_0$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],1,2);
;
}
var _idris_Main_46_step_58_step_39__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65918,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65918,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46_step_58_step_39__58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_step_58_step_39__58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_step_58_step_39__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_step_58_step_39__58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Interfaces_46_update,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_58_ctrName_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].constructor.name;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0_58_discardInt_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_getContext_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$PROJECT(i$valstack[i$valstack_base + 1],2,2);
  i$ret = i$valstack[i$valstack_base + 3];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = 1.0;
  i$valstack[i$valstack_base + 7] = 0.0;
  i$valstack[i$valstack_base + 8] = 0.0;
  i$valstack[i$valstack_base + 9] = 1.0;
  i$valstack[i$valstack_base + 5] = new i$CON(65731,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65731,null);
  i$valstack[i$valstack_base + 6] = new i$CON(65917,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65917,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 8;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_getContext_58_0,[myoldbase]);
}
var _idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = new i$CON(65887,[i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65887,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 6] = new i$CON(65864,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65864,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_requestAnimationFrame,[myoldbase]);
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0$0,[oldbase,myoldbase]);
  i$PROJECT(i$valstack[i$valstack_base],5,2);
;
}
var _idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = new i$CON(65889,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65889,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Monad_46_Prelude_46_Monad_46__64_Prelude_46_Monad_46_Monad_36_IO_39__32_ffi_58__33_join_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 6] = new i$CON(65888,[i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65888,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65866,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65866,null);
  i$ret = new i$CON(65892,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65892,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_58_paint_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65685,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65685,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = i$CON$65683;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = i$CON$65682;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_DOM_46_Element_46_elementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_37_95_31_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_39_95_23_95_case_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_41_95_32_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_DOM_46_Element_46_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeNamespace_58_0_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_51_95_14_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_DOM_46_Element_46_API_46_Web_46_DOM_46_Element_46_elementFromPointer_58_maybeLocalName_58_0_95__95__95__95__95_API_95__95_Web_95__95_DOM_95__95_Element_95__95_idr_95_59_95_14_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = new i$CON(65708,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65708,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65706,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65706,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 9] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_56_95_41_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_58_95_30_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeLocalName_58_0_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_68_95_14_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeWidth_58_0_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_76_95_14_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer_58_maybeHeight_58_0_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLCanvasElement_95__95_idr_95_84_95_14_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = i$CON$65718;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = i$CON$65717;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_38_95_35_95_case_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_40_95_30_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_HTMLCanvasElement_46_htmlCanvasElementFromPointer,[myoldbase]);
}
var _idris_API_46_Web_46_HTML_46_HTMLElement_46_API_46_Web_46_HTML_46_HTMLElement_46_htmlElementFromPointer_58_maybeLocalName_58_0_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_HTMLElement_95__95_idr_95_50_95_14_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = new i$CON(1,[i$valstack[i$valstack_base + 11]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 9],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base + 11]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46_requestAnimationFrame_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_53_95_10_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13]],null,null);
  i$ret = new i$CON(65893,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],_idris__123_APPLY0_125_$65893,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 7];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 8];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_base + 12] = i$CON$65719;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 8];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 9];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 10];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 12];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_Main_46_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65885;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Main_46_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Main_46_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_Main_46_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 1;
  i$CALL(_idris_Main_46_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Scenes_46_Main_46_initMainSceneWith,[myoldbase]);
}
var _idris_Scenes_46_Main_46_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95__95__95__95__95_src_95__95_Scenes_95__95_MainScene_95__95_idr_95_49_95_19_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65890;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_Scenes_46_Main_46_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95__95__95__95__95_src_95__95_Scenes_95__95_MainScene_95__95_idr_95_49_95_19_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = "Could not get canvas";
  i$valstack[i$valstack_base + 5] = new i$CON(65665,[i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65665,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Scenes_46_Main_46_Scenes_46_Main_46_initMainSceneWith_58_canvas_58_0_95__95__95__95__95_src_95__95_Scenes_95__95_MainScene_95__95_idr_95_49_95_19_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$1;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$2;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$3;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$7,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$6;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$9,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65863,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65863,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65768,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65768,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$11,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$13 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$4;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$12 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$13,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$2;
  i$valstack[i$valstack_base + 6] = i$CON$2;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$3;
  i$valstack[i$valstack_base + 6] = i$CON$3;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$3,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$4;
  i$valstack[i$valstack_base + 6] = i$CON$4;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$7 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$0;
  i$valstack[i$valstack_base + 6] = new i$CON(0,[i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$6 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$7,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$9 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$5;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 5]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$8 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$9,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$11 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$1;
  i$valstack[i$valstack_base + 6] = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$11,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$13 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$6;
  i$valstack[i$valstack_base + 6] = i$CON$6;
  i$valstack[i$valstack_base + 5] = new i$CON(0,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],null,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$12 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 6];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 3;
  i$CALL(_idris_IdrisScript_46_pack_95_IdrisScript_95__95_idr_95_126_95_8_95_case$13,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_pure,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_base + 12] = new i$CON(65762,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 10],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65762,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 12];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 11] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 11];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case$1,[oldbase,myoldbase]);
  i$CALL(_idris__123_APPLY0_125_,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$5 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 20] = i$ret;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 16];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 17];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 18];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 19];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 20];
  i$SLIDE(5);
  i$valstack_top = i$valstack_base + 5;
  i$CALL(_idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0,[oldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$4 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 23] = i$ret;
  i$valstack[i$valstack_base + 24] = undefined;
  i$valstack[i$valstack_base + 25] = undefined;
  i$valstack[i$valstack_base + 24] = new i$CON(65893,[i$valstack[i$valstack_base + 24],i$valstack[i$valstack_base + 25],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 20];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 21];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 22];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 23];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 24];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$5,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$3 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 27] = new i$CON(65893,[i$valstack[i$valstack_base + 27],i$valstack[i$valstack_base + 28],i$valstack[i$valstack_base + 29]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 23];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 24];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 25];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 26];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 27];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$4,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$2 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 26] = i$ret;
  i$valstack[i$valstack_base + 27] = undefined;
  i$valstack[i$valstack_base + 28] = undefined;
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$3,[oldbase,myoldbase]);
  i$valstack[i$valstack_base + 29] = i$valstack[i$valstack_base + 15].args[0];
  i$valstack[i$valstack_base + 29] = i$valstack[i$valstack_base + 29];
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 30] = new i$CON(65893,[i$valstack[i$valstack_base + 30],i$valstack[i$valstack_base + 31],i$valstack[i$valstack_base + 32]],_idris__123_APPLY0_125_$65893,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 26];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 27];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 28];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 29];
  i$valstack[i$valstack_top + 4] = i$valstack[i$valstack_base + 30];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 5;
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$2,[oldbase,myoldbase]);
  i$CALL(_idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0,[myoldbase]);
}
var _idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 29] = i$ret;
  i$valstack[i$valstack_base + 30] = undefined;
  i$valstack[i$valstack_base + 31] = undefined;
  i$CALL(_idris_API_46_WebGL_46_Context_46_webGlRenderingContextFromPointer_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_74_95_10_95_case_95_src_95__95_API_95__95_WebGL_95__95_Context_95__95_idr_95_75_95_31_95_case$1,[oldbase,myoldbase]);
  i$valstack[i$valstack_base + 32] = i$valstack[i$valstack_base + 3].args[0];
  i$valstack[i$valstack_base + 32] = i$valstack[i$valstack_base + 32];
}
var i$CON$0 = new i$CON(0,[],null,null);
var i$CON$1 = new i$CON(1,[],null,null);
var i$CON$2 = new i$CON(2,[],null,null);
var i$CON$3 = new i$CON(3,[],null,null);
var i$CON$4 = new i$CON(4,[],null,null);
var i$CON$5 = new i$CON(5,[],null,null);
var i$CON$6 = new i$CON(6,[],null,null);
var i$CON$65666 = new i$CON(65666,[],_idris__123_APPLY0_125_$65666,null);
var i$CON$65667 = new i$CON(65667,[],_idris__123_APPLY0_125_$65667,null);
var i$CON$65668 = new i$CON(65668,[],_idris__123_APPLY0_125_$65668,null);
var i$CON$65669 = new i$CON(65669,[],_idris__123_APPLY0_125_$65669,null);
var i$CON$65670 = new i$CON(65670,[],_idris__123_APPLY0_125_$65670,null);
var i$CON$65673 = new i$CON(65673,[],_idris__123_APPLY0_125_$65673,null);
var i$CON$65675 = new i$CON(65675,[],_idris__123_APPLY0_125_$65675,null);
var i$CON$65676 = new i$CON(65676,[],_idris__123_APPLY0_125_$65676,null);
var i$CON$65677 = new i$CON(65677,[],_idris__123_APPLY0_125_$65677,null);
var i$CON$65678 = new i$CON(65678,[],_idris__123_APPLY0_125_$65678,null);
var i$CON$65679 = new i$CON(65679,[],_idris__123_APPLY0_125_$65679,null);
var i$CON$65681 = new i$CON(65681,[],_idris__123_APPLY0_125_$65681,null);
var i$CON$65682 = new i$CON(65682,[],_idris__123_APPLY0_125_$65682,null);
var i$CON$65683 = new i$CON(65683,[],_idris__123_APPLY0_125_$65683,null);
var i$CON$65684 = new i$CON(65684,[],_idris__123_APPLY0_125_$65684,null);
var i$CON$65687 = new i$CON(65687,[],_idris__123_APPLY0_125_$65687,null);
var i$CON$65688 = new i$CON(65688,[],_idris__123_APPLY0_125_$65688,null);
var i$CON$65689 = new i$CON(65689,[],_idris__123_APPLY0_125_$65689,null);
var i$CON$65691 = new i$CON(65691,[],_idris__123_APPLY0_125_$65691,null);
var i$CON$65692 = new i$CON(65692,[],_idris__123_APPLY0_125_$65692,null);
var i$CON$65693 = new i$CON(65693,[],_idris__123_APPLY0_125_$65693,null);
var i$CON$65697 = new i$CON(65697,[],_idris__123_APPLY0_125_$65697,null);
var i$CON$65699 = new i$CON(65699,[],_idris__123_APPLY0_125_$65699,null);
var i$CON$65700 = new i$CON(65700,[],_idris__123_APPLY0_125_$65700,null);
var i$CON$65701 = new i$CON(65701,[],_idris__123_APPLY0_125_$65701,null);
var i$CON$65702 = new i$CON(65702,[],_idris__123_APPLY0_125_$65702,null);
var i$CON$65703 = new i$CON(65703,[],_idris__123_APPLY0_125_$65703,null);
var i$CON$65705 = new i$CON(65705,[],_idris__123_APPLY0_125_$65705,null);
var i$CON$65709 = new i$CON(65709,[],_idris__123_APPLY0_125_$65709,null);
var i$CON$65710 = new i$CON(65710,[],_idris__123_APPLY0_125_$65710,null);
var i$CON$65712 = new i$CON(65712,[],_idris__123_APPLY0_125_$65712,null);
var i$CON$65713 = new i$CON(65713,[],_idris__123_APPLY0_125_$65713,null);
var i$CON$65714 = new i$CON(65714,[],_idris__123_APPLY0_125_$65714,null);
var i$CON$65715 = new i$CON(65715,[],_idris__123_APPLY0_125_$65715,null);
var i$CON$65717 = new i$CON(65717,[],_idris__123_APPLY0_125_$65717,null);
var i$CON$65718 = new i$CON(65718,[],_idris__123_APPLY0_125_$65718,null);
var i$CON$65719 = new i$CON(65719,[],_idris__123_APPLY0_125_$65719,null);
var i$CON$65720 = new i$CON(65720,[],_idris__123_APPLY0_125_$65720,null);
var i$CON$65722 = new i$CON(65722,[],_idris__123_APPLY0_125_$65722,null);
var i$CON$65723 = new i$CON(65723,[],_idris__123_APPLY0_125_$65723,null);
var i$CON$65728 = new i$CON(65728,[],_idris__123_APPLY0_125_$65728,null);
var i$CON$65729 = new i$CON(65729,[],_idris__123_APPLY0_125_$65729,null);
var i$CON$65734 = new i$CON(65734,[],_idris__123_APPLY0_125_$65734,null);
var i$CON$65735 = new i$CON(65735,[],_idris__123_APPLY0_125_$65735,null);
var i$CON$65736 = new i$CON(65736,[],_idris__123_APPLY0_125_$65736,null);
var i$CON$65737 = new i$CON(65737,[],_idris__123_APPLY0_125_$65737,null);
var i$CON$65738 = new i$CON(65738,[],_idris__123_APPLY0_125_$65738,null);
var i$CON$65739 = new i$CON(65739,[],_idris__123_APPLY0_125_$65739,null);
var i$CON$65740 = new i$CON(65740,[],_idris__123_APPLY0_125_$65740,null);
var i$CON$65741 = new i$CON(65741,[],_idris__123_APPLY0_125_$65741,null);
var i$CON$65743 = new i$CON(65743,[],_idris__123_APPLY0_125_$65743,null);
var i$CON$65748 = new i$CON(65748,[],_idris__123_APPLY0_125_$65748,null);
var i$CON$65750 = new i$CON(65750,[],_idris__123_APPLY0_125_$65750,null);
var i$CON$65751 = new i$CON(65751,[],_idris__123_APPLY0_125_$65751,null);
var i$CON$65752 = new i$CON(65752,[],_idris__123_APPLY0_125_$65752,null);
var i$CON$65754 = new i$CON(65754,[],_idris__123_APPLY0_125_$65754,null);
var i$CON$65755 = new i$CON(65755,[],_idris__123_APPLY0_125_$65755,null);
var i$CON$65756 = new i$CON(65756,[],_idris__123_APPLY0_125_$65756,null);
var i$CON$65757 = new i$CON(65757,[],_idris__123_APPLY0_125_$65757,null);
var i$CON$65758 = new i$CON(65758,[],_idris__123_APPLY0_125_$65758,null);
var i$CON$65759 = new i$CON(65759,[],_idris__123_APPLY0_125_$65759,null);
var i$CON$65760 = new i$CON(65760,[],_idris__123_APPLY0_125_$65760,null);
var i$CON$65764 = new i$CON(65764,[],_idris__123_APPLY0_125_$65764,null);
var i$CON$65765 = new i$CON(65765,[],_idris__123_APPLY0_125_$65765,null);
var i$CON$65766 = new i$CON(65766,[],_idris__123_APPLY0_125_$65766,null);
var i$CON$65769 = new i$CON(65769,[],_idris__123_APPLY0_125_$65769,null);
var i$CON$65770 = new i$CON(65770,[],_idris__123_APPLY0_125_$65770,null);
var i$CON$65771 = new i$CON(65771,[],_idris__123_APPLY0_125_$65771,null);
var i$CON$65772 = new i$CON(65772,[],_idris__123_APPLY0_125_$65772,null);
var i$CON$65773 = new i$CON(65773,[],_idris__123_APPLY0_125_$65773,null);
var i$CON$65775 = new i$CON(65775,[],_idris__123_APPLY0_125_$65775,null);
var i$CON$65776 = new i$CON(65776,[],_idris__123_APPLY0_125_$65776,null);
var i$CON$65777 = new i$CON(65777,[],_idris__123_APPLY0_125_$65777,null);
var i$CON$65778 = new i$CON(65778,[],_idris__123_APPLY0_125_$65778,null);
var i$CON$65779 = new i$CON(65779,[],_idris__123_APPLY0_125_$65779,null);
var i$CON$65780 = new i$CON(65780,[],_idris__123_APPLY0_125_$65780,null);
var i$CON$65782 = new i$CON(65782,[],_idris__123_APPLY0_125_$65782,null);
var i$CON$65783 = new i$CON(65783,[],_idris__123_APPLY0_125_$65783,null);
var i$CON$65784 = new i$CON(65784,[],_idris__123_APPLY0_125_$65784,null);
var i$CON$65785 = new i$CON(65785,[],_idris__123_APPLY0_125_$65785,null);
var i$CON$65786 = new i$CON(65786,[],_idris__123_APPLY0_125_$65786,null);
var i$CON$65788 = new i$CON(65788,[],_idris__123_APPLY0_125_$65788,null);
var i$CON$65789 = new i$CON(65789,[],_idris__123_APPLY0_125_$65789,null);
var i$CON$65790 = new i$CON(65790,[],_idris__123_APPLY0_125_$65790,null);
var i$CON$65792 = new i$CON(65792,[],_idris__123_APPLY0_125_$65792,null);
var i$CON$65793 = new i$CON(65793,[],_idris__123_APPLY0_125_$65793,null);
var i$CON$65795 = new i$CON(65795,[],_idris__123_APPLY0_125_$65795,null);
var i$CON$65796 = new i$CON(65796,[],_idris__123_APPLY0_125_$65796,null);
var i$CON$65797 = new i$CON(65797,[],_idris__123_APPLY0_125_$65797,null);
var i$CON$65798 = new i$CON(65798,[],_idris__123_APPLY0_125_$65798,null);
var i$CON$65799 = new i$CON(65799,[],_idris__123_APPLY0_125_$65799,null);
var i$CON$65801 = new i$CON(65801,[],_idris__123_APPLY0_125_$65801,null);
var i$CON$65802 = new i$CON(65802,[],_idris__123_APPLY0_125_$65802,null);
var i$CON$65803 = new i$CON(65803,[],_idris__123_APPLY0_125_$65803,null);
var i$CON$65804 = new i$CON(65804,[],_idris__123_APPLY0_125_$65804,null);
var i$CON$65806 = new i$CON(65806,[],_idris__123_APPLY0_125_$65806,null);
var i$CON$65807 = new i$CON(65807,[],_idris__123_APPLY0_125_$65807,null);
var i$CON$65808 = new i$CON(65808,[],_idris__123_APPLY0_125_$65808,null);
var i$CON$65809 = new i$CON(65809,[],_idris__123_APPLY0_125_$65809,null);
var i$CON$65811 = new i$CON(65811,[],_idris__123_APPLY0_125_$65811,null);
var i$CON$65813 = new i$CON(65813,[],_idris__123_APPLY0_125_$65813,null);
var i$CON$65814 = new i$CON(65814,[],_idris__123_APPLY0_125_$65814,null);
var i$CON$65815 = new i$CON(65815,[],_idris__123_APPLY0_125_$65815,null);
var i$CON$65816 = new i$CON(65816,[],_idris__123_APPLY0_125_$65816,null);
var i$CON$65817 = new i$CON(65817,[],_idris__123_APPLY0_125_$65817,null);
var i$CON$65819 = new i$CON(65819,[],_idris__123_APPLY0_125_$65819,null);
var i$CON$65820 = new i$CON(65820,[],_idris__123_APPLY0_125_$65820,null);
var i$CON$65821 = new i$CON(65821,[],_idris__123_APPLY0_125_$65821,null);
var i$CON$65822 = new i$CON(65822,[],_idris__123_APPLY0_125_$65822,null);
var i$CON$65823 = new i$CON(65823,[],_idris__123_APPLY0_125_$65823,null);
var i$CON$65824 = new i$CON(65824,[],_idris__123_APPLY0_125_$65824,null);
var i$CON$65826 = new i$CON(65826,[],_idris__123_APPLY0_125_$65826,null);
var i$CON$65827 = new i$CON(65827,[],_idris__123_APPLY0_125_$65827,null);
var i$CON$65828 = new i$CON(65828,[],_idris__123_APPLY0_125_$65828,null);
var i$CON$65829 = new i$CON(65829,[],_idris__123_APPLY0_125_$65829,null);
var i$CON$65830 = new i$CON(65830,[],_idris__123_APPLY0_125_$65830,null);
var i$CON$65832 = new i$CON(65832,[],_idris__123_APPLY0_125_$65832,null);
var i$CON$65833 = new i$CON(65833,[],_idris__123_APPLY0_125_$65833,null);
var i$CON$65834 = new i$CON(65834,[],_idris__123_APPLY0_125_$65834,null);
var i$CON$65835 = new i$CON(65835,[],_idris__123_APPLY0_125_$65835,null);
var i$CON$65836 = new i$CON(65836,[],_idris__123_APPLY0_125_$65836,null);
var i$CON$65837 = new i$CON(65837,[],_idris__123_APPLY0_125_$65837,null);
var i$CON$65839 = new i$CON(65839,[],_idris__123_APPLY0_125_$65839,null);
var i$CON$65840 = new i$CON(65840,[],_idris__123_APPLY0_125_$65840,null);
var i$CON$65841 = new i$CON(65841,[],_idris__123_APPLY0_125_$65841,null);
var i$CON$65842 = new i$CON(65842,[],_idris__123_APPLY0_125_$65842,null);
var i$CON$65843 = new i$CON(65843,[],_idris__123_APPLY0_125_$65843,null);
var i$CON$65846 = new i$CON(65846,[],_idris__123_APPLY0_125_$65846,null);
var i$CON$65847 = new i$CON(65847,[],_idris__123_APPLY0_125_$65847,null);
var i$CON$65848 = new i$CON(65848,[],_idris__123_APPLY0_125_$65848,null);
var i$CON$65849 = new i$CON(65849,[],_idris__123_APPLY0_125_$65849,null);
var i$CON$65850 = new i$CON(65850,[],_idris__123_APPLY0_125_$65850,null);
var i$CON$65851 = new i$CON(65851,[],_idris__123_APPLY0_125_$65851,null);
var i$CON$65853 = new i$CON(65853,[],_idris__123_APPLY0_125_$65853,null);
var i$CON$65854 = new i$CON(65854,[],_idris__123_APPLY0_125_$65854,null);
var i$CON$65855 = new i$CON(65855,[],_idris__123_APPLY0_125_$65855,null);
var i$CON$65856 = new i$CON(65856,[],_idris__123_APPLY0_125_$65856,null);
var i$CON$65858 = new i$CON(65858,[],_idris__123_APPLY0_125_$65858,null);
var i$CON$65859 = new i$CON(65859,[],_idris__123_APPLY0_125_$65859,null);
var i$CON$65860 = new i$CON(65860,[],_idris__123_APPLY0_125_$65860,null);
var i$CON$65861 = new i$CON(65861,[],_idris__123_APPLY0_125_$65861,null);
var i$CON$65868 = new i$CON(65868,[],_idris__123_APPLY0_125_$65868,null);
var i$CON$65869 = new i$CON(65869,[],_idris__123_APPLY0_125_$65869,null);
var i$CON$65870 = new i$CON(65870,[],_idris__123_APPLY0_125_$65870,null);
var i$CON$65872 = new i$CON(65872,[],_idris__123_APPLY0_125_$65872,null);
var i$CON$65873 = new i$CON(65873,[],_idris__123_APPLY0_125_$65873,null);
var i$CON$65874 = new i$CON(65874,[],_idris__123_APPLY0_125_$65874,null);
var i$CON$65875 = new i$CON(65875,[],_idris__123_APPLY0_125_$65875,null);
var i$CON$65877 = new i$CON(65877,[],_idris__123_APPLY0_125_$65877,null);
var i$CON$65878 = new i$CON(65878,[],_idris__123_APPLY0_125_$65878,null);
var i$CON$65882 = new i$CON(65882,[],_idris__123_APPLY0_125_$65882,null);
var i$CON$65884 = new i$CON(65884,[],_idris__123_APPLY0_125_$65884,null);
var i$CON$65885 = new i$CON(65885,[],_idris__123_APPLY0_125_$65885,null);
var i$CON$65890 = new i$CON(65890,[],_idris__123_APPLY0_125_$65890,null);
var i$CON$65895 = new i$CON(65895,[],_idris__123_APPLY0_125_$65895,null);
var i$CON$65896 = new i$CON(65896,[],_idris__123_APPLY0_125_$65896,null);
var i$CON$65898 = new i$CON(65898,[],_idris__123_APPLY0_125_$65898,null);
var i$CON$65899 = new i$CON(65899,[],_idris__123_APPLY0_125_$65899,null);
var i$CON$65902 = new i$CON(65902,[],_idris__123_APPLY0_125_$65902,null);
var i$CON$65903 = new i$CON(65903,[],_idris__123_APPLY0_125_$65903,null);
var i$CON$65905 = new i$CON(65905,[],_idris__123_APPLY0_125_$65905,null);
var i$CON$65906 = new i$CON(65906,[],_idris__123_APPLY0_125_$65906,null);
var i$CON$65908 = new i$CON(65908,[],_idris__123_APPLY0_125_$65908,null);
var i$CON$65909 = new i$CON(65909,[],_idris__123_APPLY0_125_$65909,null);
var i$CON$65911 = new i$CON(65911,[],_idris__123_APPLY0_125_$65911,null);
var i$CON$65912 = new i$CON(65912,[],_idris__123_APPLY0_125_$65912,null);
var i$CON$65913 = new i$CON(65913,[],_idris__123_APPLY0_125_$65913,null);
var i$CON$65914 = new i$CON(65914,[],_idris__123_APPLY0_125_$65914,null);
var i$CON$65916 = new i$CON(65916,[],_idris__123_APPLY0_125_$65916,null);
var i$CON$65919 = new i$CON(65919,[],_idris__123_APPLY0_125_$65919,null);
var i$CON$65920 = new i$CON(65920,[],_idris__123_APPLY0_125_$65920,null);
var i$CON$65922 = new i$CON(65922,[],_idris__123_APPLY0_125_$65922,null);
var i$CON$65923 = new i$CON(65923,[],_idris__123_APPLY0_125_$65923,null);
var i$CON$65924 = new i$CON(65924,[],_idris__123_APPLY0_125_$65924,null);
var i$CON$65925 = new i$CON(65925,[],_idris__123_APPLY0_125_$65925,null);
var i$CON$65926 = new i$CON(65926,[],_idris__123_APPLY0_125_$65926,null);
var i$CON$65927 = new i$CON(65927,[],_idris__123_APPLY0_125_$65927,null);
var main = function(){
if (typeof (document) != "undefined" && (document.readyState == "complete" || document.readyState == "loaded")) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain0_125_(new i$POINTER(0));
    i$RUN();
  } else if (typeof (window) != "undefined") {
    window.addEventListener("DOMContentLoaded",function(){
  var vm = new i$VM();
  i$SCHED(vm);
  _idris__123_runMain0_125_(new i$POINTER(0));
  i$RUN();
}
,false);
  } else if (true) {
    var vm = new i$VM();
    i$SCHED(vm);
    _idris__123_runMain0_125_(new i$POINTER(0));
    i$RUN();
  }
}
main()