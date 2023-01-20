import Head from 'next/head';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Savor - 404 Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Page not found</h1>
      </div>
    </>
  )
}

export default NotFound;