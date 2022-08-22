//# Author: William Z Chadwick
//# Date Created: 08/22/22
//# Date Modified: 08/22/22
//# Description: A place to keep my js app that reminds me to use bash!
//# Usage: alias useBash="node useBash.js"

const isOnMyLinux = true;
const isInTerminal = true;
const havePreference = true;

function useBash(bool1, bool2, bool3) {
       if (bool1 === true && bool2 === true && bool3 === true) {
           console.log("You should definitely use bash for this assignment if possible!");
       } else {
                console.log("I suppose you could use JavaScript.....");
       }
    return 0;
}

useBash(isOnMyLinux, isInTerminal, havePreference);
