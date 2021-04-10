import fetcher from 'utils/api/fetcher';

export const selectMember = async () => {
  const { data } = await fetcher.get('/member/profiles');
  return data.memberDto;
};
