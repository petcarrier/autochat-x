export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  // 监听来自content script的消息
  browser.runtime.onMessage.addListener(async (message) => {
    if (message.action === 'open_side_panel') {
      const currentTab = await getCurrentTab();
      console.log('currentTab', currentTab);
      if (currentTab) {
        console.log('open_side_panel', currentTab);
        browser.sidePanel.setOptions({ tabId: currentTab.id, enabled: true, path: 'sidepanel.html' });
      }
    }
  });

  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await browser.tabs.query(queryOptions);
    return tab;
  }
});
