interface Props {
  children: "string";
}

export const Button = ({ children }: Props) => {
  return <button className="btn btn-primary">{children}</button>;
};