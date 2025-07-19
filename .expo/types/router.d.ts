/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/favorites` | `/favorites`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/films` | `/films`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/films/[filmId]` | `/films/[filmId]`, params: Router.UnknownInputParams & { filmId: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/favorites` | `/favorites`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/films` | `/films`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/films/[filmId]` | `/films/[filmId]`, params: Router.UnknownOutputParams & { filmId: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/favorites${`?${string}` | `#${string}` | ''}` | `/favorites${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/films${`?${string}` | `#${string}` | ''}` | `/films${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/favorites` | `/favorites`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/films` | `/films`; params?: Router.UnknownInputParams; } | `${'/(tabs)'}/films/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | `/films/${Router.SingleRoutePart<T>}${`?${string}` | `#${string}` | ''}` | { pathname: `${'/(tabs)'}/films/[filmId]` | `/films/[filmId]`, params: Router.UnknownInputParams & { filmId: string | number; } };
    }
  }
}
