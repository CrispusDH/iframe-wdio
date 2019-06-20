import { ExecutionContext } from 'ava';
import * as fs from 'fs';
import { BrowserObject } from 'webdriverio';

export async function tearDownWithoutUser(
  t: ExecutionContext<{browser: BrowserObject, status: string}>
): Promise<void> {
  if (t.context.status !== 'success') {
    try {
      await screenshot(t);
    } catch (error) {
      await t.context.browser.deleteSession();
    }
  }
  await t.context.browser.deleteSession();
}

async function screenshot(t: ExecutionContext<{browser: BrowserObject, status: string}>
): Promise<void> {
  const dirScreenshots = './screenshots';
  createDir(dirScreenshots);
  await t.context.browser.saveScreenshot(`${dirScreenshots}/${t.title}.png`);
}

function createDir(name: string): void {
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
    if (!fs.existsSync(name)) {
      fs.mkdirSync(name);
    }
  }
}
