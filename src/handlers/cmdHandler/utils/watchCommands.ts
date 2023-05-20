import { Command } from '../../../interfaces/Command';
import logger from '../../../utils/logger/logger';
import dotenv from 'dotenv';
import { DiscordApiHandler } from '../../dcApiHandler/discordApiHandler'

dotenv.config();

const dcApiController = new DiscordApiHandler();

export default async (files: Command[]) => {
  // for all the files in folder
  files.forEach(async (f) => {
    const data = { 
      name: f.name,
      desc: f.desc,
      type: f.type
    };

    // posting the app cmd to the discord api
    await dcApiController.post('commands', data)
      .then(async (res) => {
        // ... and then logging
        logger.log(`loaded ${f.name}`);
      })
      .catch((e) => logger.error(e, 'watchCommands.ts'));
  });
}