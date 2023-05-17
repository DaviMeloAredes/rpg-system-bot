import logger from '../../utils/logger/logger';
import readFolder from './utils/readFolder';
import watchCommands from './utils/watchCommands';

export class CommandHandler {
  public async loadCommands () {
    const path = 'src/handlers/evHandler/events/**/**.ts';
    
    await readFolder(path)
      .then(async (files) => {
        await watchCommands(files);
      })
      .catch((e: Error) => {
        switch (e.message) {
          case 'undefined_props':
            logger.error(e);
            break;
        }
      });
  }
}