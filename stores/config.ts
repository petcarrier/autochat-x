import { useStorageAsync } from '@vueuse/core'
import { computed } from 'vue'

export interface AiProviderConfig {
    apiKey: string;
    enabled: boolean;
}

export interface Config {
    openai: AiProviderConfig;
    anthropic: AiProviderConfig;
    gemini: AiProviderConfig;
    azure: AiProviderConfig;
}

const defaultConfig: Config = {
    openai: {
        apiKey: '',
        enabled: true,
    },
    anthropic: {
        apiKey: '',
        enabled: false,
    },
    gemini: {
        apiKey: '',
        enabled: false,
    },
    azure: {
        apiKey: '',
        enabled: false,
    },
}

export function useConfig() {
    const config = useStorageAsync<Config>('config', defaultConfig)

    const setApiKey = (provider: keyof Config, apiKey: string) => {
        if (config.value) {
            config.value = {
                ...config.value,
                [provider]: {
                    ...config.value[provider],
                    apiKey
                }
            }
        }
    }

    const toggleProvider = (provider: keyof Config) => {
        if (config.value) {
            config.value = {
                ...config.value,
                [provider]: {
                    ...config.value[provider],
                    enabled: !config.value[provider].enabled
                }
            }
        }
    }

    return {
        config: computed(() => config.value),
        setApiKey,
        toggleProvider
    }
} 