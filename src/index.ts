export interface ISum {
  num1: number;
  num2: number;
}

export const sum = ({ num1, num2 }: ISum): number => num1 + num2;
