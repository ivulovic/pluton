import { PropsWithChildren } from "react";

const Loading = (props: PropsWithChildren<{ isLoading: boolean }>): JSX.Element => {
  if (props.isLoading) {
    return <></>;
  }
  return <>{props.children}</>;
};

export default Loading;
