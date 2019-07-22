import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tina', loadChildren: './tina/tina.module#TinaPageModule' },
  { path: 'megumin', loadChildren: './megumin/megumin.module#MeguminPageModule' },
  { path: 'nakano', loadChildren: './nakano/nakano.module#NakanoPageModule' },
  { path: 'kotori', loadChildren: './kotori/kotori.module#KotoriPageModule' },
  { path: 'yosino', loadChildren: './yosino/yosino.module#YosinoPageModule' },
  { path: 'blois', loadChildren: './blois/blois.module#BloisPageModule' },
  { path: 'samsung', loadChildren: './samsung/samsung.module#SamsungPageModule' },
  { path: 'samsung1', loadChildren: './samsung1/samsung1.module#Samsung1PageModule' },
  { path: 'samsung2', loadChildren: './samsung2/samsung2.module#Samsung2PageModule' },
  { path: 'samsung3', loadChildren: './samsung3/samsung3.module#Samsung3PageModule' },
  { path: 'samsung4', loadChildren: './samsung4/samsung4.module#Samsung4PageModule' },
  { path: 'samsung5', loadChildren: './samsung5/samsung5.module#Samsung5PageModule' },
  { path: 'samsung6', loadChildren: './samsung6/samsung6.module#Samsung6PageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
