export interface Event {
  id: string;
  run: (args: unknown) => void;
}