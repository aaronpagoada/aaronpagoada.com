import sleep from "./sleep";

async function titleCycle(){
  const title = document.getElementById('title')
  const titles = ['Software Engineer', 'Explorer', 'Coach', 'Instructor']

  let i = 1

  while(i < 101){
    await sleep(5000)
    title.textContent = titles[i % titles.length]
    i++
  }
}
export default titleCycle;