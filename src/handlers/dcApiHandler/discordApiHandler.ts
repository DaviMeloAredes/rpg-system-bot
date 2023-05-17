import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { APP_ID, APP_TOKEN } = process.env;

async function sendRequestToApi (method: string, url: string, data?: unknown) {
  let request: AxiosRequestConfig<any> = {};

  request.url = url;
  request.method = method;
  request.headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bot ${APP_TOKEN}`
  };
  
  if (data) {
    request.data = data;
  }

  const res: unknown[] = await axios(request);

  return res;
}

export class DiscordApiHandler {
  private baseUrl: string;

  constructor () {
    this.baseUrl = `https://discord.com/api/v10/applications/${APP_ID}/`;
  }

  public async post (target: string, data: unknown[]) {
    const url = `${this.baseUrl}/${target}`;
    const res = await sendRequestToApi('post', url, data);

    return res;
  }

  public async get (target: string): Promise<any[]> {
    const url = `${this.baseUrl}/${target}`;
    const res = await sendRequestToApi('get', url);

    return res;
  }

  public async delete (target: string, cmdId: string) {
    const url = `${this.baseUrl}/${target}/${cmdId}`;
    const res = await sendRequestToApi('delete', url);

    return res;
  }
}