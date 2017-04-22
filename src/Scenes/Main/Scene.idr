module Scenes.Main

import API.Web.Console
import API.Web.DOM.Document
import API.Web.DOM.DocumentType
import API.Web.DOM.Element
import API.Web.DOM.NonElementParentNode
import API.Web.HTML.HTMLElement
import API.Web.HTML.HTMLCanvasElement
import API.Web.HTML.Document
import API.Web.HTML.Window
import API.WebGL.Context
import IdrisScript
import Interfaces

%access public export

record Scene where
  constructor Init
  window : Window
  context : RenderingContext

FrameRequest Scene where
  requestFrame scene callback =
    requestAnimationFrame (window scene) callback >>= discardInt where
      discardInt : Maybe Int -> JS_IO ()
      discardInt n = pure ()

Updatable Scene where
  update scene = paint scene >>= \x => log "test" >>= \x => pure scene where
    getContext : Scene -> WebGLRenderingContext
    getContext scene = case (context scene) of
                            (FromWebGLRenderingContext ctx) => ctx

    paint : Scene -> JS_IO ()
    paint scene = clearColor (getContext scene) 1 0 0 1 >>= \x =>
                  clear (getContext scene) COLOR_BUFFER_BIT

export
initSceneWith : Window -> JS_IO $ Maybe Scene
initSceneWith window = case !context of
    Nothing                 => pure Nothing
    (Just renderingContext) => pure $ Just $ Init window renderingContext
  where
    elm : NonElementParentNode
    elm = FromDocument $ FromHTMLDocument (New "html" "0" "0") (document window)

    canvas : JS_IO $ Maybe HTMLCanvasElement
    canvas = case !(getElementById elm "canvas") of
      Nothing => log "Could not get canvas" >>= \x => pure Nothing
      (Just (FromHTMLElement (FromHTMLCanvasElement cElm))) => pure $ Just cElm
      (Just (FromHTMLElement (New _ self))) => htmlCanvasElementFromPointer self
      (Just (New _ self))                   => htmlCanvasElementFromPointer self

    context : JS_IO $ Maybe RenderingContext
    context = case !canvas of
      Nothing           => pure Nothing
      (Just canvasElem) => getContext canvasElem "webgl"

