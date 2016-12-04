port module Main exposing (main)
import Html exposing (Html)
import Html.Attributes
import Html.Events exposing (onClick)
import Http
import Json.Decode as Decode

type alias Model =
  { input: String
  , url: String
  , loading: Bool
  , title: Maybe String
  }

type Msg
  = Input String
  | Submit
  | Request (Result Http.Error String)


initModel : (Model, Cmd Msg)
initModel =
  { input = ""
  , url = ""
  , loading = False
  , title = Nothing
  }
    ![]

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    Input value ->
      { model | input = value }
        ![]
    Submit ->
      ({ model | loading = True }, getRandomGiphy model)
    Request (Ok url) ->
      { model | url = url, loading = False, title = Just model.input, input = "" }
        ![]
    Request (Err _) ->
      (model, Cmd.none)


-- HTTP
getRandomGiphy: Model -> Cmd Msg
getRandomGiphy model =
  let
    url =
        "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" ++ model.input
  in
    Http.send Request (Http.get url decodeUrl)

decodeUrl : Decode.Decoder String
decodeUrl =
  Decode.at ["data", "image_url"] Decode.string

-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none


view : Model -> Html Msg
view model =
  let
    url = model.url
    input = Input
    submit = Submit
  in
    Html.div [Html.Attributes.attribute "class" "container centered full-height"] [
      Html.div [Html.Attributes.attribute "class" "row"] [
        Html.div [Html.Attributes.attribute "class" "col-xs-12"] [
          Html.div [Html.Attributes.attribute "class" "jumbotron"] [
            Html.h1 [Html.Attributes.attribute "class" "display-3 text-center pad-10 margin-20b"] [Html.text "Giphy Search"]
            , Html.form [Html.Attributes.attribute "class" "form-inline centered"] [
              Html.div [Html.Attributes.attribute "class" "form-group"] [
                Html.input [Html.Attributes.attribute "class" "form-control form-control-lg", Html.Attributes.attribute "type" "text", Html.Attributes.attribute "placeholder" "Enter a search string", Html.Events.onInput ( input ), Html.Attributes.attribute "value" (model.input)] []
                , Html.button [Html.Attributes.attribute "type" "button", Html.Attributes.attribute "class" "btn btn-primary", Html.Events.onClick ( submit )] [Html.text "Submit"
              ]]
            ]
          ]
        ]
        , renderTitle model
        , Html.div [Html.Attributes.attribute "class" "col-xs-12 centered"] [
          Html.div [Html.Attributes.attribute "class" "loading-wrapper"] [
            loading model
          ]
        ]
        , Html.div [Html.Attributes.attribute "class" "col-xs-12 centered"] [
          Html.img [Html.Attributes.attribute "class" "img-responsive img-rounded", Html.Attributes.attribute "src" (url)] []
        ]
      ]
    ]

loading : Model -> Html Msg
loading model =
  case model.loading of
    True ->
      Html.div [Html.Attributes.attribute "class" "loading"] [
        Html.progress [Html.Attributes.attribute "class" "progress progress-striped progress-animated", Html.Attributes.attribute "value" "25", Html.Attributes.attribute "max" "100"] []
      ]
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

main : Program Never Model Msg
main =
  Html.program
      { init = initModel
      , view = view
      , update = update
      , subscriptions = subscriptions
      }
