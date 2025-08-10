import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, afterAll } from "vitest";
import LanguageButton from "../components/buttons/LanguageButton";
import { Sidebar } from "../components/Sidebar";
import { useTranslationStore } from "../store/translationStore";
import { changeTranslation } from "../services/changeTranslation";
import userEvent from "@testing-library/user-event";

vi.mock("../store/translationStore");

let mockCurrentLang = "en";

const mockToggleLanguage = vi.fn(() => {
  // Simulamos el cambio de idioma
  mockCurrentLang = mockCurrentLang === "es" ? "en" : "es";
});

const mockUseTranslationStore = () => ({
  currentLang: mockCurrentLang,
  toggleLanguage: mockToggleLanguage,
  t: (path: string) => changeTranslation(path, mockCurrentLang),
});

vi.mocked(useTranslationStore).mockImplementation(mockUseTranslationStore);

describe("LanguageButton", () => {
  beforeEach(() => {
    render(
      <>
        <LanguageButton />
        <Sidebar />
      </>
    );
    mockCurrentLang = "es";
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("should be language in English", async () => {
    expect(screen.getByText("ESP")).toBeInTheDocument();
    expect(screen.getByText("CONTACT ME")).toBeInTheDocument();
    expect(screen.getByText("SKILLS")).toBeInTheDocument();
  });

  it("should be language in spanish", async () => {
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(mockCurrentLang).toBe("en");
    expect(screen.getByText("ENG")).toBeInTheDocument();
    expect(screen.getByText("CONTACTAME")).toBeInTheDocument();
    expect(screen.getByText("HABILIDADES")).toBeInTheDocument();
  });
});
