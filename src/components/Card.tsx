// FC<ItemProps>, где ItemProps - интерфейс твоего компонента.
export const Item = ({ props }) => {
  return (
    <>
      <div className="border rounded-md w-52 overflow-hidden">
        <div className="rounded-t-md">
          <img className="w-full h-auto object-cover" src={props.image} />
        </div>
        <div className="p-3">
          <p className="text-lg font-bold">{props.name}</p>
          <p className="text-gray-400">{props.gender}</p>
        </div>
      </div>
    </>
  );
};
