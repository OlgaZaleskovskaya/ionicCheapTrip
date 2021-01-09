import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PlacesPage } from "./places.page";

const routes: Routes = [
  {
    path: "tabs",
    component: PlacesPage,
    children: [
      {
        path: "discover",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./discover/discover.module").then(
                (m) => m.DiscoverPageModule
              ),
          },
          {
            path: "offer",
            loadChildren: () =>
              import("./discover/offer/offer.module").then((m) => m.OfferPageModule),
          },
          {
            path: ":pathId",
            loadChildren: () =>
              import("./discover/details/details.module").then((m) => m.DetailsPageModule),
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./map/map.module").then((m) => m.MapPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/places/tabs/discover",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/places/tabs/discover",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
