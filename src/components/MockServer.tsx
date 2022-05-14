import { useUser } from "../hooks/useUser";
import { useMemo } from "react";

export const FETCH_USER_MESSAGE = "FETCH_USER";
export const LOADING_MESSAGE = "Loading...";
export const FAILED_MESSAGE = "Fetching Failed !";

export const MockServer = () => {
  const { user, isLoading, isError, fetchUser } = useUser(true);
  const buttonText = useMemo(
    () => (isLoading ? LOADING_MESSAGE : FETCH_USER_MESSAGE),
    [isLoading]
  );

  return (
    <div>
      <button onClick={fetchUser} disabled={isLoading || !!user}>
        {buttonText}
      </button>
      {user && <h3>{user?.username}</h3>}
      {isError && <p data-testid="error">{FAILED_MESSAGE}</p>}
    </div>
  );
};
