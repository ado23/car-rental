import { FC, lazy } from "react";

import { Paths } from "router/paths";

const AboutPage = lazy(() => import("pages/about/About"));
const ContactPage = lazy(() => import("pages/contact/Contact"));
const HomePage = lazy(() => import("pages/home/Home"));
const TestimonialsPage = lazy(() => import("pages/testimonials/Testimonials"));
const VehiclesPage = lazy(() => import("pages/vehicles/Vehicles"));

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
  TESTIMONIALS = "Testimonials",
  VEHICLES = "Vehicles"
}

const ROUTES: IRoute[] = [
  {
    name: RouteNames.HOME,
    path: Paths.HOME,
    Component: HomePage,
    ariaLabel: RouteNames.HOME
  },
  {
    name: RouteNames.ABOUT,
    path: Paths.ABOUT,
    Component: AboutPage,
    ariaLabel: RouteNames.ABOUT
  },
  {
    name: RouteNames.VEHICLES,
    path: Paths.VEHICLES,
    Component: VehiclesPage,
    ariaLabel: RouteNames.VEHICLES
  },
  {
    name: RouteNames.TESTIMONIALS,
    path: Paths.TESTIMONIALS,
    Component: TestimonialsPage,
    ariaLabel: RouteNames.TESTIMONIALS
  },
  {
    name: RouteNames.CONTACT,
    path: Paths.CONTACT,
    Component: ContactPage,
    ariaLabel: RouteNames.CONTACT
  }
];

export default ROUTES;
