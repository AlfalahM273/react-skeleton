export const Container = ({ children }: any) => {
  return (
    <div className="min-h-screen flex flex-col p-2 sm:px-5 bg-normalBg dark:bg-mainBg">
      {children}
    </div>
  );
};
