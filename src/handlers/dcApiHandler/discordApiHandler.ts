import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { APP_ID, APP_TOKEN } = process.env;
 
export class DiscordApiHandler {
  private basisUrl: string;

  constructor () {
    this.basisUrl = `https://discord.com/api/v10/applications/${APP_ID}`;
  }

  public async post (target: string, data: any): Promise<AxiosResponse> {
    const url = `${this.basisUrl}/${target}`;

    const res = await axios({
      url,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${APP_TOKEN}`
      },
      data: {
        name: data.name,
        type: data.type,
        description: data.desc
      }
    });

    return res;
  }

  public async get (target: string): Promise<AxiosResponse> {
    const res = await axios({
      url: `https://discord.com/api/v10/applications/${APP_ID}/${target}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bot ${APP_TOKEN}`
      }
    });

    return res;
  }
}