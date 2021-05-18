const rand = () => Math.random().toString(36).substr(2)
export const generateToken = () => rand() + rand()