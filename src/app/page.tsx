import Image from 'next/image'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import FilterMenu from '@/components/FilterMenu'

export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Card className="w-3/5">
          <CardHeader>
            <CardTitle className="underline">
              UFC Fight Night: Dawson vs Green
            </CardTitle>
            <CardDescription>
              SATURDAY, OCTOBER 7TH 9PM EST/5PM PST ON ESPN
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/testpic.jpeg"
              className="mx-auto"
              alt="placeholder"
              height={400}
              width={400}
            />
            <div className="flex lg:flex-row lg:justify-center">
              <figure>
                <figcaption className="text-center font-bold underline">
                  Main Card
                </figcaption>
                <ul>
                  <li>Grant Dawson v Bobby Green</li>
                  <li>Joe Pyfer v Abdul Razak Alhassan</li>
                  <li>Alex Morono v Joaquin Buckley</li>
                  <li>Drew Dober v Rick Glenn</li>
                </ul>
              </figure>
              <figure className="ps-4">
                <figcaption className="text-center font-bold underline">
                  Prelims
                </figcaption>
                <ul>
                  <li>Chris Gutierrez v Montel Jackson</li>
                  <li>Qileng Aori v Johnny Munoz</li>
                  <li>Vanessa Demopulous v Kanaka Murata</li>
                  <li>Nathan Maness v Mateus Mendonca</li>
                </ul>
              </figure>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
