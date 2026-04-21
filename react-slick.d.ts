declare module "react-slick" {
  import * as React from "react";

  export interface Settings {
    className?: string;
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    centerMode?: boolean;
    dots?: boolean;
    draggable?: boolean;
    fade?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: "ondemand" | "progressive";
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    rows?: number;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeToSlide?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    waitForAnimate?: boolean;
    afterChange?: (currentSlide: number) => void;
  }

  export default class Slider extends React.Component<
    React.PropsWithChildren<Settings>
  > {
    slickNext(): void;
    slickPrev(): void;
    slickGoTo(index: number): void;
  }
}
