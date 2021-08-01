export interface Clickable {
  onClick?: <T>(params: T) => void;
}
