console.log("start");
function cb()
{
    console.log("callback");
}
cb();
setTimeout(cb,0);
console.log("end");