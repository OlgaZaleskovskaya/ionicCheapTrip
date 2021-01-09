export interface ICity {
  id: number;
  name: string;
  country?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };

}

export interface ICityForLine extends ICity {
  transportation_type: string;
  duration_minutes: string | number;
  euro_price: string | number;
}

export interface IFetchedPaths {
  direct_paths: IFetchedPathDetailsTransformed[];
  duration_minutes: string | number;
  euro_price: string | number;
  routeType: RouteType;
  imgUrl?: string;
}

export interface IFetchedPathDetails {
  id: string | number;
  transportation_type: TransportationType | string;
  euro_price: string | number;
  duration_minutes: string | number;
  from?: string ;
  from_id?: string | number;
  to?: string ;
  to_id?: string | number;
  icon?: string;
  imgUrl?: string;
}

export interface IFetchedPathDetailsTransformed extends IFetchedPathDetails {
cityFrom: ICity;
cityTo:ICity;

}

export type TransportationType =
  | "Bus"
  | "Flight"
  | "Train"
  | "Ride Share"
  | "Car Drive"
  | "Walk"
  | "Taxi"
  | "Shuttle"
  | "Car Ferry"
  | "Town Car";

export type RouteType = "Ground route" | "Mixed route" | "Flying route";
export type ErrorType =
  | "SLEEPING_SERVER"
  | "NO_RESULTS_FOR_SEARCH"
  | "BRAWSER_NOT_SUPPORTED"
  | "LATIN_CHARACTERES";

export enum Icons {
  FLIGHT = `<span class="material-icons">
    flight
    </span>`,
  BUS = `<span class="material-icons">
    directions_bus
    </span>`,
  TRAIN = `<span class="material-icons">
    directions_railway
    </span>`,
  CAR_FERRY = `<span class="material-icons">
    directions_boat
    </span>`,
  WALK = `<span class="material-icons">
    directions_walk
    </span>`,
  TOWN_CAR = `<span class="material-icons">
    directions_car
    </span>`,
  TAXI = `<span class="material-icons">
    local_taxi
    </span>`,
  SHUTTLE = `<span class="material-icons">
    shuttle
    </span>`,
  DRIVE_CAR = `<span class="material-icons">
    directions_car
    </span>`,
  RIDE_SHARE = `<span class="material-icons">
    groups
    </span>`,
}
export const transportIconMap = new Map();

transportIconMap.set("Bus", Icons.BUS);
transportIconMap.set("Train", Icons.TRAIN);
transportIconMap.set("Ride Share", Icons.RIDE_SHARE);
transportIconMap.set("Taxi", Icons.TAXI);
transportIconMap.set("Flight", Icons.FLIGHT);
transportIconMap.set("Town Car", Icons.TOWN_CAR);
transportIconMap.set("Drive Car", Icons.DRIVE_CAR);
transportIconMap.set("Shuttle", Icons.SHUTTLE);
transportIconMap.set("Car Ferry", Icons.CAR_FERRY);
transportIconMap.set("Walk", Icons.WALK);



