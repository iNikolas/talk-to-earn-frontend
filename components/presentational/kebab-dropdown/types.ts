export interface KebabDropdownProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  disabled?: boolean;
  options?: Array<React.ReactNode>;
}
