<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import TabLayout from '@/components/config/TabLayout.vue';
import AiProvidersTab from '@/components/config/AiProvidersTab.vue';

const isLoading = ref(true);

const tabs = [
    { id: 'ai-providers', label: 'AI Providers' },
];

onMounted(() => {
    isLoading.value = false;
});
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto py-6 px-4">
            <h1 class="text-3xl font-bold mb-8 text-center text-gray-800">AutoChat-X Settings</h1>

            <div v-if="isLoading" class="flex justify-center my-8">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>

            <div v-else class="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
                <TabLayout :tabs="tabs">
                    <template #ai-providers>
                        <AiProvidersTab />
                    </template>
                </TabLayout>
            </div>
        </div>
    </div>
</template>

<style>
body {
    background-color: #f9fafb;
    color: #374151;
}
</style>