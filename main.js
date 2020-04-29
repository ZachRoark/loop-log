// console.log("test1")

const contactData = [
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"},
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"},
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"},
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"}
]

    // console.log("test2")

for (let i=0; i < contactData.length; i++) {
    if (i === 0) {
        console.log(`${contactData[i].name} 's job title is ${contactData[i].title}`)
    }
 else if (i === 1) {
    console.log(`${contactData[i].name} 's job title is ${contactData[i].title}`)
    }
 else if (i === 2) {
    console.log(`${contactData[i].name} 's job title is ${contactData[i].title}`)
    }
 else if (i === 3) {
    console.log(`${contactData[i].name} 's job title is ${contactData[i].title}`)
    }
  }
 
// console.log("test3")



// console.log(`${name} 's job title is ${title}`)
// Loop through this array of objects and 
// console.log "name's job title is title."