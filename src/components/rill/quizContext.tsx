import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = { open: () => void };
const QuizContext = createContext<Ctx>({ open: () => {} });

export const useQuiz = () => useContext(QuizContext);

export const QuizProvider = ({ children, onOpen }: { children: ReactNode; onOpen: () => void }) => {
  return <QuizContext.Provider value={{ open: onOpen }}>{children}</QuizContext.Provider>;
};
