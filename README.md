# FlairDemo

Demo **Expo (React Native)** app for learning Flair marketplace–style navigation and eventually connecting to a local Node API.

If you open this folder in a **new Cursor window**, read this file first—it describes structure, commands, and how it relates to the sibling **`flair-backend`** project.

---

## Tech stack

| Piece | Choice |
|--------|--------|
| Framework | [Expo](https://expo.dev) SDK 55 |
| Router | [expo-router](https://docs.expo.dev/router/introduction/) (file-based routes under `src/app/`) |
| Navigation | Root **Stack** → `(app)` **Drawer** + nested **Tabs**; `(auth)` **Stack** (no tabs/drawer) |
| Language | TypeScript |

---

## Repository layout (important paths)

```
FlairDemo/
├── src/app/
│   ├── _layout.tsx              # Root: Stack with (app) + (auth)
│   ├── (app)/
│   │   ├── _layout.tsx          # Drawer: main shell + drawer links to Login/Register
│   │   └── (tabs)/
│   │       ├── _layout.tsx      # Bottom tabs: Home, Store, Search, Wishlist, Account
│   │       ├── index.tsx        # Home tab (route: /)
│   │       ├── store.tsx
│   │       ├── search.tsx
│   │       ├── wishlist.tsx
│   │       └── account.tsx
│   └── (auth)/
│       ├── _layout.tsx          # Auth-only stack (no drawer/tabs)
│       ├── login.tsx
│       └── register.tsx
├── src/components/              # Shared UI (themed-text, etc.)
├── app.json
├── package.json
└── README.md                    # This file
```

---

## Navigation behavior (for AI / contributors)

1. **Default entry**: User lands in **`(app)`** → Drawer opens on **`(tabs)`** → **Home** tab (`index`).
2. **`(app)`**: Drawer menu includes **Home** (tabs) and manual items **Login** / **Register** that navigate to `/login` and `/register`.
3. **`(auth)`**: **Login** and **Register** are **outside** the tab + drawer shell—full-screen auth flows.
4. **Close (X)** on auth screens: returns to main app via `router.replace('/')` (Home + tabs).

---

## Scripts

From this folder:

```bash
npm install
npm start          # Expo dev server (then press i / a / w for simulator or web)
```

Other scripts are in `package.json` (e.g. `android`, `ios`, `web`, `lint`).

---

## Environment / API (future)

- There is **no** `.env` wired to a backend in this README’s baseline; when you add API calls, typical pattern is:
  - `EXPO_PUBLIC_API_URL=http://<host>:3001` (or device LAN IP for physical device testing).
- **Backend** for auth experiments lives in a **sibling folder** (not inside this repo):

  `../flair-backend`

  See that project’s `README.md` for Express + Prisma + JWT endpoints (`/auth/register`, `/auth/login`, `/me`).

---

## Git / related repos

- **Mobile**: this repo (`FlairDemo` / `flair-demo` on GitHub if pushed).
- **API**: `flair-backend` next to this folder—keep backends separate to avoid mixing mobile and server dependencies.

---

## Quick checklist for a new chat session

1. Confirm workspace root is **`FlairDemo`** (this file should be at `./README.md`).
2. Navigation entry: `src/app/_layout.tsx` → `src/app/(app)/_layout.tsx` → `src/app/(app)/(tabs)/_layout.tsx`.
3. Auth routes: `src/app/(auth)/login.tsx`, `register.tsx`.

---

## License / purpose

Private practice / demo; not production Flair Marketplace unless explicitly migrated.
