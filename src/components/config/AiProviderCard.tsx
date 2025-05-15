import React from 'react';

interface AiProviderCardProps {
    provider: string;
    config: {
        apiKey: string;
        enabled: boolean;
    };
    title: string;
    placeholder?: string;
    onToggle: () => void;
    onApiKeyUpdate: (value: string) => void;
}

const AiProviderCard: React.FC<AiProviderCardProps> = ({
    provider,
    config,
    title,
    placeholder = '...',
    onToggle,
    onApiKeyUpdate,
}) => {
    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={config.enabled}
                        onChange={onToggle}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                    </div>
                </label>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">API Key</label>
                <input
                    type="password"
                    value={config.apiKey}
                    onChange={(e) => onApiKeyUpdate(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
};

export default AiProviderCard; 