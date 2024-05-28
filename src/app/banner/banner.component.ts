import { Component } from '@angular/core';
import { FeedComponent } from "../feed/feed.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-banner',
    standalone: true,
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css',
    imports: [FeedComponent, FooterComponent]
})
export class BannerComponent {

}
