# 🆔 Ulid-Stamp

I couldn't find a page anywhere that let you paste in a ~~Discord snowflake~~ Revolt ID to get the timestamp.

So I ~~made~~ forked [snow-stamp](https://github.com/vegeta897/snow-stamp) and hosted a new one.

🔗 https://ulid-stamp.vercel.app/

👩‍💻 If you're a developer looking for the conversion code, check out [convert.js](src/convert.js)

## Contribute

Pull requests and issues are welcome!

## Develop

1. `npm install && npm run dev`
2. Write code
3. `npm run format && npm run test`

## Deploy

You can deploy a static site or run the included server. The benefit of using the server is that links containing snowflakes will show the timestamp in embeds when posted on services like Discord.

For either deployment, you must first build:

`npm run build`

To deploy a static site, copy or host the contents of `/build`

Otherwise, start the server:

`npm start`

The server runs on port 3000 by default, but you can set `PORT` in your environment variables. You can create a `.env` file in root to set this variable.

## Original Project

This project is a fork of [snow-stamp](https://github.com/vegeta897/snow-stamp) by [vegeta897](https://github.com/vegeta897) which is released under [MIT License](https://github.com/vegeta897/snow-stamp/blob/main/LICENSE)
