const { events } = require("brigadier");

events.on("push", (e, p) => {
  console.log(e.payload)
})

events.on("check_suite", (e, p) => {
  console.log(e.payload)
})

events.on("check_run", (e, p) => {
  console.log(e.payload)
})
