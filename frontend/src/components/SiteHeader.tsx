import { Link } from "react-router-dom";
import ChaoticKiranaIcon from "./ChaoticKiranaIcon";

const SiteHeader = () => {
  return (
    <header className="py-3">
      <div className="max-w-app mx-auto">
        <Link to="/" className="flex items-center gap-3 text-amulet-300">
          <ChaoticKiranaIcon />
          <span className="text-xl leading-4.5 font-semibold">
            chaotic
            <br />
            kirana
          </span>
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
