export interface ICity {
    id: number;
   name: string;
}
export interface IFetchedPaths{
    direct_paths:IFetchedPathDetails[]
   duration_minutes:  string | number,
   euro_price:  string | number,
   routeType: RouteType,
   imgUrl?: string

}

export interface IFetchedPathDetails{
    id:  string | number,
    transportation_type: TransportationType,
    euro_price: string | number,
    duration_minutes:  string | number,
    from: string,
    from_id:  string | number,
    to: string,
    to_id:  string | number,
    icon?: string,
    imgUrl?: string
}

export type TransportationType = 'Bus'|'Flight'|'Train'|'Ride Share'|'Car Drive'|'Walk'|'Taxi'| 'Shuttle';

export type RouteType = 'Ground route' | 'Mixed route' | 'Flying route';