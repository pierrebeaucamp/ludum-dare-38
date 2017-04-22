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
var _idris_API_46_Web_46_HTML_46_Window_46_defaultWindow$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = i$CON$65662;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65779,null);
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
var _idris_Prelude_46_Basics_46_id = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base + 1];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
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
  i$valstack[i$valstack_base + 4] = i$CON$65771;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65779,null);
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
  i$valstack[i$valstack_base + 5] = new i$CON(65706,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65706,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65779,null);
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
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 2] = new i$CON(65666,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65666,null);
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = i$CON$65668;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65779,null);
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
  i$valstack[i$valstack_base + 5] = new i$CON(65767,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65767,null);
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
  i$valstack[i$valstack_base + 4] = new i$CON(65713,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65713,null);
  i$valstack[i$valstack_base + 5] = new i$CON(65758,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65758,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65779,null);
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
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam0_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(1,[i$valstack[i$valstack_base]],null,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_APPLY0_125_$65657 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_API_46_Web_46_Console_46_log,[oldbase]);
}
var _idris__123_APPLY0_125_$65658 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_self_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65659 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65660 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65661 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65662 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65663 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65664 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65665 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65666 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65667 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65668 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65669 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46_typeOf_58_ctrName_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65670 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65671 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65672 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65673 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65674 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65675 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65676 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65677 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65678 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65679 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65680 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65681 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65682 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65683 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65684 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65685 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65686 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65687 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack25_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65688 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack26_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65689 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack27_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65690 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack28_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65691 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack29_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65692 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65693 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack30_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65694 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack31_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65695 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack32_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65696 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack33_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65697 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack34_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65698 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack35_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65699 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack36_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65700 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack37_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65701 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack38_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65702 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack39_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65703 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65704 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack40_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65705 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack41_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65706 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack42_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65707 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65708 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65709 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65710 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65711 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_pack8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65712 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_pack9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65713 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65714 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf10_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65715 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf11_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65716 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf12_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65717 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf13_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65718 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf14_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65719 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf15_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65720 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf16_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65721 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf17_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65722 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf18_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65723 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf19_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65724 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65725 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf20_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65726 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf21_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65727 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf22_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65728 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf23_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65729 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf24_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65730 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf25_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65731 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf26_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65732 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf27_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65733 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf28_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65734 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf29_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65735 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65736 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf30_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65737 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf31_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65738 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf32_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65739 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf33_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65740 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf34_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65741 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf35_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65742 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf36_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65743 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf37_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65744 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf38_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65745 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf39_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65746 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65747 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf40_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65748 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf41_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65749 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf42_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65750 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf43_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65751 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf44_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65752 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf45_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65753 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf46_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65754 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf47_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65755 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf48_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65756 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf49_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65757 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf4_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65758 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf50_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65759 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf5_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65760 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf6_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65761 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf7_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65762 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_IdrisScript_46__123_typeOf8_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65763 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf9_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65764 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_IdrisScript_46__123_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65765 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0_58_discardInt_58_0,[oldbase]);
}
var _idris__123_APPLY0_125_$65766 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Interfaces_46__123_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65767 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65768 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65769 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65770 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65771 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65772 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65773 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65774 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65775 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65776 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65777 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Basics_46_id,[oldbase]);
}
var _idris__123_APPLY0_125_$65778 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris_Prelude_46_Functor_46__123_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65779 = function(oldbase,myoldbase){
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
var _idris__123_APPLY0_125_$65780 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,3);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 3] = i$valstack[i$valstack_base + 1];
  i$SLIDE(4);
  i$valstack_top = i$valstack_base + 4;
  i$CALL(_idris_io_95_pure,[oldbase]);
}
var _idris__123_APPLY0_125_$65781 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65782 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam1_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65783 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$valstack[i$valstack_base].args[0];
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam2_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65784 = function(oldbase,myoldbase){
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
  i$valstack[i$valstack_base] = i$valstack[i$valstack_top];
  i$valstack_top = i$valstack_base + 1;
  i$CALL(_idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam3_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65785 = function(oldbase,myoldbase){
  i$PROJECT(i$valstack[i$valstack_base],2,2);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$valstack[i$valstack_top + 2] = i$valstack[i$valstack_base + 1];
  i$SLIDE(3);
  i$valstack_top = i$valstack_base + 3;
  i$CALL(_idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_,[oldbase]);
}
var _idris__123_APPLY0_125_$65786 = function(oldbase,myoldbase){
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
var _idris__123_Main_46_step_58_step_39__58_0_95_lam0_125_$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 3] = i$ret;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 4] = new i$CON(65767,[i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65767,null);
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
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65780,null);
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
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65780,null);
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
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
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
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
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
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$0;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46__123_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = new i$CON(65775,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65775,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base];
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
  i$ret = i$CON$65670;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame1_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = new i$CON(1,[i$valstack[i$valstack_base + 5]],null,null);
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65780,null);
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
      i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65780,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
  };
}
var _idris_IdrisScript_46__123_typeOf1_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$valstack[i$valstack_base].document;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65660;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_defaultWindow_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_60_95_22_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65664;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_io_95_bind2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65786,[i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65786,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65769,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65769,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Main_46__123_main_95__95__95__95__95_src_95__95_Main_95__95_idr_95_26_95_13_95_case_95_lam2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65773,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65773,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack2_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46__123_requestAnimationFrame2_125_$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = i$CON$65667;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65779,null);
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
  i$ret = i$CON$65724;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris__123_API_46_Web_46_HTML_46_Window_46_defaultWindow_58_maybeDocument_58_0_95_lam3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65783,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65783,null);
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
  i$valstack[i$valstack_base + 10] = i$CON$65658;
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
      i$valstack[i$valstack_base + 5] = i$CON$65659;
      i$valstack[i$valstack_base + 6] = undefined;
      i$valstack[i$valstack_base + 7] = undefined;
      i$valstack[i$valstack_base + 8] = undefined;
      i$valstack[i$valstack_base + 9] = undefined;
      i$valstack[i$valstack_base + 10] = undefined;
      i$valstack[i$valstack_base + 11] = undefined;
      i$valstack[i$valstack_base + 12] = i$CON$65661;
      i$valstack[i$valstack_base + 13] = undefined;
      i$valstack[i$valstack_base + 14] = undefined;
      i$valstack[i$valstack_base + 13] = new i$CON(65780,[i$valstack[i$valstack_base + 13],i$valstack[i$valstack_base + 14],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65780,null);
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
      i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65780,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_Main_46__123_main3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  switch(i$valstack[i$valstack_base].tag){
    case 1:
      i$valstack[i$valstack_base + 1] = i$valstack[i$valstack_base].args[0];
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65768;
      i$valstack[i$valstack_base + 4] = i$CON$65770;
      i$valstack[i$valstack_base + 2] = new i$CON(65767,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65767,null);
      i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 1];
      i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 2];
      i$SLIDE(2);
      i$valstack_top = i$valstack_base + 2;
      i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0,[oldbase]);
      break;
    case 0:
      i$valstack[i$valstack_base + 1] = "Couldn\'t get default window Object";
      i$ret = new i$CON(65657,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65657,null);
      i$valstack_top = i$valstack_base;
      i$valstack_base = oldbase.addr;
      break;
  };
}
var _idris_IdrisScript_46__123_pack3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65692,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65692,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf3_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65703;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf4_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65746,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65746,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65707;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf5_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65757;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf6_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65759;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65709;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf7_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf8_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65761;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65711,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65711,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf9_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65712;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf10_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65763,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65763,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65671;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf11_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65714;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf12_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65715;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65673;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf13_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf14_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65717;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65675,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65675,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf15_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65676;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf16_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65719,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65719,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65677;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf17_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65720;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf18_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65721;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65679;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf19_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf20_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65723;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65682,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65682,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf21_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65683;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf22_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65726,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65726,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65684;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf23_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65727;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack24_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf24_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65728;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack25_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65686;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf25_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack26_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf26_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65730;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack27_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65688,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65688,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf27_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack28_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65689;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf28_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65732,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65732,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack29_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65690;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf29_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65733;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack30_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf30_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65734;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack31_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65693;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf31_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack32_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf32_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65737;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack33_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65695,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65695,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf33_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack34_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65696;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf34_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65739,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65739,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack35_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65697;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf35_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65740;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack36_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf36_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65741;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack37_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65699;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf37_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 2;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack38_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf38_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65743;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack39_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65701,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65701,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf39_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack40_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65702;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf40_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65745,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65745,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_pack41_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65704;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf41_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65747;
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
  i$valstack[i$valstack_base + 4] = i$CON$1;
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
      i$valstack[i$valstack_base + 3] = i$CON$65681;
      i$valstack[i$valstack_base + 4] = i$CON$65708;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$0,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 3:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65710;
      i$valstack[i$valstack_base + 4] = i$CON$65672;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$2,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 4:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65674;
      i$valstack[i$valstack_base + 4] = i$CON$65678;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$4,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 0:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65680;
      i$valstack[i$valstack_base + 4] = i$CON$65685;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$6,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 5:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65687;
      i$valstack[i$valstack_base + 4] = i$CON$65691;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$8,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    case 1:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65694;
      i$valstack[i$valstack_base + 4] = i$CON$65698;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$10,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
      break;
    default:
      i$valstack[i$valstack_base + 2] = undefined;
      i$valstack[i$valstack_base + 3] = i$CON$65700;
      i$valstack[i$valstack_base + 4] = i$CON$65705;
      i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
      i$CALL(_idris_IdrisScript_46__123_pack42_125_$12,[oldbase,myoldbase]);
      i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
      i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  };
}
var _idris_IdrisScript_46__123_typeOf42_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65748;
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
  i$valstack[i$valstack_base + 2] = i$CON$65744;
  i$valstack[i$valstack_base + 3] = i$CON$65749;
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
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf45_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65751;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf46_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 3;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base],i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf47_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = new i$CON(65753,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65753,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf48_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65754;
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_IdrisScript_46__123_typeOf49_125_ = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 1;
  i$ret = i$CON$65755;
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
  i$valstack[i$valstack_base + 3] = i$CON$65750;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 2];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 3];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46__123_typeOf50_125_$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 2] = i$ret;
  i$valstack[i$valstack_base + 3] = new i$CON(65669,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65669,null);
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
    i$valstack[i$valstack_base + 3] = i$CON$65735;
    i$valstack[i$valstack_base + 4] = i$CON$65760;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$0,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 1) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65762;
    i$valstack[i$valstack_base + 4] = i$CON$65716;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$2,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 2) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65718;
    i$valstack[i$valstack_base + 4] = i$CON$65722;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$4,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 3) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65725;
    i$valstack[i$valstack_base + 4] = i$CON$65729;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$6,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 4) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65731;
    i$valstack[i$valstack_base + 4] = i$CON$65736;
    i$valstack[i$valstack_base + 3] = new i$CON(0,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4]],null,null);
    i$CALL(_idris_IdrisScript_46__123_typeOf50_125_$8,[oldbase,myoldbase]);
    i$PROJECT(i$valstack[i$valstack_base + 3],4,2);
    i$valstack[i$valstack_base + 3] = i$valstack[i$valstack_base + 4];
  } else if (i$valstack[i$valstack_base + 1] == 5) {
    i$valstack[i$valstack_base + 2] = undefined;
    i$valstack[i$valstack_base + 3] = i$CON$65738;
    i$valstack[i$valstack_base + 4] = i$CON$65742;
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
    i$valstack[i$valstack_base + 3] = i$CON$65752;
    i$valstack[i$valstack_base + 4] = i$CON$65756;
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
  i$valstack[i$valstack_base + 3] = i$CON$65781;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = i$CON$65782;
  i$valstack[i$valstack_base + 8] = undefined;
  i$valstack[i$valstack_base + 9] = undefined;
  i$valstack[i$valstack_base + 10] = undefined;
  i$valstack[i$valstack_base + 11] = undefined;
  i$valstack[i$valstack_base + 12] = undefined;
  i$valstack[i$valstack_base + 13] = i$CON$65784;
  i$valstack[i$valstack_base + 14] = i$CON$65658;
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
var _idris_Main_46_step_58_step_39__58_0$1 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 8] = i$ret;
  i$valstack[i$valstack_base + 9] = new i$CON(65785,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 2]],_idris__123_APPLY0_125_$65785,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 8],i$valstack[i$valstack_base + 9]],_idris__123_APPLY0_125_$65779,null);
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
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65780,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Prelude_46_Applicative_46_Prelude_46_Monad_46__64_Prelude_46_Applicative_46_Applicative_36_IO_39__32_ffi_58__33__60__42__62__58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = new i$CON(65776,[i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65776,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 5] = i$ret;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 6] = new i$CON(65765,[i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7]],_idris__123_APPLY0_125_$65765,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 6;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = undefined;
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 1];
  myoldbase.addr = i$valstack_base;
  i$valstack_base = i$valstack_top;
  i$valstack_top += 2;
  i$CALL(_idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_FrameRequest_36_MainScene_58__33_requestFrame_58_0$0,[oldbase,myoldbase]);
  i$CALL(_idris_API_46_Web_46_HTML_46_Window_46_requestAnimationFrame,[myoldbase]);
}
var _idris_Prelude_46_Functor_46_Prelude_46_Monad_46__64_Prelude_46_Functor_46_Functor_36_IO_39__32_ffi_58__33_map_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 4;
  i$valstack[i$valstack_base + 5] = undefined;
  i$valstack[i$valstack_base + 6] = undefined;
  i$valstack[i$valstack_base + 7] = undefined;
  i$valstack[i$valstack_base + 8] = new i$CON(65778,[i$valstack[i$valstack_base + 3]],_idris__123_APPLY0_125_$65778,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 6],i$valstack[i$valstack_base + 7],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 8]],_idris__123_APPLY0_125_$65779,null);
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
  i$valstack[i$valstack_base + 6] = new i$CON(65777,[i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65777,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 6]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_Interfaces_46_Scenes_46_Main_46__64_Interfaces_46_Updatable_36_MainScene_58__33_update_58_0 = function(oldbase){
  var myoldbase = new i$POINTER();
  i$valstack_top += 5;
  i$valstack[i$valstack_base + 1] = undefined;
  i$valstack[i$valstack_base + 2] = undefined;
  i$valstack[i$valstack_base + 3] = undefined;
  i$valstack[i$valstack_base + 4] = "test";
  i$valstack[i$valstack_base + 4] = new i$CON(65657,[i$valstack[i$valstack_base + 4]],_idris__123_APPLY0_125_$65657,null);
  i$valstack[i$valstack_base + 5] = new i$CON(65766,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65766,null);
  i$ret = new i$CON(65779,[i$valstack[i$valstack_base + 1],i$valstack[i$valstack_base + 2],i$valstack[i$valstack_base + 3],i$valstack[i$valstack_base + 4],i$valstack[i$valstack_base + 5]],_idris__123_APPLY0_125_$65779,null);
  i$valstack_top = i$valstack_base;
  i$valstack_base = oldbase.addr;
}
var _idris_API_46_Web_46_HTML_46_Window_46_requestAnimationFrame_95__95__95__95__95_API_95__95_Web_95__95_HTML_95__95_Window_95__95_idr_95_53_95_10_95_case$0 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 13] = new i$CON(1,[i$valstack[i$valstack_base + 13]],null,null);
  i$ret = new i$CON(65780,[i$valstack[i$valstack_base + 11],i$valstack[i$valstack_base + 12],i$valstack[i$valstack_base + 13]],_idris__123_APPLY0_125_$65780,null);
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
  i$valstack[i$valstack_base + 12] = i$CON$65658;
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
  i$valstack[i$valstack_base + 5] = new i$CON(65764,[i$valstack[i$valstack_base + 1]],_idris__123_APPLY0_125_$65764,null);
  i$valstack[i$valstack_top] = i$valstack[i$valstack_base + 4];
  i$valstack[i$valstack_top + 1] = i$valstack[i$valstack_base + 5];
  i$SLIDE(2);
  i$valstack_top = i$valstack_base + 2;
  i$CALL(_idris__123_APPLY0_125_,[oldbase]);
}
var _idris_IdrisScript_46_typeOf_95_IdrisScript_95__95_idr_95_46_95_8_95_case$10 = function(oldbase,myoldbase){
  i$valstack[i$valstack_base + 4] = i$ret;
  i$valstack[i$valstack_base + 5] = new i$CON(65669,[i$valstack[i$valstack_base]],_idris__123_APPLY0_125_$65669,null);
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
  i$valstack[i$valstack_base + 6] = i$CON$1;
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
var i$CON$0 = new i$CON(0,[],null,null);
var i$CON$1 = new i$CON(1,[],null,null);
var i$CON$2 = new i$CON(2,[],null,null);
var i$CON$3 = new i$CON(3,[],null,null);
var i$CON$4 = new i$CON(4,[],null,null);
var i$CON$5 = new i$CON(5,[],null,null);
var i$CON$6 = new i$CON(6,[],null,null);
var i$CON$65658 = new i$CON(65658,[],_idris__123_APPLY0_125_$65658,null);
var i$CON$65659 = new i$CON(65659,[],_idris__123_APPLY0_125_$65659,null);
var i$CON$65660 = new i$CON(65660,[],_idris__123_APPLY0_125_$65660,null);
var i$CON$65661 = new i$CON(65661,[],_idris__123_APPLY0_125_$65661,null);
var i$CON$65662 = new i$CON(65662,[],_idris__123_APPLY0_125_$65662,null);
var i$CON$65664 = new i$CON(65664,[],_idris__123_APPLY0_125_$65664,null);
var i$CON$65667 = new i$CON(65667,[],_idris__123_APPLY0_125_$65667,null);
var i$CON$65668 = new i$CON(65668,[],_idris__123_APPLY0_125_$65668,null);
var i$CON$65670 = new i$CON(65670,[],_idris__123_APPLY0_125_$65670,null);
var i$CON$65671 = new i$CON(65671,[],_idris__123_APPLY0_125_$65671,null);
var i$CON$65672 = new i$CON(65672,[],_idris__123_APPLY0_125_$65672,null);
var i$CON$65673 = new i$CON(65673,[],_idris__123_APPLY0_125_$65673,null);
var i$CON$65674 = new i$CON(65674,[],_idris__123_APPLY0_125_$65674,null);
var i$CON$65676 = new i$CON(65676,[],_idris__123_APPLY0_125_$65676,null);
var i$CON$65677 = new i$CON(65677,[],_idris__123_APPLY0_125_$65677,null);
var i$CON$65678 = new i$CON(65678,[],_idris__123_APPLY0_125_$65678,null);
var i$CON$65679 = new i$CON(65679,[],_idris__123_APPLY0_125_$65679,null);
var i$CON$65680 = new i$CON(65680,[],_idris__123_APPLY0_125_$65680,null);
var i$CON$65681 = new i$CON(65681,[],_idris__123_APPLY0_125_$65681,null);
var i$CON$65683 = new i$CON(65683,[],_idris__123_APPLY0_125_$65683,null);
var i$CON$65684 = new i$CON(65684,[],_idris__123_APPLY0_125_$65684,null);
var i$CON$65685 = new i$CON(65685,[],_idris__123_APPLY0_125_$65685,null);
var i$CON$65686 = new i$CON(65686,[],_idris__123_APPLY0_125_$65686,null);
var i$CON$65687 = new i$CON(65687,[],_idris__123_APPLY0_125_$65687,null);
var i$CON$65689 = new i$CON(65689,[],_idris__123_APPLY0_125_$65689,null);
var i$CON$65690 = new i$CON(65690,[],_idris__123_APPLY0_125_$65690,null);
var i$CON$65691 = new i$CON(65691,[],_idris__123_APPLY0_125_$65691,null);
var i$CON$65693 = new i$CON(65693,[],_idris__123_APPLY0_125_$65693,null);
var i$CON$65694 = new i$CON(65694,[],_idris__123_APPLY0_125_$65694,null);
var i$CON$65696 = new i$CON(65696,[],_idris__123_APPLY0_125_$65696,null);
var i$CON$65697 = new i$CON(65697,[],_idris__123_APPLY0_125_$65697,null);
var i$CON$65698 = new i$CON(65698,[],_idris__123_APPLY0_125_$65698,null);
var i$CON$65699 = new i$CON(65699,[],_idris__123_APPLY0_125_$65699,null);
var i$CON$65700 = new i$CON(65700,[],_idris__123_APPLY0_125_$65700,null);
var i$CON$65702 = new i$CON(65702,[],_idris__123_APPLY0_125_$65702,null);
var i$CON$65703 = new i$CON(65703,[],_idris__123_APPLY0_125_$65703,null);
var i$CON$65704 = new i$CON(65704,[],_idris__123_APPLY0_125_$65704,null);
var i$CON$65705 = new i$CON(65705,[],_idris__123_APPLY0_125_$65705,null);
var i$CON$65707 = new i$CON(65707,[],_idris__123_APPLY0_125_$65707,null);
var i$CON$65708 = new i$CON(65708,[],_idris__123_APPLY0_125_$65708,null);
var i$CON$65709 = new i$CON(65709,[],_idris__123_APPLY0_125_$65709,null);
var i$CON$65710 = new i$CON(65710,[],_idris__123_APPLY0_125_$65710,null);
var i$CON$65712 = new i$CON(65712,[],_idris__123_APPLY0_125_$65712,null);
var i$CON$65714 = new i$CON(65714,[],_idris__123_APPLY0_125_$65714,null);
var i$CON$65715 = new i$CON(65715,[],_idris__123_APPLY0_125_$65715,null);
var i$CON$65716 = new i$CON(65716,[],_idris__123_APPLY0_125_$65716,null);
var i$CON$65717 = new i$CON(65717,[],_idris__123_APPLY0_125_$65717,null);
var i$CON$65718 = new i$CON(65718,[],_idris__123_APPLY0_125_$65718,null);
var i$CON$65720 = new i$CON(65720,[],_idris__123_APPLY0_125_$65720,null);
var i$CON$65721 = new i$CON(65721,[],_idris__123_APPLY0_125_$65721,null);
var i$CON$65722 = new i$CON(65722,[],_idris__123_APPLY0_125_$65722,null);
var i$CON$65723 = new i$CON(65723,[],_idris__123_APPLY0_125_$65723,null);
var i$CON$65724 = new i$CON(65724,[],_idris__123_APPLY0_125_$65724,null);
var i$CON$65725 = new i$CON(65725,[],_idris__123_APPLY0_125_$65725,null);
var i$CON$65727 = new i$CON(65727,[],_idris__123_APPLY0_125_$65727,null);
var i$CON$65728 = new i$CON(65728,[],_idris__123_APPLY0_125_$65728,null);
var i$CON$65729 = new i$CON(65729,[],_idris__123_APPLY0_125_$65729,null);
var i$CON$65730 = new i$CON(65730,[],_idris__123_APPLY0_125_$65730,null);
var i$CON$65731 = new i$CON(65731,[],_idris__123_APPLY0_125_$65731,null);
var i$CON$65733 = new i$CON(65733,[],_idris__123_APPLY0_125_$65733,null);
var i$CON$65734 = new i$CON(65734,[],_idris__123_APPLY0_125_$65734,null);
var i$CON$65735 = new i$CON(65735,[],_idris__123_APPLY0_125_$65735,null);
var i$CON$65736 = new i$CON(65736,[],_idris__123_APPLY0_125_$65736,null);
var i$CON$65737 = new i$CON(65737,[],_idris__123_APPLY0_125_$65737,null);
var i$CON$65738 = new i$CON(65738,[],_idris__123_APPLY0_125_$65738,null);
var i$CON$65740 = new i$CON(65740,[],_idris__123_APPLY0_125_$65740,null);
var i$CON$65741 = new i$CON(65741,[],_idris__123_APPLY0_125_$65741,null);
var i$CON$65742 = new i$CON(65742,[],_idris__123_APPLY0_125_$65742,null);
var i$CON$65743 = new i$CON(65743,[],_idris__123_APPLY0_125_$65743,null);
var i$CON$65744 = new i$CON(65744,[],_idris__123_APPLY0_125_$65744,null);
var i$CON$65747 = new i$CON(65747,[],_idris__123_APPLY0_125_$65747,null);
var i$CON$65748 = new i$CON(65748,[],_idris__123_APPLY0_125_$65748,null);
var i$CON$65749 = new i$CON(65749,[],_idris__123_APPLY0_125_$65749,null);
var i$CON$65750 = new i$CON(65750,[],_idris__123_APPLY0_125_$65750,null);
var i$CON$65751 = new i$CON(65751,[],_idris__123_APPLY0_125_$65751,null);
var i$CON$65752 = new i$CON(65752,[],_idris__123_APPLY0_125_$65752,null);
var i$CON$65754 = new i$CON(65754,[],_idris__123_APPLY0_125_$65754,null);
var i$CON$65755 = new i$CON(65755,[],_idris__123_APPLY0_125_$65755,null);
var i$CON$65756 = new i$CON(65756,[],_idris__123_APPLY0_125_$65756,null);
var i$CON$65757 = new i$CON(65757,[],_idris__123_APPLY0_125_$65757,null);
var i$CON$65759 = new i$CON(65759,[],_idris__123_APPLY0_125_$65759,null);
var i$CON$65760 = new i$CON(65760,[],_idris__123_APPLY0_125_$65760,null);
var i$CON$65761 = new i$CON(65761,[],_idris__123_APPLY0_125_$65761,null);
var i$CON$65762 = new i$CON(65762,[],_idris__123_APPLY0_125_$65762,null);
var i$CON$65768 = new i$CON(65768,[],_idris__123_APPLY0_125_$65768,null);
var i$CON$65770 = new i$CON(65770,[],_idris__123_APPLY0_125_$65770,null);
var i$CON$65771 = new i$CON(65771,[],_idris__123_APPLY0_125_$65771,null);
var i$CON$65781 = new i$CON(65781,[],_idris__123_APPLY0_125_$65781,null);
var i$CON$65782 = new i$CON(65782,[],_idris__123_APPLY0_125_$65782,null);
var i$CON$65784 = new i$CON(65784,[],_idris__123_APPLY0_125_$65784,null);
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