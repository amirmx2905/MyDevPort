import { useState } from 'react'
import { SlidingNumber } from '@/components/animate-ui/primitives/texts/sliding-number'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(1200)

  return (
    <main className="min-h-screen grid place-items-center p-6">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Animate UI Test</h1>
        <SlidingNumber
          className="text-5xl font-semibold tabular-nums"
          number={count}
          padStart
          thousandSeparator=","
        />
        <div className="flex gap-2">
          <Button onClick={() => setCount((prev) => Math.max(0, prev - 137))} variant="outline">
            Decrease
          </Button>
          <Button onClick={() => setCount((prev) => prev + 137)}>Increase</Button>
        </div>
      </div>
    </main>
  )
}

export default App
