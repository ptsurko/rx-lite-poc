
export default function extend(Class, BaseClass) {
  let Func = function() { };
  Func.prototype = BaseClass.prototype;
  Class.prototype = new Func();
  Class.prototype.constructor = Class;
  Class.superclass = BaseClass.prototype;
}
