import { CanDeactivateFn } from '@angular/router';
import { CakeCartComponent } from './cake-cart/cake-cart.component';


export const canDeactivateGuard: CanDeactivateFn<CakeCartComponent> = (component:CakeCartComponent, currentRoute, currentState, nextState) => {
  return component.canDeactivate();
};

// currentRoute: This parameter provides information about the current route being deactivated. It includes properties such as path, url, queryParams, data, and more, which contain information about the current route's configuration and data.

// currentState: This parameter represents the current state of the router when the deactivation is triggered. It provides information about the current navigation state, including the URL, query parameters, and other relevant data.

// nextState: This parameter represents the state that the router is transitioning to after the deactivation. It provides information about the next navigation state, including the URL, query parameters, and other relevant data.