import Link from 'next/link'
import DarkSemiRoundedButton from './components/m-conponents/button-ds'
import Projects from './projects/page'
import Skills from './skills/page'
import About from './about/page'

export default function Home() {
  return  ( 
    <main >
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
    </main>
  )
}
