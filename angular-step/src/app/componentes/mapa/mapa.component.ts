import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

declare var google: any;

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './mapa.component.html'
})
export class MapaComponent {

  @ViewChild(GoogleMap) map!: GoogleMap;

  zoom = 12;
  center = { lat: -22.9068, lng: -43.1729 };

  tracarRota() {
    if (!this.map || !this.map.googleMap) return;

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    directionsRenderer.setMap(this.map.googleMap);

    directionsService.route({
      origin: 'Copacabana, Rio de Janeiro',
      destination: 'São João de Meriti, Rio de Janeiro',
      travelMode: google.maps.TravelMode.DRIVING
    }, (result: any, status: any) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  }
}