import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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

interface ConfigState {
    config: Config;
    setApiKey: (provider: keyof Config, apiKey: string) => void;
    toggleProvider: (provider: keyof Config) => void;
}

export const useConfig = create<ConfigState>()(
    persist(
        (set) => ({
            config: defaultConfig,
            setApiKey: (provider, apiKey) =>
                set((state) => ({
                    config: {
                        ...state.config,
                        [provider]: {
                            ...state.config[provider],
                            apiKey,
                        },
                    },
                })),
            toggleProvider: (provider) =>
                set((state) => ({
                    config: {
                        ...state.config,
                        [provider]: {
                            ...state.config[provider],
                            enabled: !state.config[provider].enabled,
                        },
                    },
                })),
        }),
        {
            name: 'config-storage',
        }
    )
) 