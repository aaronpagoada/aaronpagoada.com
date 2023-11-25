import sleep from "./sleep";

async function titleCycle(){
  const titles = document.querySelectorAll('span.title');

  let i = 1

  while(i < 101){
    let j = i % titles.length
    await sleep(5000)
    if(j === 0){
      titles[titles.length - 1].classList.replace('active', 'inactive')
    } else {
      titles[j - 1].classList.replace('active', 'inactive')
    }
    titles[j].classList.replace('inactive', 'active')
    i++
  }
}
export default titleCycle;