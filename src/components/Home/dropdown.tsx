import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className=" text-(--gameverse-primary) cursor-pointer" >
          <Languages className="h-6 w-6" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="
          w-40
          border-(--gameverse-primary)
          text-(--gameverse-primary)
          bg-black
        "
      >
        <DropdownMenuLabel className="border-b-(--gameverse-primary)">
          Language
        </DropdownMenuLabel>

        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("en")}>
          English
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => i18n.changeLanguage("es")}>
         Spanish
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}