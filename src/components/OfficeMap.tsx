import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OfficeMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isTokenSet, setIsTokenSet] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [55.2952, 25.2697], // Dubai coordinates
      zoom: 15,
    });

    // Add marker for office location
    new mapboxgl.Marker({ color: 'hsl(var(--primary))' })
      .setLngLat([55.2952, 25.2697])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<div><strong>Metro Tec Engineering</strong><br/>502 Al Tayer Building<br/>Al Raffa Area<br/>Burdubai, Dubai, UAE</div>'
        )
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    setIsTokenSet(true);
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!isTokenSet) {
    return (
      <div className="h-64 bg-muted rounded-lg flex flex-col items-center justify-center p-6">
        <h4 className="text-lg font-semibold text-foreground mb-4">Office Location Map</h4>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          To display the map, please enter your Mapbox public token below.<br/>
          Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
        </p>
        <form onSubmit={handleTokenSubmit} className="w-full max-w-sm space-y-3">
          <Input
            type="text"
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Load Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="h-64 rounded-lg overflow-hidden shadow-card">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default OfficeMap;