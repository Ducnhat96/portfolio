import { HugeiconsIcon } from "@hugeicons/react";
import type { SVGProps } from "react";

const createHugeiconsSkillIcon = (icon: any, color: string) => {
  const HugeiconsSkillIcon = ({ className }: SVGProps<SVGSVGElement>) => (
    <HugeiconsIcon icon={icon} className={className} color={color} strokeWidth={1.8} />
  );

  return HugeiconsSkillIcon;
};

export { createHugeiconsSkillIcon };
