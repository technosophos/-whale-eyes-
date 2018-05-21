const { events } = require("brigadier");

events.on("push", (e, p) => {
  console.log(e.payload)
})

events.on("check_suite:requested", (e, p) => {
  console.log(e.payload)
})
events.on("check_suite:rerequested", (e, p) => {
  console.log(e.payload)
})

events.on("check_run", (e, p) => {
  console.log(e.payload)
})
