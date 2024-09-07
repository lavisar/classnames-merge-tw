type ClassNamesArg =
  | string
  | { [key: string]: boolean }
  | boolean
  | undefined
  | null

export const cn = (...classNames: ClassNamesArg[]): string => {
  return classNames.filter((cn) => !!cn).join(' ')
}
