module Data.DOM.Element

import IdrisScript

%access public export
%default total

data Element : Type where
  NewElement : Ptr -> Element

getById : String -> JS_IO Element
getById id = map NewElement $
    jscall "document.getElementById(%0)" (String -> JS_IO Ptr) id
