module AppModel exposing (..)
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
  | Clear


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
      let
        title = Just model.input
      in
        ({ model | url = url, loading = False, title = title }, Cmd.none)
    Request (Err _) ->
      (model, Cmd.none)
    Clear ->
      initModel

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
