# Axiom Pulse - Pixel-Perfect Clone

A hard-coded, pixel-perfect frontend clone of the Axiom Pulse UI built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui principles.

## 🎨 Design Implementation

### Color Palette
- **Primary (Pulse Blue)**: `#526fff` - Used for active nav items, CTAs, and highlights
- **Positive (Green)**: `#10b981` - Upward trends, gains
- **Negative (Red)**: `#ef4444` - Downward trends, losses
- **Info (Cyan)**: `#06b6d4` - Market cap and informational highlights
- **Accent (Yellow)**: `#f59e0b` - Warnings and special indicators

### Design Tokens
Custom CSS variables in `app/globals.css`:
- `--pulse-card-bg`: `#0f1720` - Deep dark card background
- `--pulse-card-radius`: `12px` - Consistent card border radius
- `--pulse-border-subtle`: `rgba(255,255,255,0.06)` - Subtle borders
- `--pulse-chip-radius`: `8px` - Badge/chip border radius
- `--pulse-primary`: `#526fff` - Primary brand color

## 🏗️ Architecture

### Component Structure
```
components/
├── ui/                          # Primitive components (shadcn-inspired)
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Avatar.tsx
│   ├── ScrollArea.tsx
│   ├── Tooltip.tsx
│   ├── Popover.tsx
│   ├── Dialog.tsx
│   └── Skeleton.tsx
└── pulse/
    ├── atoms/                   # Smallest reusable units
    │   ├── PulseIconButton.tsx
    │   ├── StatPill.tsx
    │   ├── MetricLabel.tsx
    │   └── TokenLogo.tsx
    ├── molecules/               # Composite components
    │   ├── TokenCardHeader.tsx
    │   ├── TokenCardFooter.tsx
    │   └── TokenColumnHeader.tsx
    ├── TokenCard.tsx            # Token card organism
    └── TokenColumn.tsx          # Column container organism
```

## 🚀 Features Implemented

### Phase 1-2: Visual Analysis & Theming ✅
- Analyzed screenshot for layout, spacing, colors, typography
- Defined design tokens and CSS variables
- Configured Tailwind with custom pulse colors

### Phase 3-4: Component Mapping & Implementation ✅
- Mapped shadcn-style primitives (Card, Badge, Button, etc.)
- Built atomic components with lucide-react icons
- Created molecule components for card sections

### Phase 5: Page Composition ✅
- **Top Navbar**: Logo (axiom.svg), navigation links, search, deposit button, wallet/profile icons
- **Pulse Sub-nav**: Pulse icon, preset buttons (P1/P2/P3), display controls, status indicators
- **Three-Column Layout**:
  - New Pairs (left)
  - Final Stretch (center)
  - Migrated (right)
- **Bottom Bar**: Preset selector, connection status, global indicator

### Phase 6: Interactions & Polish ✅
- Hover states with transform and shadow on TokenCards
- Loading skeletons for each column
- Tooltip components on icon buttons
- Dialog modal for token details (click to open)
- Copy address button with lucide-react icons
- Smooth transitions (200ms duration)

## 🎯 Key Visual Details

### Token Card
- **Header**: 48px logo with green status indicator, star/more actions
- **Metrics**: MC (market cap) in cyan, volume, TX count with age
- **Footer**: Stat badges with trend icons (up/down arrows)
- **Hover**: -4px translate Y, enhanced shadow

### Icons (lucide-react)
All emojis replaced with proper lucide-react icons:
- `Search`, `Star`, `Wallet`, `User` - Navbar
- `ChevronDown` - Dropdowns
- `BarChart3`, `Volume2`, `BookmarkIcon` - Sub-nav controls
- `Zap`, `Settings2` - Column headers
- `Copy`, `MoreHorizontal` - Card actions
- `TrendingUp`, `TrendingDown`, `Activity` - Stat badges

## 🖼️ Assets
- **Logo**: `/public/axiom.svg` - Used in navbar and as favicon
- **Favicon**: Configured in `app/layout.tsx` metadata

## 📊 Hard-Coded Data
Sample tokens with realistic values from screenshot:
- Token names (东风快递, 4BLV, LENS, pippin, HorseKing, etc.)
- Market caps, volumes, transaction counts, ages
- Badges ("Paid", status indicators)

## 🎨 Typography
- **Fonts**: Geist Sans (primary), Geist Mono (addresses)
- **Sizes**: 
  - Card titles: 14px (text-sm)
  - Labels: 10-11px (text-[10px], text-[11px])
  - Metrics: 14px semibold
  - Nav links: 14px medium

## 🌐 Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit: `http://localhost:3000/pulse`

## 📝 Notes

### Non-Goals (As Specified)
- ❌ No real API integration
- ❌ No Redux or React Query
- ❌ No WebSocket / real-time data
- ❌ No authentication

### Design Fidelity
- **Target**: ≤2px difference from screenshot
- **Spacing**: Tailwind utility classes with precise gaps (gap-2, gap-3, gap-4)
- **Borders**: Consistent `border-white/5` subtle borders
- **Shadows**: Custom `shadow-pulse-sm` for cards
- **Transitions**: 200ms duration for hover states

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Fonts**: Geist Sans, Geist Mono

## 📦 File Structure
```
axiom/
├── app/
│   ├── globals.css              # Design tokens & theme
│   ├── layout.tsx               # Root layout with dark mode
│   └── pulse/
│       └── page.tsx             # Main Pulse page
├── components/
│   ├── ui/                      # Primitives
│   └── pulse/                   # Pulse-specific components
├── public/
│   └── axiom.svg                # Logo
├── tailwind.config.cjs          # Tailwind config
└── package.json
```

## ✨ Highlights

1. **100% Client-Side**: All interactions happen in the browser
2. **Responsive**: Uses CSS Grid for three-column layout
3. **Accessible**: Proper semantic HTML, role attributes
4. **Maintainable**: Atomic design pattern (atoms → molecules → organisms)
5. **Performant**: Minimal JS, CSS-only animations where possible
6. **Type-Safe**: Full TypeScript coverage

---

Built with ❤️ following the Axiom Pulse design specification.
