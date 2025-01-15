import { getLocations } from "../api/get-locations";
import LocationsLogo from "../assets/locations-logo.svg";
import { Items } from "../features/Content/components/Items";
import { Filters } from "../features/Locations/components/Filters";

export const Locations = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <img className="w-1/2" src={LocationsLogo} />
      <div className="flex flex-col gap-10">
        <Filters />
        <Items
          query={getLocations}
          renderItem={(location) => (
            <div
              key={location.id}
              className="shadow-md rounded p-4 w-52 h-36 flex flex-col justify-center text-center"
            >
              <p className="font-bold text-lg">{location.name}</p>
              <p>{location.dimension}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
};
