<template>
    <view class="w-full h-full flex flex-col">
        <view class="flex-none w-full">
            <slot name="header"/>
        </view>
        <view class="flex-1 w-full h-0">
            <slot name="default"/>
        </view>
        <view class="flex-none w-full">
            <slot name="footer"/>
        </view>
    </view>
</template>
