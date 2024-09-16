// У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
// Ваше завдання – використовувати Pick та generics для вказівки, що поля цих параметрів належать AllType. Функція compare повинна повертати AllType.

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number
// }

// function compare (top, bottom): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   }
// }

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType>(
  top: Pick<T, "name" | "color">,
  bottom: Pick<T, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

compare({ name: "Jack", color: "red" }, { position: 15, weight: 700 });
