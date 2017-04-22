module Main

import API.Web.Console
import API.Web.HTML.Window
import IdrisScript
import Interfaces
import Scenes.Main.Scene

--step:
-- 1.:
  -- poll events
  -- handle events
-- 2. update model using action
-- 3. render
-- 4. recurse step

step : (Updatable ty, FrameRequest ty) => ty -> JS_IO ()
step scene = requestFrame scene step' where
  step' : (delta : Double) -> JS_IO ()
  step' delta = step !(update scene)
-- step scene = ?requestAnimationFrame step where
--   step : () -> JS_IO ()
--   step = ?pollEvents >>= update scene >>= ?render >>= step

main : JS_IO ()
main = case !defaultWindow of
  Nothing       => log "Couldn't get default window Object"
  (Just window) => case !(initSceneWith window) of
    Nothing      => log "Couldn't init main scene"
    (Just scene) => step scene

