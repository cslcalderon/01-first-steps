
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <span className = "text-5xl">
        Hello World 
        { new Date().getTime()}
      </span>
    </main>
  )
}
