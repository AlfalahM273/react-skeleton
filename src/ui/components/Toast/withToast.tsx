import { useToast } from "./ToastProvider";

export const withToast = (Component: any) => {
  return (props: any) => {
    const toast = useToast();

    return <Component toast={toast} {...props} />;
  };
};
