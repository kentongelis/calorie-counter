import data from './food.json' with { type: "json "};

export const food = data.map(item => item);