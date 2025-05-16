import React from 'react';
import { useChat } from '@ai-sdk/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Send, User, Bot } from 'lucide-react';

const App: React.FC = () => {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: '/api/chat', // Your API endpoint for chat
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(e);
    };

    return (
        <Card className="h-screen flex flex-col">
            <CardHeader className="border-b">
                <CardTitle>AI Chat</CardTitle>
            </CardHeader>

            <CardContent className="flex-1 p-4 overflow-hidden">
                <ScrollArea className="h-full">
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {message.role !== 'user' && (
                                    <Avatar className="mr-2 h-8 w-8 bg-primary text-primary-foreground">
                                        <AvatarFallback>
                                            <Bot className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                )}

                                <div
                                    className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user'
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-muted text-muted-foreground'}`}
                                >
                                    {message.content}
                                </div>

                                {message.role === 'user' && (
                                    <Avatar className="ml-2 h-8 w-8 bg-secondary text-secondary-foreground">
                                        <AvatarFallback>
                                            <User className="h-4 w-4" />
                                        </AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        ))}

                        {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && (
                            <div className="flex justify-start">
                                <Avatar className="mr-2 h-8 w-8 bg-primary text-primary-foreground">
                                    <AvatarFallback>
                                        <Bot className="h-4 w-4" />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="max-w-[80%] rounded-lg p-3 bg-muted text-muted-foreground">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 rounded-full bg-current animate-bounce" />
                                        <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-2 h-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>
            </CardContent>

            <CardFooter className="border-t p-4">
                <form onSubmit={onSubmit} className="flex w-full space-x-2">
                    <Input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        className="flex-1"
                    />
                    <Button type="submit" disabled={isLoading || !input.trim()}>
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    );
};

export default App; 