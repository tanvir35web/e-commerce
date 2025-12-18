# Project Structure

This project follows industry best practices for Next.js applications with a well-organized folder structure.

## 📁 Folder Structure

```
e-commerce/
├── app/                          # Next.js App Router directory
│   ├── components/               # React components
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── icons.tsx         # Icon components
│   │   │   ├── skeletons.tsx     # Skeleton loader components
│   │   │   └── index.ts          # UI components barrel export
│   │   ├── layout/               # Layout components
│   │   │   ├── PrimaryNavbar.tsx
│   │   │   ├── SecondaryNavbar.tsx
│   │   │   ├── FooterSection.tsx
│   │   │   └── index.ts          # Layout components barrel export
│   │   └── features/             # Feature-specific components
│   │       ├── HeroSection.tsx
│   │       ├── HeroSlider.tsx
│   │       ├── CategorySection.tsx
│   │       ├── CategorySlider.tsx
│   │       ├── NewArrivalsSection.tsx
│   │       ├── ProductCard.tsx
│   │       └── index.ts          # Feature components barrel export
│   ├── hooks/                    # Custom React hooks
│   │   ├── useProducts.ts
│   │   └── useCategories.ts
│   ├── lib/                      # Library/utility code
│   │   ├── api.ts                # API service functions
│   │   └── utils/                # Utility functions (placeholder)
│   ├── types/                    # TypeScript type definitions
│   │   └── index.ts              # All type exports
│   ├── constants/                # Constants and configuration
│   ├── providers/                # React context providers
│   │   └── QueryProvider.tsx     # TanStack Query provider
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── public/                       # Static assets
│   └── images/                   # Image assets
├── .env.local                    # Environment variables
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies
└── README.md                     # Project documentation
```

## 🎯 Organization Principles

### 1. **Components Organization**
- **`ui/`**: Reusable, generic UI components (icons, skeletons, buttons, etc.)
- **`layout/`**: Layout-related components (navbars, footer, headers)
- **`features/`**: Feature-specific components grouped by domain

### 2. **Code Organization**
- **`hooks/`**: Custom React hooks for reusable logic
- **`lib/`**: External library integrations and utilities
- **`types/`**: Centralized TypeScript type definitions
- **`constants/`**: App-wide constants and configuration

### 3. **Best Practices**
- ✅ Separation of concerns
- ✅ Barrel exports (`index.ts`) for cleaner imports
- ✅ Feature-based organization
- ✅ Reusable components in `ui/`
- ✅ Type safety with TypeScript
- ✅ Clear import paths using `@/` alias

## 📝 Import Examples

```typescript
// Types
import { Product, Category } from "@/app/types";

// UI Components
import { SearchIcon, CartIcon } from "@/app/components/ui";

// Layout Components
import { PrimaryNavbar, FooterSection } from "@/app/components/layout";

// Feature Components
import { HeroSection, CategorySection } from "@/app/components/features";

// Hooks
import { useProducts } from "@/app/hooks/useProducts";

// API
import { api } from "@/app/lib/api";
```

## 🚀 Benefits

1. **Scalability**: Easy to add new features without cluttering
2. **Maintainability**: Clear structure makes it easy to find code
3. **Reusability**: UI components are easily reusable across features
4. **Type Safety**: Centralized types ensure consistency
5. **Team Collaboration**: Clear conventions help team members navigate

