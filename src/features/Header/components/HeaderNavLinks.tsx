import { HeaderNavLinksProps } from "./lib/types";

export const HeaderNavLinks: React.FC<HeaderNavLinksProps> = ({ props }) => {
  return (
    <a className="font-bold" href={props.link}>
      {props.name}
    </a>
  );
};
