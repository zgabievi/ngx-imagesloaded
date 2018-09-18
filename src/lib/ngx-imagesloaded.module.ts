import { NgModule } from '@angular/core';
import { NgxImagesloadedDirective } from './ngx-imagesloaded.directive';
import { NgxImagesloadedService } from './ngx-imagesloaded.service';

@NgModule({
  declarations: [NgxImagesloadedDirective],
  exports: [NgxImagesloadedDirective],
  providers: [NgxImagesloadedService]
})
export class NgxImagesloadedModule {}
