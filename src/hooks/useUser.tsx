import axios from "axios";
import { useEffect, useState, useCallback } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type UserState = {
  user?: User;
  isLoading: boolean;
  isError: boolean;
};

const fetchUser = async () => {
  const res = await axios.get<User>(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return res.data;
};

export const useUser = (isEventHandler = false) => {
  const [userState, setUserState] = useState<UserState>({
    isLoading: false,
    isError: false,
  });
  const fetchUserData = useCallback(async () => {
    try {
      setUserState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      const user = await fetchUser();
      setUserState((prevState) => ({
        ...prevState,
        user,
        isLoading: false,
      }));
    } catch (error) {
      setUserState((prevState) => ({
        ...prevState,
        isError: true,
        isLoading: false,
      }));
    }
  }, []);

  useEffect(() => {
    if (isEventHandler) {
      return;
    }
    fetchUserData();
  }, []);

  return {
    user: userState.user,
    isLoading: userState.isLoading,
    isError: userState.isError,
    fetchUser: fetchUserData,
  };
};
