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

export default class Colorize {
  static colorize(value: string, color: Colors) {
    return `\x1b[${color}m ${value} \x1b[${Colors.Default}m`;
  }

  static black(value: string) {
    return this.colorize(value, Colors.Black);
  }

  static red(value: string) {
    return this.colorize(value, Colors.Red);
  }

  static green(value: string) {
    return this.colorize(value, Colors.Green);
  }

  static yellow(value: string) {
    return this.colorize(value, Colors.Yellow);
  }

  static blue(value: string) {
    return this.colorize(value, Colors.Blue);
  }

  static magenta(value: string) {
    return this.colorize(value, Colors.Magenta);
  }

  static cyan(value: string) {
    return this.colorize(value, Colors.Cyan);
  }

  static white(value: string) {
    return this.colorize(value, Colors.White);
  }

  static gray(value: string) {
    return this.colorize(value, Colors.Gray);
  }

  static brightRed(value: string) {
    return this.colorize(value, Colors.BrightRed);
  }

  static brightGreen(value: string) {
    return this.colorize(value, Colors.BrightGreen);
  }

  static brightYellow(value: string) {
    return this.colorize(value, Colors.BrightYellow);
  }

  static brightBlue(value: string) {
    return this.colorize(value, Colors.BrightBlue);
  }

  static brightMagenta(value: string) {
    return this.colorize(value, Colors.BrightMagenta);
  }

  static brightCyan(value: string) {
    return this.colorize(value, Colors.BrightCyan);
  }

  static brightWhite(value: string) {
    return this.colorize(value, Colors.BrightWhite);
  }
}
