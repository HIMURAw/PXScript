type Subscriber = () => void;

export function signal<T>(initialValue: T) {
  let value = initialValue;
  const subscribers = new Set<Subscriber>();

  function get() {
    const currentSubscriber = runningEffect;
    if (currentSubscriber) {
      subscribers.add(currentSubscriber);
    }
    return value;
  }

  function set(newValue: T) {
    if (value === newValue) return;
    value = newValue;
    subscribers.forEach((sub) => sub());
  }

  return { get, set };
}

let runningEffect: Subscriber | null = null;

export function effect(fn: Subscriber) {
  runningEffect = fn;
  fn();
  runningEffect = null;
}
