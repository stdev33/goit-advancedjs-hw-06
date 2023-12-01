/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<TTarget extends {}, TSource>(
  objA: TTarget,
  objB: TSource
): TTarget & TSource {
  return Object.assign(objA, objB);
}

export {};
