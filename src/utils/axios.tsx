import axios, { AxiosInstance } from 'axios';
import { ASTNode, print } from 'graphql';
import { TypedQueryDocumentNode } from 'graphql';
import { DocumentType } from '@/gql';

class GraphqlApi {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3000/graphql',
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

const gqlApi = new GraphqlApi();

export default gqlApi;
