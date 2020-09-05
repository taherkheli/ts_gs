export interface Person {
    name : string;
    age?: number;  // ? makes it optional
    formatName: () => string;
}