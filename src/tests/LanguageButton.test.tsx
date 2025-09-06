import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterAll } from 'vitest';
import userEvent from '@testing-library/user-event';
import LanguageButton from '../components/buttons/LanguageButton';
import { Sidebar } from '../components/Sidebar';
import { useTranslation } from '../context/TranslationContext';
import { changeTranslation } from '../utils/changeTranslation';

vi.mock('../context/TranslationContext');

let mockCurrentLang = 'en';

const mockToggleLanguage = vi.fn(() => {
  // Simulate the language change
  mockCurrentLang = mockCurrentLang === 'es' ? 'en' : 'es';
});

const mockUseTranslationStore = () => ({
  currentLang: mockCurrentLang,
  toggleLanguage: mockToggleLanguage,
  t: (path: string) => changeTranslation(path, mockCurrentLang),
});

vi.mocked(useTranslation).mockImplementation(mockUseTranslationStore);

describe('LanguageButton', () => {
  beforeEach(() => {
    render(
      <>
        <LanguageButton />
        <Sidebar />
      </>
    );
    mockCurrentLang = 'es';
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it('should be language in English', async () => {
    expect(screen.getByText('ESP')).toBeInTheDocument();
    expect(screen.getByText('CONTACT ME')).toBeInTheDocument();
    expect(screen.getByText('SKILLS')).toBeInTheDocument();
  });

  it('should be language in spanish', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole('button'));
    expect(mockCurrentLang).toBe('en');
    expect(screen.getByText('ENG')).toBeInTheDocument();
    expect(screen.getByText('CONTACTAME')).toBeInTheDocument();
    expect(screen.getByText('HABILIDADES')).toBeInTheDocument();
  });
});
