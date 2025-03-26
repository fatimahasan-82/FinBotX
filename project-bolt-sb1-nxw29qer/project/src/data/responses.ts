export interface FinancialResponse {
  keywords: string[];
  response: string;
  followUpQuestions: string[];
}

export const financialTopics: FinancialResponse[] = [
  {
    keywords: ['invest', 'investment', 'investing', 'stock', 'stocks', 'market'],
    response: "Here are my professional investment recommendations:\n\n1. Diversification Strategy\n   • Spread investments across different asset classes\n   • Mix stocks, bonds, and other securities\n   • Consider both domestic and international markets\n\n2. Risk Management\n   • Only invest what you can afford to lose\n   • Maintain an emergency fund separately\n   • Understand your risk tolerance level\n\n3. Long-term Approach\n   • Focus on consistent, long-term growth\n   • Avoid emotional trading decisions\n   • Regular portfolio rebalancing\n\n4. Cost Optimization\n   • Choose low-cost index funds\n   • Watch for hidden fees\n   • Consider tax implications",
    followUpQuestions: [
      "Would you like to learn more about index funds?",
      "Shall we discuss portfolio diversification strategies?",
      "Would you like to explore retirement investment options?"
    ]
  },
  {
    keywords: ['save', 'saving', 'savings', 'money', 'emergency'],
    response: "Let me provide you with effective saving strategies:\n\n1. Emergency Fund\n   • Build 3-6 months of expenses\n   • Keep in easily accessible account\n   • Regular monthly contributions\n\n2. Automated Savings\n   • Set up automatic transfers\n   • Pay yourself first principle\n   • Separate savings by goals\n\n3. Smart Money Management\n   • Follow 50/30/20 rule\n   • Track all expenses\n   • Identify saving opportunities\n\n4. High-Yield Options\n   • Research high-yield savings accounts\n   • Consider certificates of deposit\n   • Explore money market accounts",
    followUpQuestions: [
      "Would you like tips on building an emergency fund?",
      "Shall we discuss high-yield savings options?",
      "Would you like to create a personalized savings plan?"
    ]
  },
  {
    keywords: ['budget', 'budgeting', 'spend', 'spending', 'expense', 'expenses'],
    response: "Here's a comprehensive budgeting strategy:\n\n1. Income Allocation\n   • Track all income sources\n   • Plan for variable income\n   • Set aside taxes if needed\n\n2. Expense Categories\n   • Essential: Housing, utilities, food\n   • Financial: Debt, savings, investments\n   • Discretionary: Entertainment, shopping\n\n3. Tracking System\n   • Use digital tools or spreadsheets\n   • Monitor daily transactions\n   • Regular budget reviews\n\n4. Goal Setting\n   • Set SMART financial goals\n   • Create realistic timelines\n   • Regular progress checks",
    followUpQuestions: [
      "Would you like help creating a personalized budget?",
      "Shall we discuss expense tracking methods?",
      "Would you like to learn about budgeting apps?"
    ]
  },
  {
    keywords: ['debt', 'loan', 'credit', 'mortgage', 'card'],
    response: "Let me help you with debt management:\n\n1. Debt Assessment\n   • List all debts and interest rates\n   • Calculate total debt burden\n   • Review minimum payments\n\n2. Repayment Strategy\n   • Debt avalanche: Highest interest first\n   • Debt snowball: Smallest balance first\n   • Consider consolidation options\n\n3. Credit Management\n   • Keep utilization under 30%\n   • Make timely payments\n   • Monitor credit report\n\n4. Prevention\n   • Build emergency fund\n   • Avoid new unnecessary debt\n   • Create spending boundaries",
    followUpQuestions: [
      "Would you like to explore debt consolidation options?",
      "Shall we discuss credit score improvement?",
      "Would you like help creating a debt payoff plan?"
    ]
  },
  {
    keywords: ['retire', 'retirement', '401k', 'pension', 'ira'],
    response: "Here's your retirement planning guide:\n\n1. Retirement Accounts\n   • Maximize 401(k) employer match\n   • Consider IRA options\n   • Understand contribution limits\n\n2. Investment Strategy\n   • Age-appropriate asset allocation\n   • Regular portfolio rebalancing\n   • Risk adjustment over time\n\n3. Income Planning\n   • Calculate retirement needs\n   • Consider multiple income sources\n   • Plan for healthcare costs\n\n4. Tax Optimization\n   • Understand tax implications\n   • Consider Roth conversions\n   • Plan required distributions",
    followUpQuestions: [
      "Would you like to discuss retirement account types?",
      "Shall we calculate your retirement needs?",
      "Would you like to learn about Social Security benefits?"
    ]
  }
];

export const greetingMessage = "Welcome to your personal financial advisor! I'm here to help you make informed financial decisions. How can I assist you today?\n\nYou can ask about:\n- Investment strategies\n- Saving techniques\n- Budgeting methods\n- Debt management\n- Retirement planning";

export const fallbackMessage = "I apologize, but I'm not sure about that specific topic. To better assist you, could you please ask about:\n- Investment strategies\n- Saving techniques\n- Budgeting methods\n- Debt management\n- Retirement planning";