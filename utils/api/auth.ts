import fetcher from 'utils/api/fetcher';

export const signup = (data: { displayId: string; email: string; nickname: string; password: string }) => {
  return fetcher.post('/auth/signup', data);
};
