import locationsData from "data/locations.json";
import vehiclesTypesData from "data/vehicles/vehicle-types.json";
import vehiclesData from "data/vehicles/vehicles.json";

const useGetData = () => {
  const locations = locationsData.locations.map(({ id, name }) => ({
    value: id,
    label: name
  }));

  const vehicles = vehiclesData.vehicles.map(({ id, brand }) => ({
    value: id,
    label: brand
  }));

  const vehicleTypes = vehiclesTypesData.vehicleTypes.map(({ id, name }) => ({
    value: id,
    label: name
  }));

  return { locations, vehicles, vehicleTypes };
};

export default useGetData;
