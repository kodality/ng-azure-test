// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  azureReturnUrl: 'https://alfresco-dev.intra.ttu.ee/zure/auth',
  tenant: '3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57',
  clientId: '142a3733-584a-47f9-acba-8e945d366935'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
