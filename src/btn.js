export default function clickBtn(set,ref,db){
  const name = document.querySelector("#name")
  const feedback = document.querySelector("#feedback")
  const btn = document.querySelector("button")
  btn.addEventListener("click",()=>{
  
    const sendName = ((name.value).trim() || "Anynomus")+"-"+ crypto.randomUUID()
    if(feedback.value.trim().length<20){
      alert("this is a small feedback enter a valid one")
    }else{
      const r= ref(db,`feedback/DevDesktop/${sendName}`)
      set(r,feedback.value)
      alert("feedback sent successfully")
      feedback.value =""
      name.value =""
    }
  })
}