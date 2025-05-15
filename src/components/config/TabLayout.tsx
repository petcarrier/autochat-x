import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
    id: string;
    label: string;
}

interface TabLayoutProps {
    tabs: Tab[];
    children: React.ReactNode;
}

interface TabContentProps {
    name: string;
    children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ name, children }) => {
    return <div data-tab={name}>{children}</div>;
};

const TabLayout: React.FC<TabLayoutProps> = ({ tabs, children }) => {
    return (
        <Tabs defaultValue={tabs[0].id} className="h-full">
            <TabsList className="w-full justify-start">
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.id} value={tab.id}>
                        {tab.label}
                    </TabsTrigger>
                ))}
            </TabsList>
            {React.Children.map(children, (child) => {
                if (React.isValidElement<TabContentProps>(child)) {
                    return (
                        <TabsContent value={child.props.name} className="mt-4">
                            {child.props.children}
                        </TabsContent>
                    );
                }
                return null;
            })}
        </Tabs>
    );
};

export { TabContent };
export default TabLayout; 