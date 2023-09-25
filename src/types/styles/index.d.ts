/// <reference types="vite/client" />

type LessModuleClasses = { readonly [key: string]: string }

declare module '*.module.less' {
  const classes: LessModuleClasses
  export default classes
}
