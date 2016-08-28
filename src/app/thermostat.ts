export class Thermostat {
  id: string;
  type: string;
  attributes: {
    temperature: number;
    location: string;
  }
  relationships: any;
}
