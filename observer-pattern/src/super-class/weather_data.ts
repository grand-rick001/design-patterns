import { Observer, Subject } from "../changers/interfaces";

export class WeatherData implements Subject {
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;
  private list: Observer[] = [];

  registerObserver(o: Observer): void {
    this.list.push(o);
  }

  removeObserver(o: Observer): void {
    this.list = this.list.filter((observer) => observer !== o);
  }

  notifyObserver(): void {
    for (const observer of this.list) {
      observer.update();
    }
  }

  measurementsChanged(): void {
    this.notifyObserver();
  }

  getTemperature(): number {
    return this.temperature;
  }

  getHumidity(): number {
    return this.humidity;
  }

  getPressure(): number {
    return this.pressure;
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
