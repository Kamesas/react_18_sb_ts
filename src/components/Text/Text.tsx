import {ComponentPropsWithoutRef, ElementType, PropsWithChildren} from "react"; // prettier-ignore
import "./Text.scss";

type AsProp<C extends ElementType> = { as?: C };
type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);
type PolymorphicComponentsProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type tText = {
  size?: "px18" | "px16" | "px14";
  color?: "red" | "black";
};

export const Text = <C extends ElementType>({
  children,
  color,
  size,
  className,
  as,
  ...rest
}: PropsWithChildren<PolymorphicComponentsProps<C, tText>>) => {
  const classes = ["Text", size, color, className].filter((item) => !!item);
  const Component = as || "div";
  return (
    <Component {...rest} className={classes.join(" ")}>
      {children}
    </Component>
  );
};

/**
* v2

*/
// type tColor = "res" | "green" | "black";

// type tTextProps<C extends ElementType> = {
//   as?: C;
//   color?: tColor;
// };

// type Props<C extends ElementType> = PropsWithChildren<tTextProps<C>> &
//   Omit<ComponentPropsWithoutRef<C>, keyof tTextProps<C>>;

// export const Text = <C extends ElementType = "div">({
//   children,
//   as,
//   ...rest
// }: Props<C>) => {
//   const Component = as || "div";
//   return <Component {...rest}>{children}</Component>;
// };

/**
 * v 1
 */

// type tTextProps<C extends ElementType> = {
//   children: ReactNode;
//   as?: C;
//   color?: tColor;
// } & ComponentPropsWithoutRef<C>;

// export const Text = <C extends ElementType = "div">({
//   children,
//   as,
//   ...rest
// }: tTextProps<C>) => {
//   const Component = as || "div";
//   return <Component {...rest}>{children}</Component>;
// };
