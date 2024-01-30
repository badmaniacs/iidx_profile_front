import { useMutation } from '@tanstack/react-query';
import { graphql } from '../gql';
import { CreateUserInput } from '@/gql/graphql';
import { useState } from 'react';
import { gqlApi } from '@/utils/axios';

const useCreateUser = () => {
  const [usernameDupError, setUsernameDupError] = useState(false);
  const [emailDupError, setEmailDupError] = useState(false);

  const createUserDocument = graphql(`
    mutation createUser($input: CreateUserInput!) {
      createUser(input: $input) {
        id
        username
        email
      }
    }
  `);

  const createUserMutation = async (input: CreateUserInput) => {
    return gqlApi.execute(createUserDocument, input);
  };

  const mutation = useMutation(createUserMutation, {
    onSuccess: (data) => {
      setUsernameDupError(false);
      setEmailDupError(false);
      if (data.errors) {
        const errorCode = data.errors[0].message.split(' ')[0];

        switch (errorCode) {
          case '20000': {
            setUsernameDupError(true);
            //DUPLICATE_USERNAME
            break;
          }
          case '20001': {
            setEmailDupError(true);
            //DUPLICATE_EMAIL
            break;
          }
          case '20002': {
            setUsernameDupError(true);
            setEmailDupError(true);
            //DUPLICATE_USERNAME_AND_EMAIL
            break;
          }
        }
      } 
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    },
  });

  return {
    createUser: mutation,
    isLoading: mutation.isLoading,
    error: mutation.error,
    usernameDupError,
    emailDupError,
  };
};

export default useCreateUser;
