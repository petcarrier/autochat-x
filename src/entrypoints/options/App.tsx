import React, { useState, useEffect } from 'react';
import TabLayout, { TabContent } from '@/components/config/TabLayout.tsx';
import AiProvidersTab from '@/components/config/AiProvidersTab.tsx';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const tabs = [
        { id: 'ai-providers', label: 'AI Providers' },
    ];

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto py-8 p-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                            AutoChat-X Settings
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Configure your AI providers and preferences
                        </p>
                    </div>

                    {isLoading ? (
                        <div className="flex justify-center items-center min-h-[400px]">
                            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <TabLayout tabs={tabs}>
                                <TabContent name="ai-providers">
                                    <div className="p-6">
                                        <AiProvidersTab />
                                    </div>
                                </TabContent>
                            </TabLayout>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App; 