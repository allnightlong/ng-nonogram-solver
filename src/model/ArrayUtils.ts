export class ArrayUtils {

  static clean(input: string[][]): number[][] {
    return input.map(value => ArrayUtils.cleanStrings(value));
  }

  private static cleanStrings(input: string[]): number[] {
    return input.filter(value => value !== '').map(value => +value);
  }

}
