"use client";

import Image from "next/image";
import icon from "../../public/icon.png";

export function TacComponent() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex aspect-square size-5 items-center justify-center rounded-md text-sidebar-primary-foreground">
        <Image src={icon} alt="TAC Logo" width={20} height={20} />
      </div>
      <span className="truncate font-semibold">Tac</span>
    </div>
  );
}
