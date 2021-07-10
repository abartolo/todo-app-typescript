import Link from 'next/link';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <span> | </span>
        <Link href="/addTodo">Add Todo List</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
