import axios, { AxiosInstance } from 'axios';
import { ASTNode, print } from 'graphql';

class GraphqlApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `/graphql`,
    });
  }

  async execute(query: ASTNode, input?: Record<string, any>) {
    const response = await this.client.post('', {
      query: print(query),
      variables: {
        input,
      },
    });
    return response.data;
  }
}

export const gqlApi = new GraphqlApi();

class UserApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: `${process.env.SERVER_URL}/users`,
    });
  }

  async generatePass(data: { username: string; id: number }) {
    const response = await this.client.post('/pass', data);

    return response.data;
  }
}

export const userApi = new UserApi();
