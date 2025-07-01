import { useState } from "react";
import {
  FireIcon,
  SideEyeIcon,
  SleepingFaceIcon,
  YawningFaceIcon,
  ZanyFaceIcon,
} from "./ui/Icons";
import { twMerge } from "tailwind-merge";

type ChaosMeterProps = {
  showVal?: boolean;
};

function ChaosMeter({ showVal = false }: ChaosMeterProps) {
  const [value, setValue] = useState(10);
  const maxChaos = 50;
  const chaosPercentage = Math.min((value / maxChaos) * 100, 100);
  return (
    <div className="flex items-center gap-3">
      <div
        className={twMerge(
          "w-48 bg-amulet-50 h-4",
          showVal &&
            "flex items-center justify-center before:content-[attr(aria-valuenow)] before:font-semibold before:-translate-y-4.5",
          showVal && chaosPercentage > 45 ? "text-amulet-50" : "text-amulet-500"
        )}
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={chaosPercentage}
        aria-label="chaos meter"
        style={{
          backgroundImage: `linear-gradient( to right, var(--color-amulet-600) ${chaosPercentage}%, var(--color-amulet-50) 0 )`,
        }}
      ></div>
      <span className="text-amulet-600">
        {chaosPercentage < 20 ? (
          <SleepingFaceIcon />
        ) : chaosPercentage < 40 ? (
          <YawningFaceIcon />
        ) : chaosPercentage < 60 ? (
          <SideEyeIcon />
        ) : chaosPercentage < 80 ? (
          <ZanyFaceIcon />
        ) : (
          <FireIcon />
        )}
      </span>
    </div>
  );
}
export default ChaosMeter;
