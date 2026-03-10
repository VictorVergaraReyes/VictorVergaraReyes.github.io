import { createContext, useContext, useEffect, type ReactNode } from 'react';

interface DarkModeContextType {
  isDark: boolean;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDark: true }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
