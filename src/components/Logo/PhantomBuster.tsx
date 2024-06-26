import { useEffect, useState } from "react";
type SvgProps = {
  size?: number;
  className?: string;
};

enum DIRECTION {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

const PhantomLogoSVG = ({ size = 28, className = "" }: SvgProps) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //Generate numbers between -5 and 5
      const randomX = Math.random() * 10 - 5;
      const randomY = Math.random() * 10 - 5;
      const horizontalDirection =
        randomX >= 0 ? DIRECTION.RIGHT : DIRECTION.LEFT;
      const verticalDirection = randomY >= 0 ? DIRECTION.BOTTOM : DIRECTION.TOP;

      if (horizontalDirection === DIRECTION.LEFT) {
        setTranslateX(-0.5);
      } else {
        setTranslateX(0.5);
      }
      if (verticalDirection === DIRECTION.TOP) {
        setTranslateY(-0.5);
      } else {
        setTranslateY(0.5);
      }

      setOffsetX(randomX);
      setOffsetY(randomY);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      className={`${className}`}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      width={size}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
        transition: "transform 1.5s ease-out",
        willChange: "transform",
      }}
    >
      <path
        d='M11.986 24c-.836 0-1.403-.337-1.817-.582-.275-.163-.437-.255-.588-.255-.21 0-.364.046-.577.11-1.374.486-2.33-.144-3.127-1.013-.222-.227-.473-.484-.629-.536-1.26-.375-2.583-1.22-2.547-2.747v-2.815L.942 14.997a2.069 2.069 0 0 1-.84-1.089c-.275-.807.022-1.781.702-2.302.583-.465 1.181-.457 1.897-.443-.024-1.867-.07-3.81.73-5.539C4.823 2.272 8.325 0 11.986 0c3.649 0 7.164 2.272 8.556 5.624.8 1.728.754 3.675.73 5.539.724-.013 1.334-.029 1.924.443.68.52.977 1.495.702 2.302a2.07 2.07 0 0 1-.84 1.09l-1.786 1.184v2.795c-.009 1.527-1.115 2.41-2.61 2.765-.117.033-.404.33-.576.507-.81.89-1.744 1.507-3.13 1.024-.21-.061-.376-.11-.576-.11-.15 0-.31.091-.58.253-.412.247-.975.584-1.814.584z'
        fill='#3A3837'
      />
      <path
        d='M21.887 12h-1.46V9.21c0-4.624-3.778-8.373-8.44-8.373-4.662 0-8.441 3.749-8.441 8.372V12H2.113c-1.252 0-1.744 1.611-.702 2.3l2.135 1.415v3.262c0 1.116.902 1.6 1.97 1.953.843.28 1.406 1.675 2.532 1.675.562 0 .886-.28 1.533-.28.844 0 1.28.838 2.406.838 1.125 0 1.548-.837 2.393-.837.628 0 .983.279 1.546.279 1.125 0 1.713-1.472 2.532-1.675 1.126-.279 1.97-.837 1.97-1.953v-3.242l2.161-1.434c1.043-.69.55-2.301-.702-2.301z'
        fill='#fff'
      />
      <path
        d='M11.297 8.512c0 1.156-.63 2.093-1.407 2.093s-1.407-.937-1.407-2.093.63-2.093 1.407-2.093 1.407.937 1.407 2.093zm4.22 0c0 1.156-.63 2.093-1.406 2.093-.777 0-1.407-.937-1.407-2.093s.63-2.093 1.406-2.093c.777 0 1.407.937 1.407 2.093z'
        fill='#3A3837'
        style={{
          transform: `translate(${translateX}px, ${translateY}px)`,
          transition: "transform 1.5s ease-in",
          willChange: "transform",
        }}
      />
    </svg>
  );
};

export { PhantomLogoSVG };
