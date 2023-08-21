// src/app/utils/util.ts

// All generic functinons should go here so that when we 
// create another project we don't need to do anything.

/**
 * generateRandomId
 * @param length 
 * @returns 
 */
export function generateRandomId(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
    return randomId;
}
