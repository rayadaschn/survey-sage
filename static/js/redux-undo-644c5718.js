const e="@@redux-undo/UNDO",u="@@redux-undo/REDO",d="@@redux-undo/JUMP_TO_FUTURE",o="@@redux-undo/JUMP_TO_PAST",n="@@redux-undo/JUMP",r="@@redux-undo/CLEAR_HISTORY",t={undo:()=>({type:e}),redo:()=>({type:u}),jumpToFuture:e=>({type:d,index:e}),jumpToPast:e=>({type:o,index:e}),jump:e=>({type:n,index:e}),clearHistory:()=>({type:r})};export{t as M};
