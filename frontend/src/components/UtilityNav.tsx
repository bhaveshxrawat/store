import ChaosMeter from "./ChaosMeter";
import Button from "./ui/Button";
import { AddIcon, RefreshIcon } from "./ui/Icons";

function UtilityNav() {
  return (
    <div>
      <div className="max-w-app mx-auto flex justify-between items-center w-full">
        <ChaosMeter />
        <div className="flex gap-4 items-center">
          <Button>
            <AddIcon />
            add product
          </Button>
          <Button>
            <RefreshIcon />
            refresh
          </Button>
          <strong className="text-amulet-600">
            6 Item{"("}s{")"}
          </strong>
        </div>
      </div>
    </div>
  );
}
export default UtilityNav;
