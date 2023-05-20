import { CommandInteraction } from 'discord.js';
import compareInteractions from './utils/compareInteractions';
import loadCommands from './utils/loadCommands';

export class CommandHandler {
  public async loadCommands () {
    await loadCommands();
  }

  public async compareInteractions (interaction: CommandInteraction) {
    await compareInteractions(interaction);
  }
}