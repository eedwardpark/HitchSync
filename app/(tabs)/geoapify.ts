import axios from 'axios';

const GEOAPIFY_API_KEY = '05b0c2cf264647ec9086d7b060059740';
const ROUTING_API_URL = 'https://api.geoapify.com/v1/routing';

interface Coordinates {
  lat: number;
  lon: number;
}

interface RoutingResponse {
    features: Array<{
      type: string;
      properties: {
        mode: string;
        waypoints: Array<{
          location: [number, number];
          original_index: number;
        }>;
        units: string;
        distance: number;
        time: number;
      };
      geometry: {
        type: string;
        coordinates: Array<Array<[number, number]>>; // MultiLineString coordinates
      };
    }>;
  }

export const getRoute = async (
  waypoints: Coordinates[],
  mode: string = 'drive'
): Promise<RoutingResponse> => {
  try {
    const waypointsParam = waypoints
      .map((point) => `${point.lat},${point.lon}`)
      .join('|');
    const response = await axios.get<RoutingResponse>(ROUTING_API_URL, {
      params: {
        waypoints: waypointsParam,
        mode,
        apiKey: GEOAPIFY_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching route:', error);
    throw error;
  }
};

export const extractRouteCoordinates = (
    response: RoutingResponse
  ): Array<{ latitude: number; longitude: number }> => {
    const coordinates = response.features[0].geometry.coordinates;
    return coordinates.flat().map(([lon, lat]) => ({
      latitude: lat,
      longitude: lon,
    }));
  };