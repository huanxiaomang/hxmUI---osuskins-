const buttonTypes = ['yes', 'no', 'default'] as const;
export type ButtonType = typeof buttonTypes[number];


