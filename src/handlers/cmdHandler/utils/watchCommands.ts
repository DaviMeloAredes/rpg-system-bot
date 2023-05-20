import { Command } from '../../../interfaces/Command';
import { DiscordApiHandler } from '../../dcApiHandler/discordApiHandler';

export default async (files: Command[]) => {
  const dcApiHandler = new DiscordApiHandler();
  const appCmds: any[] = await dcApiHandler.get('commands');

  appCmds.forEach(async (cmd: any) => {
    const filter = files.filter((f) => {
      return f.name === cmd.name;
    });

    if (filter.length <= 0) {
      await dcApiHandler.delete('commands', `${cmd.id}`);
    }
  });
}