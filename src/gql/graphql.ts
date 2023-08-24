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
  DP: Scalars['String']['output'];
  SP: Scalars['String']['output'];
};

export type ArenaDataInput = {
  DP: Scalars['String']['input'];
  SP: Scalars['String']['input'];
};

export type ClassData = {
  __typename?: 'ClassData';
  DP: Scalars['String']['output'];
  SP: Scalars['String']['output'];
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
  radar: RadarInput;
  region: Scalars['String']['input'];
  userId: Scalars['Float']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
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
  radar: RadarData;
  region: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  getRecentProfileById?: Maybe<Profile>;
  getUserById?: Maybe<User>;
  getUserByUsername?: Maybe<User>;
};


export type QueryGetRecentProfileByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type Radar = {
  __typename?: 'Radar';
  CHARGE: Array<Scalars['Float']['output']>;
  CHORD: Array<Scalars['Float']['output']>;
  NOTES: Array<Scalars['Float']['output']>;
  PEAK: Array<Scalars['Float']['output']>;
  SCRATHCH: Array<Scalars['Float']['output']>;
  SOFLAN: Array<Scalars['Float']['output']>;
  TOTAL: Array<Scalars['Float']['output']>;
};

export type RadarData = {
  __typename?: 'RadarData';
  DP: Radar;
  SP: Radar;
};

export type RadarDataInput = {
  CHARGE: Array<Scalars['Float']['input']>;
  CHORD: Array<Scalars['Float']['input']>;
  NOTES: Array<Scalars['Float']['input']>;
  PEAK: Array<Scalars['Float']['input']>;
  SCRATHCH: Array<Scalars['Float']['input']>;
  SOFLAN: Array<Scalars['Float']['input']>;
  TOTAL: Array<Scalars['Float']['input']>;
};

export type RadarInput = {
  DP: RadarDataInput;
  SP: RadarDataInput;
};

export type UpdateUserInput = {
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
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


export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;