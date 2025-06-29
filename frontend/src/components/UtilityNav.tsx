import Button from "./ui/Button";
import { AddIcon, RefreshIcon } from "./ui/Icons";

function UtilityNav() {
  return (
    <div>
      <Button>
        <AddIcon />
        add product
      </Button>
      <Button>
        <RefreshIcon />
        refresh
      </Button>
    </div>
  );
}
export default UtilityNav;
