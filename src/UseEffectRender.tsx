import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type User = {
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

const fetchUser = async () => {
  const res: AxiosResponse<User> = await axios.get<User>(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  return res.data;
};

export const UseEffectRender = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = await fetchUser();
      setUser(user);
    };
    fetchUserData();
  }, []);

  if (!user) {
    return <div></div>;
  }

  return (
    <div>
      <p>
        I am {user.username} : {user.email}
      </p>
    </div>
  );
};
