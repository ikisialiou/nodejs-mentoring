import { RequestHandler } from 'express';

export enum METHODS {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export interface RouterProps {
  method: METHODS;
  path: string;
  action: RequestHandler;
}

export const Router = (method: METHODS, path: string) => {
  return (target: Record<string, any>, propertyKey: string): void => {
    if (!Reflect.has(target, 'routes')) {
      Reflect.defineProperty(target, 'routes', { value: [] });
    }

    const routes = Reflect.get(target, 'routes');
    routes.push({
      method,
      path,
      action: Reflect.get(target, propertyKey),
    });

    Reflect.set(target, 'routes', routes);
  };
};
