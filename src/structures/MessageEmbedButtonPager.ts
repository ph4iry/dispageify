import { MessageButton, MessageActionRow, MessageComponentInteraction, ButtonInteraction } from 'discord.js';

import { MessageEmbedPage } from './MessageEmbedPage';

type PagingDirection = 0 | 1 | 'prev' | 'next';

interface DirectionValidators {
  functional: MessageButton;
  noPrev: MessageButton;
  noNext: MessageButton;
}

interface FunctionalRow {
  noPrev: MessageActionRow;
  fullyFunctional: MessageActionRow;
  noNext: MessageActionRow;
}

/** A MessageEmbedPager using button navigation */
export class MessageEmbedButtonPager {
  pages: MessageEmbedPage[];
  functionalRow: FunctionalRow;
  trackedInteraction: MessageComponentInteraction;
  currentPage: number;
  prevBtn: DirectionValidators;
  nextBtn: DirectionValidators;

  /** @param interaction The interaction to track */
  constructor(interaction: ButtonInteraction) {
    this.pages = [];
    this.prevBtn = {
      functional: new MessageButton()
        .setCustomId('prev_page')
        .setStyle('PRIMARY')
        .setLabel('Previous Page')
        .setEmoji('◀️'),
      noPrev: new MessageButton()
        .setCustomId('prev_page')
        .setStyle('PRIMARY')
        .setLabel('Previous Page')
        .setEmoji('◀️')
        .setDisabled(),
      noNext: new MessageButton().setCustomId('prev_page').setStyle('PRIMARY').setLabel('Previous Page').setEmoji('◀️'),
    };

    this.nextBtn = {
      noPrev: new MessageButton().setCustomId('next_page').setStyle('PRIMARY').setLabel('Next Page').setEmoji('▶️'),
      functional: new MessageButton().setCustomId('next_page').setStyle('PRIMARY').setLabel('Next Page').setEmoji('▶️'),
      noNext: new MessageButton()
        .setCustomId('next_page')
        .setStyle('PRIMARY')
        .setLabel('Next Page')
        .setEmoji('▶️')
        .setDisabled(),
    };

    this.functionalRow = {
      noPrev: new MessageActionRow().addComponents(this.prevBtn.noPrev, this.nextBtn.functional),
      fullyFunctional: new MessageActionRow().addComponents(this.prevBtn.functional, this.nextBtn.functional),
      noNext: new MessageActionRow().addComponents(this.prevBtn.functional, this.nextBtn.noNext),
    };

    this.trackedInteraction = interaction;
    this.currentPage = 0;
  }

  addPage(page: MessageEmbedPage) {
    this.pages.push(page);
    return this;
  }

  async updatePage(direction: PagingDirection) {
    switch (direction) {
      case 0 || 'prev':
        this.currentPage--;
        if (this.currentPage === 0) {
          await this.trackedInteraction.editReply({
            embeds: [this.pages[this.currentPage]],
            components: [this.functionalRow.noPrev],
          });
        } else {
          await this.trackedInteraction.editReply({
            embeds: [this.pages[this.currentPage - 1]],
            components: [this.functionalRow.fullyFunctional],
          });
        }
        break;
      case 1 || 'next':
        this.currentPage++;
        if (!this.pages[this.currentPage + 1]) {
          await this.trackedInteraction.editReply({
            embeds: [this.pages[this.currentPage]],
            components: [this.functionalRow.noNext],
          });
        } else {
          await this.trackedInteraction.editReply({
            embeds: [this.pages[this.currentPage + 1]],
            components: [this.functionalRow.fullyFunctional],
          });
        }
    }
  }
}
