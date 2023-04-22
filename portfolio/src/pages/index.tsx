import Nav from '@/components/Nav'

export default function Home(props: any) {
  return (
    <main
      className={`flex min-h-screen flex-col justify-start p-24 leaguespartan`}>
        <Nav about="About" projects="Projects" contact="Contact"></Nav>
        <div className="body-container">
          <div>
            <h1 className="name leaguespartan">Connor Abernethy</h1>
            <p className="description leaguespartan">Full-stack Software Developer & Engineer</p>
          </div>
          <div className="spline"></div>
        </div>
    </main>
  )
}
