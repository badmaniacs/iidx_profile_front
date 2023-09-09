import { graphql } from '@/gql';
import { useMutation } from '@tanstack/react-query';
import { gqlApi } from '@/utils/axios';
import useAuthStore from '@/store/AuthStore';
import useProfileStore from '@/store/ProfileDataStore';

const useGetProfile = () => {
  const { user } = useAuthStore();
  const { profileSet } = useProfileStore();

  const GetProfileDocument = graphql(`
    query getRecentProfileById($input: GetProfileInput!) {
      getRecentProfileById(input: $input) {
        arena {
          SP
          DP
        }
        class {
          SP
          DP
        }
        createAt
        djName
        iidxId
        musicData {
          SP {
            clear_type
            difficulty
            level
            music_name
            rank
            score
          }
          DP {
            clear_type
            difficulty
            level
            music_name
            rank
            score
          }
        }
        qpro
        radar {
          SP {
            CHORD
            CHARGE
            NOTES
            SCRATHCH
            SOFLAN
            PEAK
            TOTAL
          }
          DP {
            CHORD
            CHARGE
            NOTES
            SCRATHCH
            SOFLAN
            PEAK
            TOTAL
          }
        }
        region
        ver
      }
    }
  `);

  const GetProfileQuery = async (input: { id: number }) => {
    return gqlApi.execute(GetProfileDocument, input);
  };

  const mutation = useMutation(GetProfileQuery, {
    onSuccess: (data) => {
      profileSet(data.data.getRecentProfileById);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const updateHandler = () => {
    if (user) {
      mutation.mutate({ id: user.id });
    }
  };

  const initialUpdateHandler = (id: number) => {
    mutation.mutate({ id: id });
  };

  return {
    updateHandler,
    initialUpdateHandler,
    updateMutation: mutation,
  };
};

export default useGetProfile;
