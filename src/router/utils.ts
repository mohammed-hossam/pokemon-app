// src/router/schema.ts
import { createRootRoute, createRoute, type AnyRoute } from '@tanstack/react-router';
import type { RootConfig, RouteConfig } from './types';

export function buildRouterTree(appRoutes: RootConfig) {
  const rootRoute = createRootRoute({
    component: appRoutes.component,
  });

  function buildChildren(parent: AnyRoute, cfgs: RouteConfig[]): AnyRoute[] {
    return cfgs.map((cfg) => {
      const route = createRoute({
        getParentRoute: () => parent,
        path: cfg.path!,
        component: cfg.component,
      });
      const kids = cfg.children ? buildChildren(route, cfg.children) : [];
      return kids.length ? route.addChildren(kids) : route;
    });
  }

  const children = buildChildren(rootRoute, appRoutes.children);
  const routeTree = rootRoute.addChildren(children);
  return { rootRoute, routeTree };
}
