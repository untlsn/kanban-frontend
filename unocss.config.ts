import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
  presetWind,
  presetUno,
  presetIcons,
  presetWebFonts,
} from 'unocss';
// @ts-ignore
import twConfig from './tailwind.config.cjs';

export default defineConfig({
  shortcuts: [
    /* Example
    ['name','uno-classes'],
    */
  ],
  // WebStorm don't support unocss config, so theme put in tailwind.config.cjs
  theme: {
    ...twConfig.theme.extend,
  },
  rules: [
    ['flex-center', { display: 'flex', 'align-items': 'center', 'justify-content': 'center' }],
  ],
  variants: [
    (matcher) => {
      if (!matcher.startsWith('max-')) return matcher;

      const [variant, ...rest] = matcher.split(':');

      const mediaPx = {
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
      }[variant.replace('max-', '')] || 0;

      if (mediaPx == 0) return matcher;

      return {
        matcher: rest.join(':'),
        parent: `@media (max-width: ${mediaPx}px)`,
      };
    },
    (matcher) => {
      if (!matcher.startsWith('hocus:')) return matcher;

      return {
        matcher: matcher.slice(6),
        selector: (s) => `${s}:hover, ${s}:focus`,
      };
    },
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'top',
        height: 'auto',
        'min-height': '1em',
      },
    }),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: 'Roboto',
            weights: [400, 500],
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
