import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePortfolioStore = create()(
  persist(
    (set) => ({
      theme: 'dark',
      activeSection: 'hero',
      isMenuOpen: false,
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setActiveSection: (section) => set({ activeSection: section }),
      setMenuOpen: (open) => set({ isMenuOpen: open }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
