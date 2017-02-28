/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';

function Html({ content, state, scriptHash, vendorHash, cssHash, styles }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <title>RyanCollins.io</title>
        <link href="https://fonts.googleapis.com/css?family=Oswald|Merriweather|Lobster" rel="stylesheet" type="text/css" />
        <script src={`${vendorHash}`} type="text/javascript" />
        <link href={`${cssHash}`} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script
          dangerouslySetInnerHTML={{ __html:
            `window.__APOLLO_STATE__=${serialize(state, { isJSON: true })};`,
          }}
          charSet="UTF-8"
        />
        <script src={`${scriptHash}`} charSet="UTF-8" />
      </body>
    </html>
  );
}

Html.propTypes = {
  scriptHash: PropTypes.string.isRequired,
  cssHash: PropTypes.string.isRequired,
  vendorHash: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  styles: PropTypes.string,
  state: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Html;
