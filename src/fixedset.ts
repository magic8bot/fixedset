const setSymbol = Symbol.for('set')

export class FixedSet<T> {
  private [setSymbol]: Set<T>

  constructor(private readonly setSize: number, ...values: T[]) {
    this[setSymbol] = new Set(values)
  }

  get size() {
    return this[setSymbol].size
  }

  public add(value: T) {
    if (this.size >= this.setSize) this.removeFirstValue()
    this[setSymbol].add(value)
    return this
  }

  public clear() {
    this[setSymbol].clear()
  }

  public delete(value: T) {
    return this[setSymbol].delete(value)
  }

  public entries() {
    return this[setSymbol].entries()
  }

  public forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any) {
    this[setSymbol].forEach(callbackfn)
  }

  public has(value: T) {
    return this[setSymbol].has(value)
  }

  public keys() {
    return this[setSymbol].keys()
  }

  public values() {
    return this[setSymbol].values()
  }

  private removeFirstValue() {
    this.delete(this.values().next().value)
  }
}
