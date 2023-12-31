import { graphql } from '@/gql';
import { LoginUserInput, LoginUserMutation } from '@/gql/graphql';
import { useMutation } from '@tanstack/react-query';
import { gqlApi } from '@/utils/axios';
import { useState } from 'react';

const useLoginUser = () => {
  const [loginError, SetLoginError] = useState(false);

  const LoginUserDocument = graphql(`
    mutation LoginUser($input: LoginUserInput!) {
      LoginUser(input: $input) {
        id
        email
        username
        createAt
      }
    }
  `);

  const LoginUserMutation = async (input: LoginUserInput) => {
    return gqlApi.execute(LoginUserDocument, input);
  };

  const mutation = useMutation(LoginUserMutation, {
    onSuccess: (data) => {
      const user = data.data.LoginUser;
      if (user) {
        return user;
      } else {
        SetLoginError(true);
        return false;
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    loginMutation: mutation,
    loginError
  };
};

export default useLoginUser;
