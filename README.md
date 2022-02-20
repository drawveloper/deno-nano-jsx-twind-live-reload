# Nano JSX with Deno and twind 

Deploy with Deno Deploy:

[![](./public/deno-deploy-button.svg)](https://dash.deno.com/new?url=https://raw.githubusercontent.com/FutureDrivenDev/deno-nano-jsx-twind-live-reload/main/src/server.ts)

This is the starter I wish I had two weeks ago. The simplest JSX setup you can use for Deno server side rendered apps.

- Deno with Oak server
- Tailwind via [Twind](https://twind.dev/)
- Lightning-fast LiveReload 
- Markdown rendering example with `apply` styles

### Getting started

Install [denon](https://deno.land/x/denon@2.5.0)

Create a `.env` file to enable live reload: 

`echo "ENABLE_LIVE_RELOAD=true" > .env`

`denon dev` 

### Note about JSX pragma

`/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/` in every jsx component is unfortunately required to deploy on Deno Deploy — they don't support import maps yet. 
