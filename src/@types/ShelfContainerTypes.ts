export interface InputProps {

  min?: number;

  max?: number;

  increment?: number;

  decrement?: number

  onCountChange: (count: number) => void
}