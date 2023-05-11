// import type { User } from '@clerk/nextjs/dist/api';
type UserModel = {
  id: string;
  username: string;
  profileImageUrl: string;
  externalAccounts: {
    provider: string;
    username: string;
  }[];
};

export const filterUserForClient = (user: UserModel) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
    externalUsername:
      user.externalAccounts.find(
        (externalAccount) => externalAccount.provider === 'oauth_github'
      )?.username || null,
  };
};
