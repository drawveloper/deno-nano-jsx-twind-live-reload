/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import {
  tw,
  css,
  apply,
} from "../deps.ts";

const markdownStyle = css`
  h1 {
    ${apply`text-purple-700`}
  }
`

export const Markdown = (props: { markdown: string }) => (
  <div class={tw(markdownStyle)} innerHTML={{ __dangerousHtml: props.markdown }}></div>
)
