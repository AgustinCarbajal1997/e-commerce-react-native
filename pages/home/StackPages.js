import CellphoneArticles from "./cellphoneArticles"
import FridgeArticles from "./fridgeArticles"
import NotebookArticles from "./notebookArticles"
import SmartwatchArticles from "./smartwatchArticles"
import SplitArticles from "./splitArticles"
import TvArticles from "./tvArticles"
import Details from "./Details"

export const STACK_PAGES = [
    {
        id:1,
        name:"cellphone",
        component: CellphoneArticles,
        title:"Celulares"
    },
    {
        id:2,
        name:"fridge",
        component:FridgeArticles,
        title:"Heladeras"
    },
    {
        id:3,
        name:"notebook",
        component: NotebookArticles,
        title:"Notebooks"
    },
    {
        id:4,
        name:"smartwatch",
        component: SmartwatchArticles,
        title:"Relojes Smart"
    },
    {
        id:5,
        name:"split",
        component:SplitArticles,
        title:"Aires"
    },
    {
        id:6,
        name:"tv",
        component: TvArticles,
        title:"Televisores"
    },
    
]