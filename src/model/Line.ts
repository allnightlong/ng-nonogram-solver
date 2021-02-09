export class Line {
  static sequences(ones: string[], numZeros: number): string[] {
    if (ones.length === 0) {
      return ['0'.repeat(numZeros)];
    }

    const result = [];

    for (let i = 1; i < numZeros - ones.length + 2; i++) {
      const skipOne = ones.slice(1, ones.length);
      for (const tail of this.sequences(skipOne, numZeros - i)) {
        result.push('0'.repeat(i) + ones[0] + tail);
      }
    }

    return result;
  }
}
