import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'samsung',
        children: [
          {
            path: '',
            loadChildren: '../samsung/samsung.module#SamsungPageModule'
          }
        ]
      },
      {
        path: 'samsung1',
        children: [
          {
            path: '',
            loadChildren: '../samsung1/samsung1.module#Samsung1PageModule'
          }
        ]
      },
      {
        path: 'samsung2',
        children: [
          {
            path: '',
            loadChildren: '../samsung2/samsung2.module#Samsung2PageModule'
          }
        ]
      },
      {
        path: 'samsung3',
        children: [
          {
            path: '',
            loadChildren: '../samsung3/samsung3.module#Samsung3PageModule'
          }
        ]
      },
      {
        path: 'samsung4',
        children: [
          {
            path: '',
            loadChildren: '../samsung4/samsung4.module#Samsung4PageModule'
          }
        ]
      },
      {
        path: 'samsung5',
        children: [
          {
            path: '',
            loadChildren: '../samsung5/samsung5.module#Samsung5PageModule'
          }
        ]
      },
      {
        path: 'samsung6',
        children: [
          {
            path: '',
            loadChildren: '../samsung6/samsung6.module#Samsung6PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
