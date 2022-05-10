import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../types/user";

const fetchUser = async () => {
  const res = await axios.get<User>(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return res.data;
};

export const useUser = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await fetchUser();
      setUser(user);
    };
    fetchUserData();
  }, []);

  return { user };
};
