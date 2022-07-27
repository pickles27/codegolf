type UserInfo = {
  username: string;
  id: string;
};

export const useUserData = (): UserInfo => ({
  username: "penelope1337",
  id: "fake-user-id-42",
});
