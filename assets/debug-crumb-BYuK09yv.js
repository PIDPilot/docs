let c=0;function e(o){try{c+=1;const t=`${c} ${o}`;document.title=`DBG ${t}`,window.localStorage.setItem("pp_debug_crumb",t),console.log("[crumb]",t)}catch{}}export{e as c};
