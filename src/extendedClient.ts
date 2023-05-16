import { Client, IntentsBitField } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const flags = IntentsBitField.Flags;
// getting application id & token from env variables
const { APP_TOKEN } = process.env;

export class ExtendedClient {
  public client: Client;

  constructor () {
    // setting up client instance with needed intents (permissions)
    this.client = new Client(
      {
        intents: [
          flags.GuildMembers,
          flags.GuildMessages,
          flags.GuildModeration,
          flags.Guilds,
          flags.MessageContent
        ]
      }
    );
  }

  // bot login method
  public loginOn () {
    this.client.login(APP_TOKEN);
  }
}