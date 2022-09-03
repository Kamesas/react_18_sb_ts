import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  PropsWithChildren,
  ReactElement,
} from "react";
import "./TextWithRef.scss";

type AsProp<C extends ElementType> = {
  as?: C;
};

type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentsProps<C extends ElementType, Props = {}> = Props &
  AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type Props<C extends ElementType, P> = PropsWithChildren<
  PolymorphicComponentsProps<C, P>
>;

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

type PolymorphicComponentsPropsWithRef<C extends ElementType, P> =
  PolymorphicComponentsProps<C, P> & { ref?: PolymorphicRef<C> };

type tText = {
  size?: "px18" | "px16" | "px14";
  color?: "red" | "black";
};

type TextComponent = <C extends ElementType>(
  props: PolymorphicComponentsPropsWithRef<C, tText>
) => ReactElement | null;

export const TextWithRef: TextComponent = forwardRef(
  <C extends ElementType = "div">(
    { children, className, as, size, color, ...rest }: Props<C, tText>,
    ref?: PolymorphicRef<C>
  ) => {
    const classes = ["TextWithRef", size, color, className].filter(
      (item) => !!item
    );
    const Component = as || "div";
    return (
      <Component {...rest} className={classes.join(" ")} ref={ref}>
        {children}
      </Component>
    );
  }
);
