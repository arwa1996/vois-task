export interface Polygon {
  type: string;
  properties: {
    ADMIN: string;
    ISO_A3: string;
    ISO_A2: string;
  };
}

export interface PolygonsData {
  country: PolygonsData;
  type: string;
  features: Polygon[];
}

export interface selectedPolygon {
  label: string;
  value: string;
  country: Polygon;
}
