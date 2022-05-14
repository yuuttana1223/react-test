import { useUser } from "../hooks/useUser";

export const UseEffectRender = () => {
  const { user, isLoading, isError } = useUser();

  if (isLoading) {
    return <div>ローディング中...</div>;
  }

  if (isError) {
    return <div>エラーが発生しました</div>;
  }

  if (!user) {
    return <div>ユーザーが見つかりません</div>;
  }

  return (
    <div>
      <p>
        I am {user.username} : {user.email}
      </p>
    </div>
  );
};
