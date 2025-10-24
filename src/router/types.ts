import type { RouteComponent } from '@tanstack/react-router';

export interface RouteConfig {
  path?: string;
  id?: string;
  component?: RouteComponent;
  children?: RouteConfig[];
}

export type RootConfig = Omit<RouteConfig, 'path'> & {
  children: RouteConfig[];
  component?: RouteComponent;
};
