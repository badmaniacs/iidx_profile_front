import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '@/store/AuthStore';
import { userApi } from '@/utils/axios';

const useGeneratePass = () => {
  const [status, setStatus] = useState('Press button to generate token');
  const [canGenerate, setCanGenerate] = useState(true);
  const { user } = useAuthStore();

  useEffect(() => {
    const lastGeneratedPassTime = localStorage.getItem('lastGeneratedPassTime');
    if (lastGeneratedPassTime) {
      const currentTime = Date.now();
      const timeSinceLastGenerate =
        currentTime - parseInt(lastGeneratedPassTime);
      const thirtyMinutesInMillis = 30 * 60 * 1000; // 30 minutes in milliseconds

      if (timeSinceLastGenerate < thirtyMinutesInMillis) {
        setCanGenerate(false);
      } else {
        setStatus('Press button to generate token');
        setCanGenerate(true);
      }
    }
    const lastGeneratedPass = localStorage.getItem('lastGeneratedPass');
    if (lastGeneratedPass) {
      setStatus(lastGeneratedPass);
    }
  }, []);

  const generateMutaition = async () => {
    return userApi.generatePass({
      username: user?.username as string,
      id: user?.id as number,
    });
  };
  const mutation = useMutation(generateMutaition, {
    onSuccess: (data) => {
      setStatus(data);
      setCanGenerate(false);
      localStorage.setItem('lastGeneratedPass', data);
      localStorage.setItem('lastGeneratedPassTime', Date.now().toString());
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
    status,
    canGenerate,
  };
};

export default useGeneratePass;
