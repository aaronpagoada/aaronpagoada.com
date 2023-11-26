import sleep from "./sleep";

async function titleCycle(){
  const title = document.getElementById('title')
  const titles = ['Software engineer', 'Climber', 'Hiker', 'Instructor', 'Builder']

  let i = 1

  while(i < 101){
    await sleep(5000)
    title.textContent = titles[i % 5]
    i++
  }
}
export default titleCycle;