module Interfaces

%access public export

interface Updatable ty where
  -- TODO: update : u -> input -> u
  update : ty -> JS_IO ty

interface FrameRequest ty where
  requestFrame : ty -> (Double -> JS_IO ()) -> JS_IO ()

