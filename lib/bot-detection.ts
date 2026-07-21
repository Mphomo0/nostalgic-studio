/**
 * Heuristic-based bot detection utilities.
 */

const WORD_SPLIT_RE = /\s+/
const REPETITION_RE = /(.)\1{4,}/
const NON_ALPHA_RE = /[^a-zA-Z]/g
const VOWEL_RE = /[aeiou]/g

/**
 * Checks if a string looks like gibberish or random bot-generated text.
 * Heuristics used:
 * 1. Length of words (very long words without spaces).
 * 2. Character repetition.
 * 3. Vowel-to-consonant ratio.
 */
export function isGibberish(text: string): boolean {
  if (!text) return false;

  const words = text.split(WORD_SPLIT_RE);
  
  // 1. Check for excessively long words (typical in random strings)
  for (const word of words) {
    if (word.length > 25) return true;
  }

  // 2. Check for character repetition (e.g., "aaaaa" or "ababababab")
  if (REPETITION_RE.test(text)) return true;

  // 3. Vowel-to-consonant ratio (only for alphabetical words)
  const alphaText = text.replace(NON_ALPHA_RE, '').toLowerCase();
  if (alphaText.length > 10) {
    const vowels = alphaText.match(VOWEL_RE) || [];

    // Very low vowel count usually indicates random strings
    // Threshold: less than 10% vowels or less than 10% consonants (for very long random strings)
    const ratio = vowels.length / alphaText.length;
    if (ratio < 0.1 || ratio > 0.9) return true;
  }

  return false;
}

/**
 * Validates a math captcha answer.
 */
export function validateMathCaptcha(num1: number, num2: number, answer: string): boolean {
  const expected = num1 + num2;
  const actual = parseInt(answer, 10);
  return !isNaN(actual) && actual === expected;
}
