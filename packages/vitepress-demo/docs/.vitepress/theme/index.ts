import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
// @ts-ignore
import { useComponents } from './useComponents'
import './style.css'
// 通用字体
import 'vfonts/Lato.css'
import Loading from '@/components/Loading.vue'
import Button from '@/components/Button.vue'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    ctx.app.component('Loading', Loading)
    ctx.app.component('Button', Button)
  }
} satisfies Theme 