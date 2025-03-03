export interface IClock {
  id: string;
  name: string;
  timezone: number;
  createdAt: Date;
}

export interface IClockFormDate {
  name: string;
  timezone: number;
}
