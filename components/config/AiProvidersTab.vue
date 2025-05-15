<script lang="ts" setup>
import { useConfig, Config } from '@/stores/config';
import AiProviderCard from './AiProviderCard.vue';

const { config, setApiKey, toggleProvider } = useConfig();

function handleUpdateApiKey(provider: keyof Config, apiKey: string) {
    setApiKey(provider, apiKey);
}
</script>

<template>
    <div class="space-y-6">
        <h2 class="text-xl font-bold mb-4 text-gray-800">AI Providers</h2>

        <AiProviderCard provider="openai" :config="config.openai" title="OpenAI" placeholder="sk-..."
            @toggle="toggleProvider('openai')" @update:apiKey="key => handleUpdateApiKey('openai', key)" />

        <AiProviderCard provider="anthropic" :config="config.anthropic" title="Anthropic" placeholder="sk-ant-..."
            @toggle="toggleProvider('anthropic')" @update:apiKey="key => handleUpdateApiKey('anthropic', key)" />

        <AiProviderCard provider="gemini" :config="config.gemini" title="Google Gemini"
            @toggle="toggleProvider('gemini')" @update:apiKey="key => handleUpdateApiKey('gemini', key)" />

        <AiProviderCard provider="azure" :config="config.azure" title="Azure OpenAI" @toggle="toggleProvider('azure')"
            @update:apiKey="key => handleUpdateApiKey('azure', key)" />
    </div>
</template>