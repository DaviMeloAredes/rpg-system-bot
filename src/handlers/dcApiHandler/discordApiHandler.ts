import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { APP_ID, APP_TOKEN } = process.env;

export class DiscordApiHandler {
  private baseUrl: string;

  constructor () {
    this.baseUrl = `https://discord.com/api/v10/applications/${APP_ID}/`;
  }

  public async post (target: string, data: unknown[]) {
    const res = await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${APP_TOKEN}`
      },
      data
    });

    return res;
  }
}