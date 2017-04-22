module Scenes.Main

import API.Web.Console
import API.Web.HTML.Window
import Interfaces

%access public export

record MainScene where
  constructor Init
  window : Window

FrameRequest MainScene where
  requestFrame scene callback =
    requestAnimationFrame (window scene) callback >>= discardInt where
      discardInt : Maybe Int -> JS_IO ()
      discardInt n = pure ()

Updatable MainScene where
  update scene = log "test" >>= \x => pure scene

