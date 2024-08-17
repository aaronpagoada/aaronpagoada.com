import sleep from "./sleep";

async function titleCycle(){
  const title = document.getElementById('title')
  const titles = ['Software Engineer', 'Explorer', 'Coach', 'Instructor', '(yes, my legs were tragically cut off)']

  let i = 1

  while(i < 101){
    await sleep(3000)
    title.style.opacity = '0'
    await sleep(1000)
    title.textContent = titles[i % titles.length]
    title.style.opacity = '1'
    i++
  }
}
export default titleCycle;