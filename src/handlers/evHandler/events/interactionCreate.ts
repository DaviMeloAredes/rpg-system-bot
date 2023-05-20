import { CommandInteraction } from 'discord.js';
import { CommandHandler } from '../../cmdHandler/commandHandler';

module.exports = {
  'id': 'interactionCreate',
  'run': async (interaction: CommandInteraction) => {
    const cmdHandler = new CommandHandler();

    // when a interaction is detected, search for the specified interaction
    await cmdHandler.compareInteractions(interaction)
      .catch((e) => interaction.reply(':x: | An internal error ocurred.'));
  }
}