<template>
    <div id="anime-title" class="bg-base-200">
        <h1 class="text-base-content text-base">This is anime Title</h1>
        <h2 class="text-base-content text-4xl h-12"> this is h2 tag..</h2>
    </div>
    <div id="anime-content" class="grid grid-cols-4 sm:mx-10 bg-green-100 gap-6">
        <div v-for="v,index in items" :class="[index%2==0 ? 'bg-base-100' : `bg-base-200`]" >
            <p class="text-xl text-primary">{{ index }}</p>
            <p class="text-secondary text-2xl">{{ v.title }}</p>
            <p class="text-base-content text-base">{{ v.content }}</p>
        </div>
    </div>

    <div class="mx-auto border-solid  px-10 ">
        <div class="tabs tabs-boxed grid grid-cols-8 shadow mx-auto max-w-5xl">
            <a v-for="(day,i) in week" class="tab h-14 text-base-content text-base font-semibold" 
                :class="[(whichTab == i) ? 'tab-active' : '']" 
                @click="swtichTab(i)">
                {{ day }}
            </a>  
        </div>

        <!-- Anime content List -->

        <div v-show="0" class="grid justify-items-center grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 max-w-5xl mx-auto px-5 mb-4">
            <template v-for="(v,k) in animeContents.get(week[whichTab])">
            <template v-for="(_,i) in v">
                <div v-if="k == 'title'" class="card w-6/7 bg-base-100 shadow-xl">
                    <figure><img :src="animeContents.get(week[whichTab]).img.at(i)" alt="Shoes" /></figure>
                    <div class="card-body p-2 h-max justify-center"> <!-- justfiy-center 使div的内容沿着主轴居中对齐-->
                        <h3 class="card-normal text-center break-words">{{ animeContents.get(week[whichTab]).title.at(i) }}</h3>
                    </div>
                </div>
            </template>
            </template>
        </div>
  
    </div>

    <!-- <input v-model="inputText" type="text" placeholder="Type here" class="left-1/3 bottom-1 absolute input w-full max-w-xs" />
    <button @click="log.debug(`${$$(inputText)}`)" class="btn">Button</button> -->

</template>

<script setup>
import axios from 'axios'
import log from 'loglevel'
import {load} from 'cheerio'
import { ref,onMounted, computed } from 'vue';

const props = defineProps({items: Object})

const whichTab = ref(0)
const week = ref(
    [
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
        "周日",
        "网络放送"
    ])

//  m["a"] = "xxx:http://........"

// const animeContentsView = ref([[]])

const animeContents = ref(new Map())



function swtichTab(v){
    whichTab.value = v
}

let $$ = null

onMounted(
async ()=>{

        // get anime shows' schedule.
        let res = await axios.get("https://yuc.wiki/202301/", {timeout: 5000})
        if(res.status != 200){
            return
        }
        
        // parse html contents.
        const $ = load(res.data)
        $$ = $
        $$ = load($('div.post-body >div td').toString())
        log.debug($('title').text().split('|')[0].replace(' ',''))
        
        week.value = []
        let key = ""
        // $('div.post-body >div td ').each((i, ele)=>{
        //     let date = $(ele).attr('class') === 'date2'
        //     let title = $(ele).attr('class') === 'date_title'

        //     if(date || title){
        //         if(date){
        //             // push day's title in PAGE.
        //             key = $(ele).text()
        //             week.value.push(key)
        //             animeContents.set(key, {title:[], img:[]})
        //         }

        //         if(title){
        //             animeContents.get(key).title.push($(ele).text().replace(/(\d)期/g, "$1季"))
        //         }
        //     }
        // })
        
        $('div.post-body >div td ,  div.div_date > img, div.div_date_ > img').each((i, ele)=>{
            let date = $(ele).attr('class') === 'date2'
            let title = $(ele).attr('class') === 'date_title' || $(ele).attr('class') === 'date_title__' || $(ele).attr('class') === 'date_title_'
            let img = $(ele).is('img')

            if(date || title || img){
                if(date){
                    // push day's title in PAGE.
                    key = $(ele).text()
                    week.value.push(key)
                    animeContents.value.set(key, {title:[], img:[]})
                    // animeContents.value.set(key,"")
                }

                if(title){
                    animeContents.value.get(key).title.push($(ele).text().replace(/(\d)期/g, "$1季"))
                    // animeContents.value.get(key)[count].title = $(ele).text().replace(/(\d)期/g, "$1季")
                    // animeContents.value.set(key, animeContents.value.get(key)+`${$(ele).text().replace(/(\d)期/g, "$1季")}$`)
                }
                
                if(img){
                    animeContents.value.get(key).img.push( $(ele).attr('src') )
                    // animeContents.value.set(key, animeContents.value.get(key)+`${$(ele).attr('src')}^`)
                }
            }
        })
        log.debug(animeContents.value)
    }
)
</script>