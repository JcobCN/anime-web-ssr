<template>
    <!-- <div class="bg" style="width: 100%; min-height: fit-content;"> -->
            <!-- <n-layout>
                <n-layout-header>
                    <div class="logo-wrapper">
                        <div class="history-button">
                            <div class="button-text"><span class="iconfont icon-history2"></span>观看历史</div>
                        </div><span class="mobile-logo"><svg width="150px" height="30px">
                                <image
                                    xlink:href="https://edu-30130.sz.gfp.tencent-cloud.com/s9m1/244eb1ead0487b6654f31c9748278745.svg"
                                    width="150px" height="30px"></image>
                            </svg></span>
                    </div>
                </n-layout-header>
                <n-layout-content content-style="padding: 60px;" >
                <anime-content :items="items"></anime-content>
                </n-layout-content>
                <n-layout-footer bordered position="absolute" 
                style="height: 64px; padding: 24px;
                 position: fixed;"
                 class=""
                 >
               </n-layout-footer>
               <button class="btn">Helloy daisyui</button>

            </n-layout> -->
            <div class="griddiv grid grid-cols-4 gap-x-2 gap-y-2  border border-solid border-red-400 pl-1">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <AnimeContent :items="items"></AnimeContent>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import AnimeContent from './AnimeContent.vue';

let items = ref([
    {title: "hello", content:"world"},
    {title: "hello", content:"world"},
    {title: "hello", content:"world"},
    {title: "hello", content:"world"},
    {title: "hello", content:"world"},
    {title: "hello", content:"world"},
])



</script>

<style scoped>

.griddiv > div{
    @apply bg-green-300 h-20 border-solid border-2 border-blue-500;
}

.griddiv {
}

.n-layout{
    
    background-color: #f7f8fa;
}
.n-layout-header {
    height: 3rem;
    padding: 0 10px 10px;
    background-color: bisque;
}

.n-layout-content{
    
    margin-top: 10px;
    margin-bottom: 0;
    width: 100%;
    min-height: 0;
    padding: 5px 10px 10px;
    -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0/4%);
    -moz-box-shadow: 0 2px 4px 0 rgb(0 0 0/4%);
    box-shadow: 0 2px 4px 0 rgb(0 0 0/4%);
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    /* border: 0.2rem solid black; */
    background: #fff;
}

.green{
    background-color: green;
    display: flex;
    height: 10rem;
    width: 10rem;
    /* align-items: center; */
    /* justify-items: center; */
}

.lightgreen{
    background-color: lightgreen;
    display: flex;
    height: 10rem;
}
</style>
<style scoped>
.history-button {
    position: fixed;
    top: 12px;
    right: 10px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 26px;
    margin: 0;
    z-index: 998;
}

.button-text {
    color: rgb(51, 51, 51);
    font-size: 13px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
}

.icon-history2 {
    font-size: 18px;
    padding-right: 4px;
}

.logo-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.logo {
    max-width: 100%;
    height: 40px;
    margin: 0;
    padding-left: 10px;
    cursor: pointer;
}

.mobile-logo {
    height: 30px;
    margin: 0 auto;
    display: block;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
}
</style>

<style>
body {
    @apply bg-base-100
}
</style>