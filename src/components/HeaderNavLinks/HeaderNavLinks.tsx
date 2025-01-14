export const HeaderNavLinks = ({ props }) => {
  return (
    <a className="font-bold" href={props.link}>
      {props.name}
    </a>
  );
};
