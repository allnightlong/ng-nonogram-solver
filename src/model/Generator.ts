import BitSet from 'bitset';

export class Generator {

  static candidates(data: number[][], len: number): BitSet[][] {
    const result = [];

    for (const s of data) {
      const list = [];

      const sum = s.reduce((x, y) => x + y);
      const prep = s.map(value => '1'.repeat(value));

      for (const sequence of this.sequences(prep, len - sum + 1)) {
        const bits = sequence.substring(1);
        console.log(bits);
        const bitSet = new BitSet(bits);
        list.push(bitSet);
      }

      result.push(list);
    }

    return result;
  }

  private static sequences(ones: string[], numZeros: number): string[] {
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
