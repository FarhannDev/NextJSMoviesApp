/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { Inter } from 'next/font/google'
import HeaderNav from './HeaderNav'
import Script from 'next/script'
import Head from 'next/head'

type Props = { children: React.ReactNode }

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
                />
            </Head>
            <HeaderNav />
            {/* <BottomNav /> */}
            <main className={`${inter.className} py-5 pt-5 mt-5 p-3`}>
                {children}
            </main>

            <Script
                src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
                crossOrigin="anonymous"
                async
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin="anonymous"
                async
            />

            <Script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin="anonymous"
                async
            />

            <Script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
                integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
                crossOrigin="anonymous"
                async
            />

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
                crossOrigin="anonymous"
                integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
                async
            />
        </>
    )
}
