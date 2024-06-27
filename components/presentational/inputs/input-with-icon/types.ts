import { IconType } from "react-icons";

export interface InputWithIconProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  Icon?: IconType;
  error?: string;
}
