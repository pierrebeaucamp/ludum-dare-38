module Data.DOM.Element

import IdrisScript

%access public export
%default total

data Element : Type where
  NewElement : Ptr -> Element

getElementById : String -> JS_IO Element
getElementById id = map NewElement $
    jscall "document.getElementById(%0)" (String -> JS_IO Ptr) id
