const lambdaTunnelLauncher = require('@lambdatest/node-tunnel');

class LambdaTestService {
  constructor(config) {
    this.config = config;
  }

  /**
   * modify config and launch lambdatest tunnel
   */
  onPrepare(config, capabilities) {
    if (!config.lambdaTunnel) {
      return;
    }

    this.lambdaTunnelOpts = {
      user: config.ltUser,
      key: config.ltKey,
      ...config.lambdaTunnelOpts,
    };

    this.lambdaTunnel = new lambdaTunnelLauncher();

    if (Array.isArray(capabilities)) {
      capabilities.forEach((capability) => {
        capability.tunnel = true;
        if (this.lambdaTunnelOpts.tunnelName) {
          capability.tunnelName = this.lambdaTunnelOpts.tunnelName;
        }
      });
    } else if (typeof capabilities === 'object') {
      capabilities.tunnel = true;
      if (this.lambdaTunnelOpts.tunnelName) {
        capabilities.tunnelName = this.lambdaTunnelOpts.tunnelName;
      }
    } else {
      throw TypeError('Capabilities should be an object or Array!');
    }
    console.log(capabilities)

    this.lambdaTunnel.start(this.lambdaTunnelOpts);
  }

  /**
   * shut down lambdatest tunnel
   */
  onComplete() {
    if (!this.lambdaTunnel || !this.lambdaTunnel.isRunning()) {
      return;
    }
    return this.lambdaTunnel.stop();
  }
}

module.exports = LambdaTestService;
