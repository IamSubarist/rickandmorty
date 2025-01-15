import { Link } from "react-router-dom";
import { HeaderNavLinksProps } from "./lib/types";

export const HeaderNavLinks: React.FC<HeaderNavLinksProps> = ({ props }) => {
  return (
    <Link className="font-bold" to={props.link}>
      {props.name}
    </Link>
  );
};
