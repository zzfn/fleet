import '../../styles/globals.scss'
import type {AppProps} from 'next/app'

export default function App({Component, pageProps}: AppProps) {
    return <div className='container mx-auto p-4'>
        <header>
            <ul>
                <li>
                    <input type="checkbox" id="dewey" name="drone" value="1"/>
                    <label htmlFor="dewey">公网</label>
                </li>
                <li>
                    <input type="checkbox" id="louie" name="drone" value="2"/>
                    <label htmlFor="louie">内网</label>
                </li>
            </ul>
        </header>
        <Component {...pageProps} />
        <footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by
                <span>
            OOCC.ES
          </span>
            </a>
        </footer>
    </div>
}
