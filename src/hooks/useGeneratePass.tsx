import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@/store/AuthStore';
import { userApi } from '@/utils/axios';

const useGeneratePass = () => {
  const [status, setStatus] = useState('Press button to generate token');
  const { user } = useAuthStore();

  const generateMutaition = async () => {
    return userApi.generatePass({
      username: user?.username as string,
      id: user?.id as number,
    });
  };
  const mutation = useMutation(generateMutaition, {
    onSuccess: (data) => {
      setStatus(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const generateHandler = () => {
    if (user) {
      mutation.mutate();
    }
  };

  return {
    generateHandler,
    status
  };
};

export default useGeneratePass;
