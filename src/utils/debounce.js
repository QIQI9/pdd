let debounce = (fn, delay) => {
   // fn 业务函数
   let timer = null
   return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
         fn()
      }, delay)
   }
}

export default debounce