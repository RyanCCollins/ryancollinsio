module Main exposing (main)

import AppModel exposing (..)
import View exposing (view)

import Html exposing (Html)

main : Program Never Model Msg
main =
  Html.program
      { init = initModel
      , view = view
      , update = update
      , subscriptions = subscriptions
      }
