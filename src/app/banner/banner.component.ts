import { Component } from '@angular/core';
import { FeedComponent } from "../feed/feed.component";
import { FooterComponent } from "../footer/footer.component";
import { MapaInfoComponent } from '../mapa-info/mapa-info.component';
import { NoticiaComponent } from '../noticia/noticia.component';

@Component({
    selector: 'app-banner',
    standalone: true,
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css',
    imports: [FeedComponent, FooterComponent, MapaInfoComponent, NoticiaComponent]
})
export class BannerComponent {

}
