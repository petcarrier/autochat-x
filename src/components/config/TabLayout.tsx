import React, { useState } from 'react';

interface Tab {
    id: string;
    label: string;
}

interface TabLayoutProps {
    tabs: Tab[];
    children: React.ReactNode;
}

interface TabChildProps {
    name: string;
}

const TabLayout: React.FC<TabLayoutProps> = ({ tabs, children }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="flex flex-col h-full">
            <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-3 px-6 font-medium text-sm transition-colors duration-200 ${activeTab === tab.id
                                ? 'text-blue-500 border-b-2 border-blue-500'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="p-4 flex-grow overflow-y-auto">
                {React.Children.map(children, (child) => {
                    if (React.isValidElement<TabChildProps>(child) && child.props.name === activeTab) {
                        return child;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default TabLayout; 