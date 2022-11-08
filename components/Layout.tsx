import styles from '../styles/Home.module.css'
import Head from 'next/head';

const Layout = ({children}:any) => {
    return (  
        <div className={styles.container}>
            <Head>
                <title>CatAPI</title>
                <meta name="Next Js project using catAPI" content="Created by Akshat Garg" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <p>Created by Akshat Garg</p>
            </footer>
      </div>
    );
}
 
export default Layout;
