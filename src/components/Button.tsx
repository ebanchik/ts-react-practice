interface Props {
  children: string;
  color?: "primary" | "danger";
  onClick: () => void;
}

export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};
