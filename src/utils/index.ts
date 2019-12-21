export function debounce(func: Function, wait: number = 200) {
  let fisrtCalled = false;
  let timer: any;

  return (event: Event) => {
    if (!fisrtCalled) {
      func(event);
      fisrtCalled = true;
    }

    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      func(event);
      fisrtCalled = false;
    }, wait);
  };
}

export default {
  debounce,
};
