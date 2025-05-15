import React from 'react';
import AiProviderCard from './AiProviderCard';
import { useConfig } from '@/src/stores/config';

const AiProvidersTab: React.FC = () => {
    const { config, setApiKey, toggleProvider } = useConfig();

    const handleUpdateApiKey = (provider: keyof typeof config, apiKey: string) => {
        setApiKey(provider, apiKey);
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">AI Providers</h2>

            <AiProviderCard
                provider="openai"
                config={config.openai}
                title="OpenAI"
                placeholder="sk-..."
                onToggle={() => toggleProvider('openai')}
                onApiKeyUpdate={(key) => handleUpdateApiKey('openai', key)}
            />

            <AiProviderCard
                provider="anthropic"
                config={config.anthropic}
                title="Anthropic"
                placeholder="sk-ant-..."
                onToggle={() => toggleProvider('anthropic')}
                onApiKeyUpdate={(key) => handleUpdateApiKey('anthropic', key)}
            />

            <AiProviderCard
                provider="gemini"
                config={config.gemini}
                title="Google Gemini"
                onToggle={() => toggleProvider('gemini')}
                onApiKeyUpdate={(key) => handleUpdateApiKey('gemini', key)}
            />

            <AiProviderCard
                provider="azure"
                config={config.azure}
                title="Azure OpenAI"
                onToggle={() => toggleProvider('azure')}
                onApiKeyUpdate={(key) => handleUpdateApiKey('azure', key)}
            />
        </div>
    );
};

export default AiProvidersTab; 