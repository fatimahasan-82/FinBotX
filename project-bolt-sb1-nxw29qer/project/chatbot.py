import random
from datetime import datetime

class FinancialChatbot:
    def __init__(self):
        self.conversation_history = []
        self.responses = {
            'investment': [
                "Here are some investment recommendations:\n1. Diversify your portfolio\n2. Consider low-cost index funds\n3. Start with small, regular investments\n4. Research before investing",
                "For investments, I recommend:\n1. Setting clear investment goals\n2. Understanding your risk tolerance\n3. Creating a balanced portfolio\n4. Regular portfolio review"
            ],
            'savings': [
                "Here are some savings tips:\n1. Set up automatic savings\n2. Follow the 50/30/20 rule\n3. Build an emergency fund\n4. Look for high-yield accounts",
                "To improve your savings:\n1. Track all expenses\n2. Cut unnecessary subscriptions\n3. Save windfalls and bonuses\n4. Set specific savings goals"
            ],
            'budget': [
                "Budgeting advice:\n1. Track all income and expenses\n2. Categorize your spending\n3. Set realistic goals\n4. Review monthly\n5. Use digital tools",
                "For better budgeting:\n1. Start with fixed expenses\n2. Plan for variables\n3. Include savings goals\n4. Monitor regularly"
            ],
            'debt': [
                "Debt management strategies:\n1. List all debts and interest rates\n2. Pay more than minimums\n3. Consider debt consolidation\n4. Avoid new debt",
                "To handle debt effectively:\n1. Prioritize high-interest debt\n2. Create a payment plan\n3. Build emergency savings\n4. Seek professional advice if needed"
            ],
            'retirement': [
                "Retirement planning tips:\n1. Start early\n2. Maximize employer matching\n3. Diversify investments\n4. Consider tax implications",
                "For retirement preparation:\n1. Calculate needed savings\n2. Review investment options\n3. Consider multiple income streams\n4. Plan for healthcare costs"
            ]
        }
        self.greetings = [
            "Hello! I'm your financial advisor bot. How can I help you today?",
            "Welcome! I'm here to assist with your financial questions.",
            "Hi there! Ready to discuss your financial goals?"
        ]
        self.fallbacks = [
            "I'm not sure about that. Could you ask about investments, savings, budgeting, debt, or retirement?",
            "I specialize in financial advice. Can you rephrase your question about investments, savings, budgeting, debt, or retirement?",
            "Let's focus on your financial goals. What would you like to know about investing, saving, budgeting, debt, or retirement?"
        ]

    def get_response(self, user_input):
        # Convert input to lowercase for matching
        user_input = user_input.lower()
        
        # Store the interaction
        self.conversation_history.append({
            'user': user_input,
            'timestamp': datetime.now()
        })

        # Check for exit command
        if user_input in ['quit', 'exit', 'bye']:
            return "Thank you for chatting! Have a great day!"

        # Check for greetings
        if user_input in ['hello', 'hi', 'hey']:
            return random.choice(self.greetings)

        # Check for keywords and get appropriate response
        for topic, responses in self.responses.items():
            if topic in user_input:
                response = random.choice(responses)
                self.conversation_history.append({
                    'bot': response,
                    'timestamp': datetime.now()
                })
                return response

        # If no keyword matches, use fallback
        fallback = random.choice(self.fallbacks)
        self.conversation_history.append({
            'bot': fallback,
            'timestamp': datetime.now()
        })
        return fallback

def main():
    chatbot = FinancialChatbot()
    print("Financial Advisor Bot (type 'quit' to exit)")
    print("-" * 50)
    print(random.choice(chatbot.greetings))

    while True:
        user_input = input("\nYou: ").strip()
        if user_input.lower() in ['quit', 'exit', 'bye']:
            print("\nBot:", chatbot.get_response(user_input))
            break
            
        response = chatbot.get_response(user_input)
        print("\nBot:", response)

if __name__ == "__main__":
    main()