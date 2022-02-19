/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { tw } from "../deps.ts";

export const Comments = (props: { comments: string[] }) => (
  <ul>
    {props.comments.map((comment: string) => {
      return <li class={tw`font-serif`}>{comment}</li>
    })}
  </ul>
)

