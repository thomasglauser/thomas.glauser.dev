import type { NextPage } from 'next';
import Head from 'next/head';

import Card from '../components/card/card';

const Index: NextPage = () => {
    return (
        <div className="bg-slate-900 w-screen h-screen flex items-center justify-center">
            <Head>
                <title>Thomas Glauser</title>
                <meta name="description" content="Personal Website" />
            </Head>

            <Card />
        </div>
    );
};

export default Index;
