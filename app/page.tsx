"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react"
import Script from "next/script"


export default function Component() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/script.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-bold " prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span className="font-['gilroy', 'serif'] font-bold sm:text-xl ">Viral Sachde</span>

        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Experience
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
          <MenuIcon className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="grid gap-8  md:gap-16">
            <div className="space-y-4 text-center">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl font-['', 'serif']">
                <span className="font-['gilroy']">Full </span><span className="font-['denton','serif'] italic ">Stack </span><span className=" font-['gilroy','serif']">Developer.</span></h1>
              <div className="huhu-lala flex items-center text-center gap-4">
                <div className="rounded-full p-2 text-xl  absolute top-[8%] left-[10%] sm:top-[15%] sm:left-[13%] md:top-[15%] md:left-[13%]">                <img src="/emoji/1.webp" width={125} height={125} alt="emoji" className="rounded-full h-20 w-20 sm:h-[125px] sm:w-[125px]" />
                </div>
                <div className="rounded-full p-2 text-xl absolute top-[32%] right-[35%]  sm:top-[26%] sm:right-[15%] md:top-[26%] md:right-[15%] ">  <img src="/emoji/2.webp" width={125} height={125} alt="emoji2" className="rounded-full h-20 w-20 sm:h-[125px] sm:w-[125px]" />
                </div>
                <div className="rounded-full  p-2 text-xl   absolute top-[13%] left-[70%] sm:top-[36%] sm:left-[44%] md:top-[36%] md:left-[44%]">  <img src="/emoji/3.webp" width={125} height={125} alt="emoji3" className="rounded-full h-28 w-28 sm:h-[125px] sm:w-[125px]" />
                </div>
              </div><br></br><br></br>
              <p className="text-muted-foreground text-center font-['Merriweather', 'serif']">

                I&apos;m a passionate full-stack developer with a strong background in building modern, scalable, and
                user-friendly web applications. I specialize in JavaScript, React, Node.js, and various other
                technologies.
              </p>
              <div className="huhu-lala flex items-center justify-center"><div></div>
                <img src="/emoji/4.webp" width={200} height={200} alt="Viral Sachde" className="rounded-full" />
              </div>
            </div>

          </div>
        </section>
        <section id="skills" className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-['gilroy']">Skills.</h2>
            <p className="text-muted-foreground">
              I have a diverse set of skills that allow me to tackle a wide range of web development projects.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <CodepenIcon className="h-8 w-8" />
              <span className="text-sm font-medium">React</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <NetworkIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Node.js</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <EclipseIcon className="h-8 w-8" />
              <span className="text-sm font-medium">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <TypeIcon className="h-8 w-8" />
              <span className="text-sm font-medium">TypeScript</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <DatabaseIcon className="h-8 w-8" />
              <span className="text-sm font-medium">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <DatabaseIcon className="h-8 w-8" />
              <span className="text-sm font-medium">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <DockIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Docker</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <CloudIcon className="h-8 w-8" />
              <span className="text-sm font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center">
              <GitGraphIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Git</span>
            </div>
          </div>
        </section>
        <section id="experience" className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-['gilroy']">Experiances.</h2>
            <p className="text-muted-foreground">
              I have worked on a variety of projects and gained valuable experience in the industry.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Full-Stack Developer</CardTitle>
                <CardDescription>
                  Developed and maintained a complex web application using React, Node.js, and MongoDB.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">June 2021 - Present</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frontend Engineer</CardTitle>
                <CardDescription>Lorem ipsum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">September 2019 - May 2021</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Intern</CardTitle>
                <CardDescription>
                  Assisted in the development and testing of a web application using Node.js and PostgreSQL.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">June 2018 - August 2018</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="projects" className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-['gilroy']">Projects.</h2>
            <p className="text-muted-foreground">Check out some of the projects I&apos;ve worked on.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>A full-stack web application built with React, Node.js, and MongoDB.</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Project 1"
                  className="rounded-t-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>
                  A responsive e-commerce website built with React, Node.js, and PostgreSQL.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Project 2"
                  className="rounded-t-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>
                  A real-time chat application built with React, Socket.IO, and Node.js.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={225}
                  alt="Project 3"
                  className="rounded-t-lg object-cover"
                />
              </CardContent>
              <CardFooter>
                <div className="flex justify-end gap-2">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section id="bigemoji" className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="huhu-lala flex items-center justify-center"><div></div>
            <img src="/emoji/5.webp" width={200} height={200} alt="Viral Sachde" className="rounded-full" />
          </div>
        </section>
        <section id="resume" className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-['gilroy']">Get resume.</h2>
            <p className="text-muted-foreground">
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>

          </div>

        </section>

        <section id="contact" className="container mx-auto py-12 px-4 md:py-24 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-['gilroy']">Get in touch.</h2>
            <p className="text-muted-foreground">
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>

          </div>
          <div className="mt-8 flex justify-center">
            <form className="w-full max-w-md space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input type="email" placeholder="Email" className="w-full" />
              <Textarea placeholder="Message" className="w-full" />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6">&copy; 2024 Viral Sachde. All rights reserved.</div>
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function CloudIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}


function CodeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CodepenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function DatabaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}


function DockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>
  )
}


function EclipseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>
  )
}


function GitGraphIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function NetworkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function TypeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <><svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg> <Script type="text/javascript" src="/script.js" /></>

  )
}