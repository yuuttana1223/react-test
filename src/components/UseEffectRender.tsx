import { useUser } from "../hooks/useUser";

export const UseEffectRender = () => {
  const { user } = useUser();

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
