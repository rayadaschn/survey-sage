import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetTypography,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  rules: [],
  shortcuts: {}, // 快捷方式组合规则
  theme: {
    colors: {
      brand: 'var(--c-brand)',
      bg: 'var(--c-bg)',
      text: 'var(--c-text)',
      tips: 'var(--c-tips)',
      border: 'var(--c-border)',
      mask: 'var(--c-mask)',
      hover: 'var(--c-hover)',
    },
  },
  /** 预设: 基础、属性化、排版、rem 转换 */
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetRemToPx(),
  ],
  /** 转换器 */
  transformers: [
    /**
     * 指令转换器: `@apply` 或 --at-apply
     * @see https://alfred-skyblue.github.io/unocss-docs-cn/transformers/directives
     */
    transformerDirectives({
      applyVariable: ['--at-apply', '--uno-apply', '--uno'], // 默认别名
    }),

    /**
     * 转换组
     * @see https://alfred-skyblue.github.io/unocss-docs-cn/transformers/variant-group
     */
    transformerVariantGroup(),

    /**
     * 无值的 Attribute 转换，作用:布尔属性变成 "" 空字符串
     * @see https://alfred-skyblue.github.io/unocss-docs-cn/transformers/attributify-jsx
     */
    transformerAttributifyJsx(),
  ],
  content: {
    pipeline: {
      exclude: ['node_modules'],
    },
  },
})
