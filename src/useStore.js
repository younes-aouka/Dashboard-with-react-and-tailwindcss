import { create } from "zustand";

const useStore = create((set,get)=>({
    NavIsHidden: true,
    toggleNavState: ()=>{
        set({NavIsHidden: !get().NavIsHidden});
    },
    HideNav: ()=>{
        set({NavIsHidden: true});
    }
}));

export {useStore};

