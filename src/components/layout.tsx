/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { Helmet, tw } from "../deps.ts";
import { Comments } from "./comments.tsx";
import { Hi } from "./hi.tsx";
import { Markdown } from "./markdown.tsx";

export interface State {
  hello: string
  comments: string[]
  markdown: string
}

export const Layout = (props: { state: State }) => (
  <div class={tw`bg-green-50 bg-opacity-50 p-4 rounded-lg border-solid border-2 border-purple-100 border-opacity-50 visited:text-green-600`}>
    <Helmet>
      <title>Nano JSX SSR</title>
      <meta
        name="description"
        content="Server Side Rendered Nano JSX Application"
      />
    </Helmet>

    <Hi hello={props.state.hello} />

    <h2>Comments</h2>

    <div id="comments">
      <Comments comments={props.state.comments} />
    </div>

    <Markdown markdown={props.state.markdown} />

    Read more at <a href="https://futuredriven.blog" target="_blank">my blog.</a>
  </div>
);
