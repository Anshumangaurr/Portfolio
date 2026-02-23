import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const QUICK_REPLIES = [
    "Tell me about Anshuman's skills",
    "What are his top projects?",
    "How can I contact him?",
    "Tell me about his experience"
];

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hi! I\'m Anshuman\'s AI assistant. Ask me anything about his experience or projects!' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (text: string = input) => {
        if (!text.trim() || isTyping) return;

        const userMessage: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        const botMessagePlaceholder: Message = { role: 'assistant', content: '' };
        setMessages(prev => [...prev, botMessagePlaceholder]);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
            const response = await fetch(`${API_URL}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({
                        role: m.role,
                        content: m.content
                    }))
                }),
            });

            if (!response.body) throw new Error('No response body');

            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let done = false;
            let botContent = '';

            while (!done) {
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value);
                botContent += chunkValue;

                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { role: 'assistant', content: botContent };
                    return newMessages;
                });
            }
        } catch (error) {
            console.error(error);
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = { role: 'assistant', content: 'Sorry, I\'m having trouble connecting right now.' };
                return newMessages;
            });
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="chat-widget">
            <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✕' : '💬'}
            </button>

            {isOpen && (
                <div className="chat-window glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="chat-header">Anshuman's Assistant</div>

                    <div className="chat-messages" style={{ flex: 1, overflowY: 'auto' }}>
                        {messages.map((msg, i) => (
                            <div key={i} className={`message ${msg.role === 'user' ? 'user' : 'bot'}`}>
                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {!isTyping && messages.length < 3 && (
                        <div className="quick-replies" style={{ padding: '0 1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            {QUICK_REPLIES.map((reply, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSend(reply)}
                                    style={{
                                        fontSize: '0.8rem',
                                        padding: '0.3rem 0.6rem',
                                        borderRadius: '1rem',
                                        border: '1px solid var(--primary)',
                                        background: 'transparent',
                                        color: 'var(--primary)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type message..."
                        />
                        <button onClick={() => handleSend()} disabled={isTyping}>
                            {isTyping ? '...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
