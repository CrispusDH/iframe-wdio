import anyTest, { TestInterface } from 'ava';
import { remote, Element, BrowserObject } from 'webdriverio';
import { options } from '../utils/options';
import { tearDownWithoutUser } from '../utils/tearDown';

const test = anyTest as TestInterface<{browser: BrowserObject, status: string}>;

test.afterEach('this only runs when test succeeds', async (t) => {
  t.context.status = 'success';
});

test.afterEach.always(async (t) => {
  await tearDownWithoutUser(t);
});

let pool = [];
for (let number = 1; number < 6; number++) {
  pool.push(number);
}

pool.forEach((item: number) => {
  test(`check that element exists in frame, attempt #${item}`, async (t) => {
    t.context.browser = await remote(options);
    const browser = t.context.browser;
    await browser.url('https://the-internet.herokuapp.com/iframe');
    const frame = await browser.$('#mce_0_ifr');
    // console.log(frame);
    await browser.pause(1000);
    await browser.switchToFrame(frame);

    const element: Element = await browser.$('#tinymce');
    await element.waitForExist(5 * 1000);
  });
});
