import Main from './components/Main'
export default function Home() {
  return (
    <div className='bg-primary'>
    <div className=' mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
    <div className='lg:flex lg:justify-between lg:gap-4'>
      <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
          <div>
            <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>AJIT MISHRA</h1>
            <p className='text-white'>Full Stack Developer</p>
            <p className='max-w-xs'>Of course! Here are some examples of website text depending on of website text depending on the function of the website</p>
          </div>
          <div>
            <ul>
              <li>ABOUT</li>
              <li> EXPERIENCE </li>
              <li>PROJECTS</li>
            </ul>
          </div>
          <div>
            {/*Adding SVG ICONS here later*/}
          </div>
      </header>
      <main className='pt-24 lg:w-1/2 lg:py-24'>
          <div>
          <Main>
          </Main>
          </div>
      </main>
    </div>
    </div>
    </div>
  );
}
