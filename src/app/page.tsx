import type { Metadata } from 'next'
import styles from './page.module.css'
import Login from './login'

export const metadata: Metadata = {
  title: 'login',
}

export default function Index() {
  return <Login />
}
