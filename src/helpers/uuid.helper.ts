import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';

export const uuid = (random = false): string => {
    return random ? uuidv1() : uuidv4();
};
