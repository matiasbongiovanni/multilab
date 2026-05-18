# Multilab — Design System

## Paleta (OKLCH, Restrained strategy)
- `--color-rp-bg`: oklch(99% 0.005 145) — fondo principal
- `--color-rp-bg-soft`: oklch(97% 0.008 145) — secciones alternas
- `--color-rp-bg-elevated`: oklch(100% 0.003 145) — cards elevadas
- `--color-rp-border`: oklch(90% 0.01 145) — divisores
- `--color-rp-border-soft`: oklch(94% 0.008 145) — divisores suaves
- `--color-rp-text`: oklch(18% 0.015 145) — texto principal
- `--color-rp-text-strong`: oklch(12% 0.01 145) — H1/H2
- `--color-rp-text-muted`: oklch(40% 0.01 145) — texto secundario
- `--color-rp-text-subtle`: oklch(55% 0.008 145) — texto terciario
- `--color-rp-accent`: oklch(60% 0.18 145) — CTAs, links (<=10% de superficie)
- `--color-rp-accent-hover`: oklch(54% 0.20 145) — hover de accent
- `--color-rp-accent-soft`: oklch(94% 0.04 145) — backgrounds suaves accent

## Tipografía
- Display (H1/H2): Fraunces, weights 400/600/900
- Body: Inter, weights 400/600/700/900
- Cap de línea: 65ch
- Type scale: ratio 1.25

## Componentes
- Button primary: bg `rp-accent`, text white, hover `rp-accent-hover`
- Button ghost: bg transparent, border `rp-border`, text `rp-text`
- Input: border `rp-border`, focus ring `rp-accent`
- Badge: bg `rp-accent-soft`, text `rp-accent`

## Layout
- Spacing base: 4px
- Secciones grandes: padding-y 7rem
- Secciones cortas: padding-y 3rem
- Max content width: 1280px

## Anti-patterns
- Sin hex hardcodeados (excepto SVG fill/stroke)
- Sin card grids idénticos
- Sin glassmorphism en healthcare
- Sin números mega-grandes tipo hero-metric
