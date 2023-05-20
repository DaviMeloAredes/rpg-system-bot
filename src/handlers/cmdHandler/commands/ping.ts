import { CommandInteraction } from 'discord.js';

module.exports = {
  name: 'hi',
  desc: 'hi there',
  type: 1,
  run: (interaction: CommandInteraction) => {
    interaction.reply('Hi!');
  }
}