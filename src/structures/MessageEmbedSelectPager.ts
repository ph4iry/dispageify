import { MessageSelectMenu } from 'discord.js';

import { MessageEmbedPage } from './MessageEmbedPage';

export class MessageEmbedSelectPager {
  pages: MessageEmbedPage[];
  rawMenu: MessageSelectMenu;

  constructor() {
    this.pages = [];
    this.rawMenu = new MessageSelectMenu();
  }

  addPage(page: MessageEmbedPage) {
    this.pages.push(page);
    this.rawMenu.setOptions(this.#initComponents());
    return this;
  }

  #initComponents() {
    const res = [];
    for (const page of this.pages) {
      res.push({
        label: page.label,
        description: page.menuDescription,
        value: page.value,
      });
    }
    return res;
  }
}
