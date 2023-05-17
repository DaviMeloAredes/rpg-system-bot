import { ApplicationCommandType, CommandInteraction, CommandInteractionOption } from 'discord.js';

export interface Command {
  name: string;
  desc: string;
  type: ApplicationCommandType;
  options: CommandInteractionOption[];
  run: (interaction: CommandInteraction) => void;
}