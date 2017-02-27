# ng6-now-example

After a fresh `ng6 new app:web <app-name>` and make sure you've signed up with [now](https://zeit.co/now), one can simply run one of the following commands.

```shell
yarn add -D serve
```

or

```shell
npm install --save-dev serve
```

Then add the following 2 lines to you're `package.json`'s scripts entry

```json
"now-start": "cd build && serve -s ./",
"deploy": "now",
```

Then execute `npm run deploy` to deploy your web app and `now` will give you a URL where your web app will be deployed.
