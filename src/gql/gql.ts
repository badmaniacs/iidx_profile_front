/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation createUser($input: CreateUserInput!) {\n      createUser(input: $input) {\n        id\n        username\n        email\n      }\n    }\n  ": types.CreateUserDocument,
    "\n    mutation LoginUser($input: LoginUserInput!) {\n      LoginUser(input: $input) {\n        id\n        email\n        username\n        createAt\n      }\n    }\n  ": types.LoginUserDocument,
    "\n    query getRecentProfileById($input: GetProfileInput!) {\n      getRecentProfileById(input: $input) {\n        arena {\n          SP\n          DP\n        }\n        class {\n          SP\n          DP\n        }\n        createAt\n        djName\n        iidxId\n        musicData {\n          SP {\n            clear_type\n            difficulty\n            level\n            music_name\n            rank\n            score\n          }\n          DP {\n            clear_type\n            difficulty\n            level\n            music_name\n            rank\n            score\n          }\n        }\n        qpro\n        radar {\n          SP {\n            CHORD\n            CHARGE\n            NOTES\n            SCRATHCH\n            SOFLAN\n            PEAK\n            TOTAL\n          }\n          DP {\n            CHORD\n            CHARGE\n            NOTES\n            SCRATHCH\n            SOFLAN\n            PEAK\n            TOTAL\n          }\n        }\n        region\n        ver\n      }\n    }\n  ": types.GetRecentProfileByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createUser($input: CreateUserInput!) {\n      createUser(input: $input) {\n        id\n        username\n        email\n      }\n    }\n  "): (typeof documents)["\n    mutation createUser($input: CreateUserInput!) {\n      createUser(input: $input) {\n        id\n        username\n        email\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation LoginUser($input: LoginUserInput!) {\n      LoginUser(input: $input) {\n        id\n        email\n        username\n        createAt\n      }\n    }\n  "): (typeof documents)["\n    mutation LoginUser($input: LoginUserInput!) {\n      LoginUser(input: $input) {\n        id\n        email\n        username\n        createAt\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getRecentProfileById($input: GetProfileInput!) {\n      getRecentProfileById(input: $input) {\n        arena {\n          SP\n          DP\n        }\n        class {\n          SP\n          DP\n        }\n        createAt\n        djName\n        iidxId\n        musicData {\n          SP {\n            clear_type\n            difficulty\n            level\n            music_name\n            rank\n            score\n          }\n          DP {\n            clear_type\n            difficulty\n            level\n            music_name\n            rank\n            score\n          }\n        }\n        qpro\n        radar {\n          SP {\n            CHORD\n            CHARGE\n            NOTES\n            SCRATHCH\n            SOFLAN\n            PEAK\n            TOTAL\n          }\n          DP {\n            CHORD\n            CHARGE\n            NOTES\n            SCRATHCH\n            SOFLAN\n            PEAK\n            TOTAL\n          }\n        }\n        region\n        ver\n      }\n    }\n  "): (typeof documents)["\n    query getRecentProfileById($input: GetProfileInput!) {\n      getRecentProfileById(input: $input) {\n        arena {\n          SP\n          DP\n        }\n        class {\n          SP\n          DP\n        }\n        createAt\n        djName\n        iidxId\n        musicData {\n          SP {\n            clear_type\n            difficulty\n            level\n            music_name\n            rank\n            score\n          }\n          DP {\n            clear_type\n            difficulty\n            level\n            music_name\n            rank\n            score\n          }\n        }\n        qpro\n        radar {\n          SP {\n            CHORD\n            CHARGE\n            NOTES\n            SCRATHCH\n            SOFLAN\n            PEAK\n            TOTAL\n          }\n          DP {\n            CHORD\n            CHARGE\n            NOTES\n            SCRATHCH\n            SOFLAN\n            PEAK\n            TOTAL\n          }\n        }\n        region\n        ver\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;