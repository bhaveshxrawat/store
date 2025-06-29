import { memo, SVGProps } from "react";

const ChaoticKiranaIcon = memo(function ChaoticKiranaIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="none"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.956 12.995v6.669c0 3.773 0 5.659 1.17 6.83 1.174 1.174 3.058 1.174 6.83 1.174h8c3.77 0 5.656 0 6.828-1.173 1.172-1.172 1.172-3.059 1.172-6.831v-6.67"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M18.956 21.657c-.912.81-2.364 1.334-4 1.334-1.636 0-3.088-.524-4-1.334m1.516-11.433c-.376 1.359-1.744 3.701-4.341 4.04-2.294.3-4.035-.701-4.479-1.12-.49-.34-1.607-1.427-1.88-2.104-.273-.68.045-2.15.273-2.75l.911-2.638c.223-.663.744-2.23 1.277-2.76.534-.53 1.614-.553 2.059-.553h9.341c2.404.034 7.662-.022 8.7 0 1.04.021 1.664.893 1.847 1.266 1.55 3.755 2.153 5.907 2.153 6.822-.202.978-1.04 2.821-4 3.633-3.076.843-4.82-.797-5.366-1.427m-7.76 0c.433.532 1.792 1.603 3.76 1.63 1.969.026 3.669-1.347 4.273-2.036.17-.204.54-.808.924-2.004"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
});

const AddIcon = memo(function AddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 12H7m5 5V7M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
});

const RefreshIcon = memo(function RefreshIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22 12l-3 3-3-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M11 20a8 8 0 118-8v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
});
type HeartIconProps = SVGProps<SVGSVGElement> & { filled?: boolean };

const HeartIcon = memo(function HeartIcon({
  filled = false,
  ...props
}: HeartIconProps) {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill={filled ? "currentColor" : "none"}
        d="M12 21l-1.45-1.295C5.4 15.125 2 12.103 2 8.395 2 5.374 4.42 3 7.5 3c1.74 0 3.41.795 4.5 2.05A6.037 6.037 0 0116.5 3C19.58 3 22 5.374 22 8.395c0 3.708-3.4 6.73-8.55 11.32L12 21z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
});

const TrashIcon = memo(function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 6H5m9-1h-4m-4 5v10c0 .667.333 1 1 1h10c.667 0 1-.333 1-1V10"
        stroke="currentColor"
      />
    </svg>
  );
});

export { AddIcon, RefreshIcon, TrashIcon, HeartIcon, ChaoticKiranaIcon };
