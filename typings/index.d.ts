/**
 * Checks if a regex is safe to use in order to prevent catastrophic backtracking.
 * @param regex can be a RegExp object or just a string.
 * @param options Options for the check.
 * `limit` - maximum number of allowed repetitions in the entire regex. Default: `25`.
 */
export default function safeRegex(regex: string | RegExp, options?: Options): boolean;

export type Options = Partial<{
    /** Maximum number of allowed repetitions in the entire regex. Default `25` */
    limit: number
}> 