import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  archiveGroups,
  archiveProjectCount,
  profile,
  projectTabs,
  projects,
  publicRepositoryCount,
  skillGroups,
  type ArchiveProject,
  type Project,
  type ProjectTabId,
} from "@/lib/profile"
import { cn } from "@/lib/utils"

function ProjectGrid({ tab }: { tab: ProjectTabId }) {
  const visibleProjects = projects.filter((project) => project.tabs.includes(tab))

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {visibleProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full min-h-[22rem] border-border/80 bg-card/95 shadow-none transition-colors hover:bg-accent/40">
      <CardHeader>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription>{project.category}</CardDescription>
        <CardAction>
          <a
            aria-label={`Open ${project.title} on GitHub`}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-sm" }),
              "rounded border-border bg-background text-foreground hover:bg-muted"
            )}
            href={project.repo}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLink data-icon="inline-start" />
          </a>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <p className="min-h-[5.5rem] text-sm leading-6 text-muted-foreground">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <Badge
              className="rounded border-border bg-background text-muted-foreground"
              key={item}
              variant="outline"
            >
              {item}
            </Badge>
          ))}
        </div>
        <ul className="mt-auto flex flex-col gap-2 text-sm leading-6 text-foreground/80">
          {project.highlights.map((highlight) => (
            <li className="flex gap-2" key={highlight}>
              <ArrowDownRight className="mt-1 size-3 shrink-0 text-muted-foreground" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-between bg-muted/30 text-xs text-muted-foreground">
        <span>Public repository</span>
        <span>{new URL(project.repo).pathname.replace("/", "")}</span>
      </CardFooter>
    </Card>
  )
}

function ArchiveProjectRow({ project }: { project: ArchiveProject }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-start gap-3">
      <div className="flex min-w-0 flex-col gap-2">
        <a
          className="inline-flex w-fit items-center gap-2 rounded text-base font-medium text-foreground transition-colors hover:text-muted-foreground"
          href={project.repo}
          rel="noreferrer"
          target="_blank"
        >
          {project.title}
          <ArrowUpRight className="size-3" />
        </a>
        <p className="text-sm leading-6 text-muted-foreground">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              className="rounded border-border bg-background text-muted-foreground"
              key={tag}
              variant="outline"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <a
        aria-label={`Open ${project.title} on GitHub`}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "rounded border-border bg-background text-foreground hover:bg-muted"
        )}
        href={project.repo}
        rel="noreferrer"
        target="_blank"
      >
        <ExternalLink data-icon="inline-start" />
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            aria-label="Robert Yu home"
            className="flex size-9 items-center justify-center rounded border border-border bg-card text-sm font-medium"
            href="#top"
          >
            RY
          </a>
          <nav className="flex items-center gap-1 text-sm text-muted-foreground">
            <a
              className="rounded px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              href="#work"
            >
              Work
            </a>
            <a
              className="rounded px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="rounded px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
              href="#archive"
            >
              Archive
            </a>
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded border-border bg-background text-foreground hover:bg-muted"
              )}
              href={profile.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch data-icon="inline-start" />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section
        className="mx-auto grid min-h-[72svh] w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1fr_24rem]"
        id="top"
      >
        <div className="flex max-w-4xl flex-col gap-8">
          <div className="flex flex-col gap-5">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
              {profile.headline}
            </p>
          </div>
          <p className="max-w-2xl text-base leading-8 text-foreground/75">
            {profile.summary}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "h-11 rounded bg-primary text-primary-foreground hover:bg-primary/90"
              )}
              href={profile.githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch data-icon="inline-start" />
              View GitHub
            </a>
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 rounded border-border bg-background text-foreground hover:bg-muted"
              )}
              href="#work"
            >
              Featured Work
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </div>
        </div>

        <aside className="flex flex-col gap-5 rounded-lg border border-border bg-card p-5">
          <div className="flex items-center gap-4">
            <Avatar className="size-20 border border-border" size="lg">
              <AvatarImage alt={`${profile.name} GitHub avatar`} src={profile.avatarUrl} />
              <AvatarFallback>RY</AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              <p className="text-lg font-medium">{profile.name}</p>
              <p className="truncate text-sm text-muted-foreground">
                github.com/{profile.handle}
              </p>
            </div>
          </div>
          <Separator />
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded border border-border bg-background p-3">
              <dt className="text-muted-foreground">Public repos</dt>
              <dd className="mt-1 text-2xl font-semibold">
                {publicRepositoryCount}
              </dd>
            </div>
            <div className="rounded border border-border bg-background p-3">
              <dt className="text-muted-foreground">Archive</dt>
              <dd className="mt-1 text-2xl font-semibold">{archiveProjectCount}</dd>
            </div>
          </dl>
          <p className="text-sm leading-6 text-muted-foreground">
            A compact index of {publicRepositoryCount} public repositories across
            AI, privacy, realtime systems, creator tooling, and experiments.
          </p>
        </aside>
      </section>

      <section
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8"
        id="skills"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">Skills</h2>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              A practical map of tools I keep reaching for when turning ideas into
              usable products.
            </p>
          </div>
          <span className="text-sm text-muted-foreground">
            Frontend, backend, AI, realtime, security, tooling
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <Card
              className="min-h-[17rem] border-border/80 bg-card/95 shadow-none"
              key={group.title}
            >
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge
                      className="rounded border-border bg-background text-muted-foreground"
                      key={skill}
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8"
        id="work"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">Featured Work</h2>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              Ten featured builds from the {publicRepositoryCount} public
              repositories available under the MayoPickle GitHub account.
            </p>
          </div>
          <a
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "rounded border-border bg-background text-foreground hover:bg-muted"
            )}
            href={profile.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            <GitBranch data-icon="inline-start" />
            All repositories
          </a>
        </div>

        <Tabs defaultValue="all">
          <TabsList
            className="w-full flex-wrap justify-start rounded border border-border bg-card p-1"
            variant="line"
          >
            {projectTabs.map((tab) => (
              <TabsTrigger
                className="h-8 grow rounded px-3 sm:grow-0"
                key={tab.id}
                value={tab.id}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {projectTabs.map((tab) => (
            <TabsContent className="mt-4" key={tab.id} value={tab.id}>
              <ProjectGrid tab={tab.id} />
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8"
        id="archive"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold sm:text-4xl">Project Archive</h2>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              The broader public repository trail: prototypes, creator tools,
              notebooks, profile work, and forks kept as references.
            </p>
          </div>
          <Badge
            className="w-fit rounded border-border bg-background text-muted-foreground"
            variant="outline"
          >
            {archiveProjectCount} more public repos
          </Badge>
        </div>

        <div className="grid gap-3 xl:grid-cols-2">
          {archiveGroups.map((group) => (
            <Card
              className="border-border/80 bg-card/95 shadow-none"
              key={group.title}
            >
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col">
                {group.projects.map((project, index) => (
                  <div key={project.title}>
                    {index > 0 ? <Separator className="my-5" /> : null}
                    <ArchiveProjectRow project={project} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-10 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>Robert Yu builds useful systems for AI, media, realtime interaction, and private data.</p>
        <a
          className="inline-flex items-center gap-2 rounded text-foreground transition-colors hover:text-muted-foreground"
          href={profile.githubUrl}
          rel="noreferrer"
          target="_blank"
        >
          github.com/{profile.handle}
          <ArrowUpRight className="size-3" />
        </a>
      </footer>
    </main>
  )
}
