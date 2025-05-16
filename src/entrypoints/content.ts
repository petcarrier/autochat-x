export default defineContentScript({
  matches: ['*://*.google.com/*', '*://*.x.com/*', '*://*.twitter.com/*'],
  async main() {
    console.log('Hello content.');
    // 打开侧边栏
    if (navigator.userAgent.includes('Chrome')) {
      browser.runtime.sendMessage({ action: 'open_side_panel' });
    }
  },
});
