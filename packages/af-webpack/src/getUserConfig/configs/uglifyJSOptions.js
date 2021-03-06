import assert from 'assert';
import isPlainObject from 'is-plain-object';

export default function() {
  return {
    name: 'uglifyJSOptions',
    validate(val) {
      assert(
        isPlainObject(val) || typeof val === 'function',
        `The uglifyJSOptions config must be Plain Object or function, but got ${val}`,
      );
    },
  };
}
