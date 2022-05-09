import { FunctionComponent } from "react";

type Framework = {
  id: number;
  text: string;
};

type Props = {
  frameworkList?: Framework[];
};

export const FrameworkList: FunctionComponent<Props> = ({ frameworkList }) => {
  if (!frameworkList || frameworkList.length === 0) {
    return <div>No data !</div>;
  }

  return (
    <div>
      <ul>
        {frameworkList.map((framework) => (
          <li key={framework.id}>{framework.text}</li>
        ))}
      </ul>
    </div>
  );
};
