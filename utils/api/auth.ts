import fetcher from 'utils/api/fetcher';

export const signup = async (signupData: { displayId: string; email: string; nickname: string; password: string }) => {
  const { data } = await fetcher.post('/auth/signup', signupData);
  return data;
};

export const signin = async (signInData: { email: string; password: string }) => {
  const { data } = await fetcher.post('/auth/signin', signInData);
  const { accessToken, grantType } = data;
  fetcher.defaults.headers.common.Authorization = `${grantType} ${accessToken}`;
  return data;
};
