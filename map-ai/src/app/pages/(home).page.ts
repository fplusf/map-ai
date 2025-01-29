import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

@Component({
  selector: 'map-ai-home',
  standalone: true,
  imports: [MapComponent, CommonModule],
  template: `
    <!-- TODO: Make an NX feature lib and extract this all -->
    <div class="relative h-screen w-full">
      <!-- View Toggle -->
      <div class="absolute top-4 right-4 z-10 bg-white rounded-lg shadow-lg">
        <div class="inline-flex rounded-lg p-1">
          <button
            class="px-4 py-2 rounded-lg"
            [class.bg-primary-500]="viewMode === 'map'"
            [class.text-white]="viewMode === 'map'"
            (click)="viewMode = 'map'"
          >
            Map
          </button>
          <button
            class="px-4 py-2 rounded-lg"
            [class.bg-primary-500]="viewMode === 'list'"
            [class.text-white]="viewMode === 'list'"
            (click)="viewMode = 'list'"
          >
            List
          </button>
        </div>
      </div>

      <!-- Map View -->
      <mgl-map
        *ngIf="viewMode === 'map'"
        [style]="
          'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
        "
        [zoom]="[9]"
        [center]="[101.6869, 3.139]"
        [canvasContextAttributes]="{ preserveDrawingBuffer: true }"
        class="h-full w-full"
      ></mgl-map>

      <!-- List View -->
      <div *ngIf="viewMode === 'list'" class="h-full w-full overflow-auto p-4">
        <!-- List view content will go here -->
      </div>

      <!-- Location Carousel -->
      <div class="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-4">
        <!-- Carousel Navigation Buttons -->
        <button
          (click)="scrollLeft()"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          (click)="scrollRight()"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Carousel Content -->
        <div
          #carouselContainer
          class="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
          style="scroll-behavior: smooth;"
        >
          <!-- Location Cards -->
          <div
            *ngFor="let i of [1, 2, 3, 4, 5]"
            class="flex-none w-80 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              [src]="'https://via.placeholder.com/320x180'"
              alt="Restaurant"
              class="w-full h-44 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-semibold">Strato The Troika Sky Dining</h3>
              <div class="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span class="text-green-500">Open now</span>
                <span>•</span>
                <span>Italian</span>
                <span>•</span>
                <span>$$$$</span>
              </div>
              <div class="flex items-center gap-1 mt-2">
                <span class="text-sm font-medium">3.9</span>
                <span class="text-sm text-gray-600">(155 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
        width: 100vw;
      }

      .scroll-smooth {
        scroll-behavior: smooth;
      }
    `,
  ],
})
export default class HomeComponent {
  viewMode: 'map' | 'list' = 'map';

  scrollLeft() {
    const container = document.querySelector('.scroll-smooth') as HTMLElement;
    if (container) {
      container.scrollBy({ left: -340, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const container = document.querySelector('.scroll-smooth') as HTMLElement;
    if (container) {
      container.scrollBy({ left: 340, behavior: 'smooth' });
    }
  }
}
