import React, { FC, ComponentProps } from "react";
import { ProductContextProvider } from "./modules/product/context";
import { StoreContextProvider } from "./modules/stores/context";

export const combineContext = (...components: FC[]): FC<any> => {
  const CombinedComponent = components.reduce(
    (AccumulatedComponents: any, CurrentComponent: any) => {
      const WrapperComponent: FC<any> = ({
        children,
      }: ComponentProps<FC<any>>): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };

      WrapperComponent.displayName = `Combined(${
        CurrentComponent.displayName || CurrentComponent.name || "Unknown"
      })`;

      return WrapperComponent;
    },
    ({ children }: any) => <>{children}</>
  );

  return CombinedComponent;
};

const providers = [ProductContextProvider, StoreContextProvider] as any;
export const AppContextProvider = combineContext(...providers);
