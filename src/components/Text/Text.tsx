import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react";

type tColor = "red" | "green" | "black";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentsProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type tText = {
  color?: tColor;
};

type Props<C extends ElementType, P> = PropsWithChildren<
  PolymorphicComponentsProps<C, P>
>;

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentsPropsWithRef<C extends ElementType, P> =
  PolymorphicComponentsProps<C, P> & { ref?: PolymorphicRef<C> };

type TextComponent = <C extends ElementType>(
  props: PolymorphicComponentsPropsWithRef<C, tText>
) => ReactElement | null;

export const Text: TextComponent = forwardRef(
  <C extends ElementType = "div">(
    { children, style, color, as, ...rest }: Props<C, tText>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || "div";
    const internalStyles = color ? { style: { ...style, color } } : {};
    return (
      <Component {...rest} {...internalStyles} ref={ref}>
        {children}
      </Component>
    );
  }
);

/**
 * v3
 */

// type tColor = "red" | "green" | "black";
// type AsProp<C extends ElementType> = {
//   as?: C;
// };

// type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

// type PolymorphicComponentsProps<C extends ElementType, Props = {}> = Props &
//   AsProp<C> &
//   Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// type tText = {
//   color?: tColor;
// };

// export const Text = <C extends ElementType = "div">({
//   children,
//   style,
//   color,
//   as,
//   ...rest
// }: PropsWithChildren<PolymorphicComponentsProps<C, tText>>) => {
//   const Component = as || "div";
//   const internalStyles = color ? { style: { ...style, color } } : {};
//   return (
//     <Component {...rest} {...internalStyles}>
//       {children}
//     </Component>
//   );
// };

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
