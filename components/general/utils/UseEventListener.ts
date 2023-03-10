import React from 'react';
import EventEmitter from './EventEmitter';

function useEventListener<T extends (...params: any) => void>(
  event: string,
  listener: T,
) {
  React.useEffect(() => {
    EventEmitter.addListener(event, listener);
    return () => {
      EventEmitter.removeListener(event, listener);
    };
  }, [event, listener]);
}

export function makeEventNotifier<P>(name: string) {
  return {
    name: name,
    notify: (param: P) => {
      EventEmitter.notify(name, param);
    },
    useEventListener: (listener: (param: P) => void) =>
      useEventListener(name, listener),
  };
}
