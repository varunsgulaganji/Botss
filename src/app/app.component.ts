import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bot';

  
  messages: { sender: string; text: string }[] = [];
  userMessage: string = '';
  isBotTyping: boolean = false;

  // Static data for bot responses
  botResponses: { [key: string]: string } = {
    hello: 'Hi there! How can I help you today?',
    hi: 'Hello! How can I assist you?',
    help: 'Sure, I am here to help. What do you need assistance with?',
    weather: 'The weather is sunny and 25°C today.',
    time: 'It is 3:00 PM right now.',
    date: 'Today is January 21, 2025.',
    bye: 'Goodbye! Have a great day!',
    thanks: 'You are welcome!',
    joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    chatbot: 'Yes, I am your friendly chatbot.',
    name: 'I am Chatbot, your virtual assistant.',
    where: 'I am just a virtual assistant here to help you.',
    who: 'I am an AI-powered chatbot.',
    food: 'Pizza is always a great choice!',
    hobby: 'I love helping people!',
    programming: 'I can help you with programming questions!',
    angular: 'Angular is a powerful front-end framework by Google.',
    error: 'Can you describe the issue in detail so I can help?',
    fun: 'Talking to you is fun!',
    project: 'Tell me more about your project!'
  };

  calculateBackgroundColor(message: string): string {
    // Change input field background color dynamically based on input length
    return message.length > 10 ? '#d1e7dd' : '#ffffff';
  }

  sendMessage(): void {
    if (this.userMessage.trim()) {
      // Add the user's message to the chat
      this.messages.push({ sender: 'user', text: this.userMessage.trim() });

      // Simulate bot typing
      this.isBotTyping = true;

      setTimeout(() => {
        const userMessageLower = this.userMessage.trim().toLowerCase();
        // Get bot response or fallback to a generic response
        const botReply =
          this.botResponses[userMessageLower] || "I'm not sure how to respond to that.";
        this.messages.push({ sender: 'bot', text: botReply });

        // Reset input and bot typing indicator
        this.userMessage = '';
        this.isBotTyping = false;
      }, 1000); // Simulate 1-second delay
    }
  }
}
