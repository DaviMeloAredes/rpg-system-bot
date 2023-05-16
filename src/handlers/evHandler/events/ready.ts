import { Client } from 'discord.js';
import logger from '../../../utils/logger/logger';

module.exports = {
  'id': 'ready',
  'run': (client: Client) => {
    const cliUser = client.user!;

    logger.log(`bot started up on ${cliUser.username}#${cliUser.discriminator}`, 'ready.ts');
  }
}