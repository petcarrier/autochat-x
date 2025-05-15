import React, { useState, useEffect } from 'react';
import TabLayout from '@/src/components/config/TabLayout.tsx';
import AiProvidersTab from '@/src/components/config/AiProvidersTab.tsx';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    const tabs = [
        { id: 'ai-providers', label: 'AI Providers' },
    ];

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-6 px-4">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    AutoChat-X Settings
                </h1>

                {isLoading ? (
                    <div className="flex justify-center my-8">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                        <TabLayout tabs={tabs}>
                            <div slot="ai-providers">
                                <AiProvidersTab />
                            </div>
                        </TabLayout>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App; 