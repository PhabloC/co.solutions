// Apenas as tipagens necessárias (pode até deletar se quiser tudo sem type)
export interface Category {
  [key: string]: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  [category: string]: FAQItem[];
}
