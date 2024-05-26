import { FC, lazy } from "react";

import { Paths } from "router/paths";

const AboutPage = lazy(() => import("pages/about/About"));
const ContactPage = lazy(() => import("pages/contact/Contact"));
const HomePage = lazy(() => import("pages/home/Home"));
const OurTeamPage = lazy(() => import("pages/our-team/OurTeam"));
const TestimonialsPage = lazy(() => import("pages/testimonials/Testimonials"));
const VehicleModelsPage = lazy(() => import("pages/vehicle-models/VehicleModels"));

export interface IRoute {
  name: string;
  path: string;
  Component: FC;
  ariaLabel: string;
}

export enum RouteNames {
  ABOUT = "About",
  CONTACT = "Contact",
  HOME = "Home",
  OUR_TEAM = "Our Team",
  TESTIMONIALS = "Testimonials",
  VEHICLE_MODELS = "Vehicle Models"
}

const ROUTES: IRoute[] = [
  {
    name: RouteNames.ABOUT,
    path: Paths.ABOUT,
    Component: AboutPage,
    ariaLabel: RouteNames.ABOUT
  },
  {
    name: RouteNames.CONTACT,
    path: Paths.CONTACT,
    Component: ContactPage,
    ariaLabel: RouteNames.CONTACT
  },
  {
    name: RouteNames.HOME,
    path: Paths.HOME,
    Component: HomePage,
    ariaLabel: RouteNames.HOME
  },
  {
    name: RouteNames.OUR_TEAM,
    path: Paths.OUR_TEAM,
    Component: OurTeamPage,
    ariaLabel: RouteNames.OUR_TEAM
  },
  {
    name: RouteNames.TESTIMONIALS,
    path: Paths.TESTIMONIALS,
    Component: TestimonialsPage,
    ariaLabel: RouteNames.TESTIMONIALS
  },
  {
    name: RouteNames.VEHICLE_MODELS,
    path: Paths.VEHICLE_MODELS,
    Component: VehicleModelsPage,
    ariaLabel: RouteNames.VEHICLE_MODELS
  }
];

export default ROUTES;
