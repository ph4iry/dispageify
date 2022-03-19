import { MessageEmbed } from 'discord.js';

/** Represents a MessageEmbed in a MessageEmbedPager. */
export class MessageEmbedPage extends MessageEmbed {
  label: string;
  menuDescription: string;
  value: string;
  rawEmbed: MessageEmbed;

  /** @param embed A (optional) message embed to be pageified. */
  constructor(embed?: MessageEmbed | undefined) {
    super(embed);

    this.rawEmbed = embed || new MessageEmbed();
    this.label = '';
    this.menuDescription = '';
    this.value = '';
  }

  setLabel(label: string) {
    this.label = label;
    return this;
  }

  setMenuDescription(desc: string) {
    this.menuDescription = desc;
    return this;
  }

  setMenuValue(value: string) {
    this.value = value;
    return this;
  }
}
