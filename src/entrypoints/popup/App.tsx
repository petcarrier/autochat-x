import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const App: React.FC = () => {
    const openOptionsPage = () => {
        browser.runtime.openOptionsPage();
    };

    const openSidePanel = async () => {
        const currentWindow = await browser.windows.getCurrent();
        console.log(currentWindow);
        const windowId = currentWindow.id;
        if (windowId) {
            browser.sidePanel.open({ windowId: windowId });
        }
        console.log('openSidePanel');
    };

    return (
        <Card className="w-[300px] mx-auto">
            <CardHeader>
                <CardTitle>AutoChat X</CardTitle>
                <CardDescription>
                    Automatically manage and respond to Twitter/X direct messages with customized replies.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-3">
                    <Button
                        variant="default"
                        className="w-full"
                        onClick={openOptionsPage}
                    >
                        <span className="mr-2">⚙️</span>
                        Configure Settings
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={openSidePanel}
                    >
                        <span className="mr-2">📋</span>
                        Open Message Panel
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default App; 