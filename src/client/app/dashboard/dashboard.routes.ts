import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BlankPageRoutes } from './blank-page/index';
import { BSComponentRoutes } from './bs-component/index';
import { RTOComponentRoutes } from './rto/index';
import { CourierComponentRoutes } from './courier/index';
import { CancelledComponentRoutes } from './cancelled/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...BSComponentRoutes,
        ...RTOComponentRoutes,
        ...CourierComponentRoutes,
        ...CancelledComponentRoutes,
        ...BlankPageRoutes
    	]
  	}
];
