interface Func<T> {
  ([...args]: any, ownProps?: any): T;
}

export function returnType<T>(func: Func<T>) {
  return {} as T;
}
