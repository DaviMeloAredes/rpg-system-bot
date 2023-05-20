import { Client } from 'discord.js';
import { CommandHandler } from '../../cmdHandler/commandHandler';
import logger from '../../../utils/logger/logger';

module.exports = {
  'id': 'ready',
  'run': async (client: Client) => {
    const clientUser = client.user!;
    const cmdHandler = new CommandHandler();

    // loading the commands when the bot is ready
    await cmdHandler.loadCommands()
      .catch((e) => logger.error(e, 'ready.ts'));

    logger.log(`bot started up on ${clientUser.username}#${clientUser.discriminator}`, 'ready.ts');
  }
}