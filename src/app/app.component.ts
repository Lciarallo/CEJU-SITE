import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { FeedComponent } from "./feed/feed.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FeedComponent, FooterComponent]
})
export class AppComponent {
  title = 'CEJU-Site';
}
