export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  followUpQuestions?: string[];
}

export interface FinancialResponse {
  keywords: string[];
  response: string;
  followUpQuestions: string[];
}