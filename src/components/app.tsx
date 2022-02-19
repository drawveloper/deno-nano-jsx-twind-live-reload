/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { 
  Helmet, 
  renderSSR, 
  html,
  setup,
  virtualSheet, 
  getStyleTag,
  tw,
} from "../deps.ts";
import { isLiveReloadEnabled } from "../config.ts";
import { Layout, State } from "./layout.tsx"

const lr = isLiveReloadEnabled()
const sheet = virtualSheet()
setup({sheet, preflight: false})

export const render = (state: State) => {
  sheet.reset()
  const bodyClass = tw`font-sans bg-gradient-to-r from-gray-900 to-green-900`
  const ssr = renderSSR(<Layout state={state} />);
  const { body, head, footer } = Helmet.SSR(ssr);
  const styleTag = getStyleTag(sheet)

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        ${styleTag}
        ${head.join("\n")}
        ${lr ? <script src="/livereload.js"></script> : ''}
      </head>
      <body class="${bodyClass}">
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
};
