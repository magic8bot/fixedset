export class FixedSet<T> {
  private internalSet: Set<T>

  constructor(private readonly setSize: number, ...values: T[]) {
    this.internalSet = new Set(values)
  }

  get size() {
    return this.internalSet.size
  }

  public add(value: T) {
    if (this.size >= this.setSize) this.removeFirstValue()
    this.internalSet.add(value)
    return this
  }

  public clear() {
    this.internalSet.clear()
  }

  public delete(value: T) {
    return this.internalSet.delete(value)
  }

  public entries() {
    return this.internalSet.entries()
  }

  public forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any) {
    this.internalSet.forEach(callbackfn)
  }

  public has(value: T) {
    return this.internalSet.has(value)
  }

  public keys() {
    return this.internalSet.keys()
  }

  public values() {
    return this.internalSet.values()
  }

  private removeFirstValue() {
    this.delete(this.values().next().value)
  }
}
