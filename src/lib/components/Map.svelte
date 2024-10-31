<script>
    import { onMount } from 'svelte';
  
    export let apiKey = 'AIzaSyBvL_ax990BMiHgkMR8Yp_qux_pEJqKAV4';
    export let center = { lat: 37.7749, lng: -122.4194 }; // Координаты центра
    export let zoom = 15; // Уровень масштабирования
  
    let mapElement;
  
    onMount(() => {
      // Загружаем Google Maps
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        initMap();
      }
    });
  
    function initMap() {
      new google.maps.Map(mapElement, {
        center,
        zoom,
      });
    }
  </script>
  
  <div bind:this={mapElement} class="map-container"></div>
  
  <style>
    .map-container {
      width: 100%;
      height: 310px;
    }
  </style>