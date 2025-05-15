import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-semibold tracking-tight">{title}</CardTitle>
                <div className="flex items-center space-x-2">
                    <Label htmlFor={`toggle-${provider}`} className="text-sm text-gray-600">
                        {config.enabled ? 'Enabled' : 'Disabled'}
                    </Label>
                    <Switch
                        id={`toggle-${provider}`}
                        checked={config.enabled}
                        onCheckedChange={onToggle}
                    />
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-2">
                    <Label htmlFor={`api-key-${provider}`} className="text-sm font-medium">
                        API Key
                    </Label>
                    <Input
                        id={`api-key-${provider}`}
                        type="password"
                        value={config.apiKey}
                        onChange={(e) => onApiKeyUpdate(e.target.value)}
                        placeholder={placeholder}
                        className="font-mono"
                    />
                </div>
            </CardContent>
        </Card>
    );
};

export default AiProviderCard; 