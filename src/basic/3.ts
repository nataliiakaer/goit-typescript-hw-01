// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let mixedType: string | number;
mixedType = "String";
mixedType = 12;

let literalType: "enable" | "disable";
literalType = "enable";
literalType = "disable";
