import { Options } from 'webdriver';
import { WebDriverLogTypes } from 'webdriver';

const direct: Options = {
  logLevel: 'error' as WebDriverLogTypes,
  protocol: 'http',
  port: 4444,
  hostname: 'localhost',
  path: '/wd/hub',
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--enable-automation',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--window-size=420,800',
        '--disable-notifications'
      ],
      // Mobile emulation - http://chromedriver.chromium.org/mobile-emulation
      // List of emulated devices - https://codesearch.chromium.org/chromium/src/third_party/blink/renderer/devtools/front_end/emulated_devices/module.json?g=0&l=453
      //
      // Option #1
      // mobileEmulation: {
      //   deviceName: 'iPhone 7'
      // }
      //
      // Option #2
      mobileEmulation: {
        deviceMetrics: {
          width: 412,
          height: 732,
          pixelRatio: 3.5
        },
        // list of user agents https://deviceatlas.com/blog/list-of-user-agent-strings
        userAgent: "Mozilla/5.0 (Linux; Android 8.0.0; Nexus 6P Build/OPP3.170518.006) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/%s Mobile Safari/537.36"

      }
    }
  },
};

export const selenoid: Options = {
  protocol: 'http',
  port: 4444,
  hostname: 'localhost',
  path: '/wd/hub',
  logLevel: 'error' as WebDriverLogTypes,
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [
        '--enable-automation',
        '--disable-gpu',
        '--disable-setuid-sandbox',
        '--window-size=420,800',
        '--disable-notifications',
      ],
      // Mobile emulation - http://chromedriver.chromium.org/mobile-emulation
      // List of emulated devices - https://codesearch.chromium.org/chromium/src/third_party/blink/renderer/devtools/front_end/emulated_devices/module.json?g=0&l=453
      //
      // Option #1
      // mobileEmulation: {
      //   deviceName: 'iPhone 7'
      // }
      //
      // Option #2
      mobileEmulation: {
        deviceMetrics: {
          width: 375,
          height: 812,
          pixelRatio: 3.0
        },
        // list of user agents https://deviceatlas.com/blog/list-of-user-agent-strings
        userAgent: "\n" +
          "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"

      }
    }
  }
};

export const options: Options = process.env.runningType === 'selenoid' ? selenoid : direct;
