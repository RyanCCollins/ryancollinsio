
-- -*- mode: elm; coding: utf-8 -*- --
module View exposing (view)

import AppModel exposing (Model, Msg(..))

import Html exposing (Html)
import Html.Attributes
import Html.Events exposing (onClick)

view : Model -> Html Msg
view model =
  let
    url = model.url
    input = Input
    submit = Submit
    clear = Clear
  in
    Html.section [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--justify-center grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-vertical-medium grommetux-section"] [
      Html.article [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large grommetux-article ghODnj"] [
        Html.div [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large"] [
          Html.h1 [] [Html.text "Giphy Search"]
          , Html.div [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large"] [
            Html.form [Html.Attributes.attribute "class" "form-inline centered"] [
              Html.div [Html.Attributes.attribute "class" "form-group"] [
                Html.input [Html.Attributes.attribute "class" "form-control", Html.Attributes.attribute "type" "text", Html.Attributes.attribute "placeholder" "Enter a search string", Html.Events.onInput ( input ), Html.Attributes.attribute "value" (model.input)] []
                , Html.button [Html.Attributes.attribute "type" "button", Html.Attributes.attribute "class" "grommetux-button grommetux-button--primary", Html.Events.onClick ( submit )] [Html.text "Submit"]
              ]
            ]
          ]
        ]
        , renderTitle model
        , Html.div [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large"] [
          Html.div [Html.Attributes.attribute "class" "loading-wrapper"] [
            loading model
          ]
        ]
        , Html.div [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large"] [
          Html.img [Html.Attributes.attribute "class" "img-responsive img-rounded", Html.Attributes.attribute "src" (url)] []
          , renderClear model clear
        ]
      ]
    ]

loading : Model -> Html Msg
loading model =
  case model.loading of
    True ->
      Html.div [Html.Attributes.attribute "class" "loading"] [Html.text "Loading..."]
    False ->
      Html.div [] []

renderTitle : Model -> Html Msg
renderTitle model =
  case model.title of
    Just val ->
      Html.div [Html.Attributes.attribute "class" "col-xs-12 centered"] [
        Html.h2 [Html.Attributes.attribute "class" "display-3"] [Html.text val]
      ]
    Nothing ->
      Html.div [] []

renderClear : Model -> Msg -> Html Msg
renderClear model clear =
  if model.url /= "" then
    Html.div [Html.Attributes.attribute "class" "grommetux-box grommetux-box--direction-column grommetux-box--align-center grommetux-box--responsive grommetux-box--pad-large"] [
      Html.button [Html.Attributes.attribute "type" "button", Html.Attributes.attribute "class" "grommetux-button grommetux-button--primary", Html.Events.onClick ( clear )] [Html.text "Clear"]
    ]
  else
    Html.div [] []
