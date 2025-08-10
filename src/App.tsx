import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";
import { useRef } from "react";
import { PrintButton } from "./components/buttons/PrintButton";
import LanguageButton from "./components/buttons/LanguageButton";
import { EditButton } from "./components/buttons/EditButton";

const App = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex gap-x-0.5 fixed top-2 right-2 print:!hidden">
        <PrintButton contentRef={contentRef} />
        <LanguageButton />
        <EditButton />
      </div>
      <div
        ref={contentRef}
        className="min-h-screen bg-gray-100 p-0 print:p-0 lg:p-8"
      >
        <div className="cv-container max-w-[297mm] mx-auto grid grid-cols-1 md:grid-cols-[400px_1fr] shadow-2xl rounded-sm print:rounded-none overflow-hidden">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default App;
