WebdriverIO LambdaTest Service
==========

> A WebdriverIO service that manages local tunnel and job metadata for LambdaTest users.

## Installation


The easiest way is to keep `wdio-lambdatest-service` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-lambdatest-service": "^1.0.0"
  }
}
```

You can simple do it by:

```bash
npm install wdio-lambdatest-service --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here.](https://webdriver.io/docs/gettingstarted.html)


## Configuration

You should simply set `user` and `key` in your `wdio.conf.js` file. This service plugin provides supports for [LambdaTest Tunnel](https://www.lambdatest.com/support/docs/lambda-tunnel-modifiers/). Set `lambdaTunnel: true` also to activate this feature.

```js
// wdio.conf.js
export.config = {
  // ...
  services: ['lambdatest'],
  user: process.env.LAMBDATEST_USERNAME,
  key: process.env.LAMBDATEST_ACCESS_KEY,
  lambdaTunnel: true,
};
```

## Options

### user
Your Browserstack username.

Type: `String`

### key
Your Browserstack access key.

Type: `String`

### lambdaTunnel
Set this to true to enable routing connections from Browserstack cloud through your computer. You will also need to set `browserstack.local` to true in browser capabilities.

Type: `Boolean`<br>
Default: `false`

### lambdaTunnelOpts
Specified optional will be passed down to LambdaTest tunnel. See [this list](https://www.lambdatest.com/support/docs/lambda-tunnel-modifiers/) for details.

Type: `Object`<br>
Default: `{}`
