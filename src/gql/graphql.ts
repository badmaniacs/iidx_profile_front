/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type ArenaData = {
  __typename?: 'ArenaData';
  DP?: Maybe<Scalars['String']['output']>;
  SP?: Maybe<Scalars['String']['output']>;
};

export type ArenaDataInput = {
  DP: Scalars['String']['input'];
  SP: Scalars['String']['input'];
};

export type ClassData = {
  __typename?: 'ClassData';
  DP?: Maybe<Scalars['String']['output']>;
  SP?: Maybe<Scalars['String']['output']>;
};

export type ClassDataInput = {
  DP: Scalars['String']['input'];
  SP: Scalars['String']['input'];
};

export type CreateProfileInput = {
  arena: ArenaDataInput;
  class: ClassDataInput;
  djName: Scalars['String']['input'];
  iidxId: Scalars['String']['input'];
  musicData: MusicInput;
  qpro: Scalars['String']['input'];
  radar: RadarInput;
  region: Scalars['String']['input'];
  userId: Scalars['Float']['input'];
  ver: Scalars['Float']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type GetProfileInput = {
  id: Scalars['Float']['input'];
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Music = {
  __typename?: 'Music';
  clear_type: Scalars['String']['output'];
  difficulty: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  music_name: Scalars['String']['output'];
  play_type: Scalars['String']['output'];
  rank: Scalars['String']['output'];
  score: Scalars['String']['output'];
};

export type MusicData = {
  __typename?: 'MusicData';
  DP: Array<Music>;
  SP: Array<Music>;
};

export type MusicDataInput = {
  clear_type: Scalars['String']['input'];
  difficulty: Scalars['String']['input'];
  level: Scalars['Int']['input'];
  music_name: Scalars['String']['input'];
  play_type: Scalars['String']['input'];
  rank: Scalars['String']['input'];
  score: Scalars['String']['input'];
};

export type MusicInput = {
  DP: Array<MusicDataInput>;
  SP: Array<MusicDataInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  LoginUser?: Maybe<User>;
  createProfile: Profile;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationLoginUserArgs = {
  input: LoginUserInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['Float']['input'];
  input: UpdateUserInput;
};

export type Profile = {
  __typename?: 'Profile';
  arena: ArenaData;
  class: ClassData;
  createAt: Scalars['DateTime']['output'];
  djName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  iidxId: Scalars['String']['output'];
  musicData: MusicData;
  qpro: Scalars['String']['output'];
  radar: RadarData;
  region: Scalars['String']['output'];
  ver: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getRecentProfileById?: Maybe<Profile>;
  getUserById?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
};


export type QueryGetRecentProfileByIdArgs = {
  input: GetProfileInput;
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type Radar = {
  __typename?: 'Radar';
  CHARGE: Scalars['String']['output'];
  CHORD: Scalars['String']['output'];
  NOTES: Scalars['String']['output'];
  PEAK: Scalars['String']['output'];
  SCRATHCH: Scalars['String']['output'];
  SOFLAN: Scalars['String']['output'];
  TOTAL: Scalars['String']['output'];
};

export type RadarData = {
  __typename?: 'RadarData';
  DP?: Maybe<Radar>;
  SP?: Maybe<Radar>;
};

export type RadarDataInput = {
  CHARGE: Scalars['String']['input'];
  CHORD: Scalars['String']['input'];
  NOTES: Scalars['String']['input'];
  PEAK: Scalars['String']['input'];
  SCRATHCH: Scalars['String']['input'];
  SOFLAN: Scalars['String']['input'];
  TOTAL: Scalars['String']['input'];
};

export type RadarInput = {
  DP: Array<RadarDataInput>;
  SP: Array<RadarDataInput>;
};

export type UpdateUserInput = {
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  accessToken: Scalars['String']['output'];
  createAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  password: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: number, username: string, email: string } };

export type LoginUserMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', LoginUser?: { __typename?: 'User', id: number, email: string, username: string, createAt: any } | null };

export type GetRecentProfileByIdQueryVariables = Exact<{
  input: GetProfileInput;
}>;


export type GetRecentProfileByIdQuery = { __typename?: 'Query', getRecentProfileById?: { __typename?: 'Profile', createAt: any, djName: string, iidxId: string, qpro: string, region: string, ver: number, arena: { __typename?: 'ArenaData', SP?: string | null, DP?: string | null }, class: { __typename?: 'ClassData', SP?: string | null, DP?: string | null }, musicData: { __typename?: 'MusicData', SP: Array<{ __typename?: 'Music', clear_type: string, difficulty: string, level: number, music_name: string, rank: string, score: string }>, DP: Array<{ __typename?: 'Music', clear_type: string, difficulty: string, level: number, music_name: string, rank: string, score: string }> }, radar: { __typename?: 'RadarData', SP?: { __typename?: 'Radar', CHORD: string, CHARGE: string, NOTES: string, SCRATHCH: string, SOFLAN: string, PEAK: string, TOTAL: string } | null, DP?: { __typename?: 'Radar', CHORD: string, CHARGE: string, NOTES: string, SCRATHCH: string, SOFLAN: string, PEAK: string, TOTAL: string } | null } } | null };


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LoginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const GetRecentProfileByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRecentProfileById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRecentProfileById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"arena"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SP"}},{"kind":"Field","name":{"kind":"Name","value":"DP"}}]}},{"kind":"Field","name":{"kind":"Name","value":"class"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SP"}},{"kind":"Field","name":{"kind":"Name","value":"DP"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createAt"}},{"kind":"Field","name":{"kind":"Name","value":"djName"}},{"kind":"Field","name":{"kind":"Name","value":"iidxId"}},{"kind":"Field","name":{"kind":"Name","value":"musicData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clear_type"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"music_name"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clear_type"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"music_name"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"qpro"}},{"kind":"Field","name":{"kind":"Name","value":"radar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CHORD"}},{"kind":"Field","name":{"kind":"Name","value":"CHARGE"}},{"kind":"Field","name":{"kind":"Name","value":"NOTES"}},{"kind":"Field","name":{"kind":"Name","value":"SCRATHCH"}},{"kind":"Field","name":{"kind":"Name","value":"SOFLAN"}},{"kind":"Field","name":{"kind":"Name","value":"PEAK"}},{"kind":"Field","name":{"kind":"Name","value":"TOTAL"}}]}},{"kind":"Field","name":{"kind":"Name","value":"DP"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CHORD"}},{"kind":"Field","name":{"kind":"Name","value":"CHARGE"}},{"kind":"Field","name":{"kind":"Name","value":"NOTES"}},{"kind":"Field","name":{"kind":"Name","value":"SCRATHCH"}},{"kind":"Field","name":{"kind":"Name","value":"SOFLAN"}},{"kind":"Field","name":{"kind":"Name","value":"PEAK"}},{"kind":"Field","name":{"kind":"Name","value":"TOTAL"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"region"}},{"kind":"Field","name":{"kind":"Name","value":"ver"}}]}}]}}]} as unknown as DocumentNode<GetRecentProfileByIdQuery, GetRecentProfileByIdQueryVariables>;