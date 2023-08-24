import { graphql } from '@/gql';
import { LoginUserInput } from '@/gql/graphql';
import { useMutation } from '@tanstack/react-query';
import gqlApi from '@/utils/axios';

const useLoginUser = () => {
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
        return false;
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    loginMutation: mutation,
  };
};

export default useLoginUser;
