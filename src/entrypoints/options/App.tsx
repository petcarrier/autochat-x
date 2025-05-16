import React, { useState, useEffect } from 'react';
import { useConfig } from '@/stores/config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { config, setApiKey, toggleProvider } = useConfig();

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const renderProviderCard = (provider: 'openai' | 'anthropic' | 'gemini' | 'azure', title: string) => {
        const providerConfig = config[provider];

        return (
            <Card className="w-full mb-4">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                        <CardTitle className="text-xl">{title}</CardTitle>
                        <CardDescription>Configure your {title} API settings</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Label htmlFor={`${provider}-switch`}>Enabled</Label>
                        <Switch
                            id={`${provider}-switch`}
                            checked={providerConfig.enabled}
                            onCheckedChange={() => toggleProvider(provider)}
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor={`${provider}-apikey`}>API Key</Label>
                            <Input
                                id={`${provider}-apikey`}
                                type="password"
                                value={providerConfig.apiKey}
                                onChange={(e) => setApiKey(provider, e.target.value)}
                                placeholder="Enter your API key"
                                disabled={!providerConfig.enabled}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    };

    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4 max-w-3xl">
            <div className="flex flex-col space-y-6">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
                    <p className="text-muted-foreground">
                        Manage your AI provider settings. Changes are saved automatically.
                    </p>
                </div>

                <Separator />

                <Tabs defaultValue="providers" className="w-full">
                    <TabsList className="mb-4">
                        <TabsTrigger value="providers">AI Providers</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    <TabsContent value="providers" className="space-y-4">
                        {renderProviderCard('openai', 'OpenAI')}
                        {renderProviderCard('anthropic', 'Anthropic')}
                        {renderProviderCard('gemini', 'Gemini')}
                        {renderProviderCard('azure', 'Azure OpenAI')}
                    </TabsContent>

                    <TabsContent value="about">
                        <Card>
                            <CardHeader>
                                <CardTitle>About</CardTitle>
                                <CardDescription>Information about this application</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-medium">Version</h3>
                                    <p className="text-sm text-muted-foreground">1.0.0</p>
                                </div>
                                <div>
                                    <h3 className="font-medium">Built with</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        <Badge variant="outline">React</Badge>
                                        <Badge variant="outline">Shadcn UI</Badge>
                                        <Badge variant="outline">Zustand</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default App; 