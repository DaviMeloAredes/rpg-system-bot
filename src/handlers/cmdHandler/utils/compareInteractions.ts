import { CommandInteraction } from 'discord.js';
import { DiscordApiHandler } from '../../dcApiHandler/discordApiHandler';
import { Command } from '../../../interfaces/Command';
import readFolder from './readFolder';

export default async (interaction: CommandInteraction) => {
  const dcApiHandler = new DiscordApiHandler();

  // getting the cmds from the folder
  await readFolder()
    .then((files) => {
      files.forEach((f) => {
        // if the names match
        if (f.name === interaction.commandName) {
          // so run the interaction
          f.run(interaction);
        }
      });
    });
}