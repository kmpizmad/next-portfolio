interface Props {
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withTitle = <P extends Record<string, any>>(Component: React.ComponentType<P>): React.FC<P & Props> => {
  return function WithTitleWrapper({ title, ...props }: Props) {
    return (
      <div>
        <div className="text-xl font-light tracking-widest uppercase text-gray-600">{title}</div>
        <div className="w-full h-1 bg-gray-600"></div>
        <div className="p-4">
          <Component {...(props as P)} />
        </div>
      </div>
    );
  };
};

export default withTitle;

export type WithTitleProps = Props;
