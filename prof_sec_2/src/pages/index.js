import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="prof_cont">
        <div className="prof">
          <div className="topic">mern</div>
          <div className="sphere_container">
            <div className="sphere">
              <div className="sphere_inner">
                <div className="percent">90%</div>
                <div className="water"></div>
                <div className="glare"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="prof">
          <div className="topic">flutter</div>
          <div className="sphere_container">
            <div className="sphere">
              <div className="sphere_inner">
                <div className="percent">40%</div>
                <div className="water"></div>
                <div className="glare"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="prof">
          <div className="topic">cloud</div>
          <div className="sphere_container">
            <div className="sphere">
              <div className="sphere_inner">
                <div className="percent">60%</div>
                <div className="water"></div>
                <div className="glare"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="prof">
          <div className="topic">cp</div>
          <div className="sphere_container">
            <div className="sphere">
              <div className="sphere_inner">
                <div className="percent">20%</div>
                <div className="water"></div>
                <div className="glare"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="prof">
          <div className="topic">js</div>
          <div className="sphere_container">
            <div className="sphere">
              <div className="sphere_inner">
                <div className="percent">100%</div>
                <div className="water"></div>
                <div className="glare"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
