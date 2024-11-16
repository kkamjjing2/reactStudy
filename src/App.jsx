import './App.css'
import Footer from './comp/Footer'
import Header from './comp/Header'
import Main from './comp/Main'


// 부모 컴포넌트다. 모든 컴포넌트들의 뿌리 역할을 하게 되므로 루트 컴포넌트라고도 한다.
function App() { // 함수로 만든 컴포넌트니까 함수 컴포넌트

  return (
    <>
    {/* 자식 컴포넌트 */}
    <Header/> 
    <Main/>
    <Footer/>
    </>
  )
}

export default App
