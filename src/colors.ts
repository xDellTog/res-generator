/**
 * An enum with allowed colors to use in {@link Colorize}.
 * ```
 * Default, Black, Red, Green, Yellow, Blue, Magenta, Cyan, White, Gray, BrightRed, BrightGreen, BrightYellow, BrightBlue, BrightMagenta, BrightCyan, BrightWhite.
 * ```
 */
export enum Colors {
  Default = 0,
  Black = 30,
  Red = 31,
  Green = 32,
  Yellow = 33,
  Blue = 34,
  Magenta = 35,
  Cyan = 36,
  White = 37,
  Gray = 90,
  BrightRed = 91,
  BrightGreen = 92,
  BrightYellow = 93,
  BrightBlue = 94,
  BrightMagenta = 95,
  BrightCyan = 96,
  BrightWhite = 97,
}

/**
 * Class with static methods to colorize console string.
 */
export default class Colorize {
  /**
   * Colorize console string method.
   * @param value string
   * @param color {@link Colors}
   * @returns string
   */
  static colorize(value: string, color: Colors): string {
    return `\x1b[${color}m ${value} \x1b[${Colors.Default}m`;
  }

  /**
   * Colorize console string with `black` color.
   * @param value string
   * @returns string
   */
  static black(value: string): string {
    return this.colorize(value, Colors.Black);
  }

  /**
   * Colorize console string with `red` color.
   * @param value string
   * @returns string
   */
  static red(value: string): string {
    return this.colorize(value, Colors.Red);
  }

  /**
   * Colorize console string with `green` color.
   * @param value string
   * @returns string
   */
  static green(value: string): string {
    return this.colorize(value, Colors.Green);
  }

  /**
   * Colorize console string with `yellow` color.
   * @param value string
   * @returns string
   */
  static yellow(value: string): string {
    return this.colorize(value, Colors.Yellow);
  }

  /**
   * Colorize console string with `blue` color.
   * @param value string
   * @returns string
   */
  static blue(value: string): string {
    return this.colorize(value, Colors.Blue);
  }

  /**
   * Colorize console string with `magenta` color.
   * @param value string
   * @returns string
   */
  static magenta(value: string): string {
    return this.colorize(value, Colors.Magenta);
  }

  /**
   * Colorize console string with `cyan` color.
   * @param value string
   * @returns string
   */
  static cyan(value: string): string {
    return this.colorize(value, Colors.Cyan);
  }

  /**
   * Colorize console string with `white` color.
   * @param value string
   * @returns string
   */
  static white(value: string): string {
    return this.colorize(value, Colors.White);
  }

  /**
   * Colorize console string with `gray` color.
   * @param value string
   * @returns string
   */
  static gray(value: string): string {
    return this.colorize(value, Colors.Gray);
  }

  /**
   * Colorize console string with `bright red` color.
   * @param value string
   * @returns string
   */
  static brightRed(value: string): string {
    return this.colorize(value, Colors.BrightRed);
  }

  /**
   * Colorize console string with `bright green` color.
   * @param value string
   * @returns string
   */
  static brightGreen(value: string): string {
    return this.colorize(value, Colors.BrightGreen);
  }

  /**
   * Colorize console string with `bright yellow` color.
   * @param value string
   * @returns string
   */
  static brightYellow(value: string): string {
    return this.colorize(value, Colors.BrightYellow);
  }

  /**
   * Colorize console string with `bright blue` color.
   * @param value string
   * @returns string
   */
  static brightBlue(value: string): string {
    return this.colorize(value, Colors.BrightBlue);
  }

  /**
   * Colorize console string with `bright magenta` color.
   * @param value string
   * @returns string
   */
  static brightMagenta(value: string): string {
    return this.colorize(value, Colors.BrightMagenta);
  }

  /**
   * Colorize console string with `bright cyan` color.
   * @param value string
   * @returns string
   */
  static brightCyan(value: string): string {
    return this.colorize(value, Colors.BrightCyan);
  }

  /**
   * Colorize console string with `bright white` color.
   * @param value string
   * @returns string
   */
  static brightWhite(value: string): string {
    return this.colorize(value, Colors.BrightWhite);
  }
}
