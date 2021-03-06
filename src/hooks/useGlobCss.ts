import styles from '@/assets/scss/globCss.scss'

export const useGlobCss = (): any => {
  const cssStr = styles
    .replace(':export', '')
    .replaceAll(';', ',')
    .replace(/(?:\s*['"]*)?((rgb.+\))|(#?[a-zA-Z0-9]+))(?:['"]*\s*)?/g, "'$1'")
  const css = eval(`(${cssStr})`)
  return css
}
