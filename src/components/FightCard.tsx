import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card'
import { CalendarPlus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function FightCard() {
  return (
    <div className="flex justify-center my-8">
      <Card className="w-4/5 sm:w-3/5">
        <CardHeader className="text-center lg:text-left">
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
          <div className="flex flex-col lg:flex-row text-center justify-center lg:space-x-3">
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
            <figure className="">
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
          <div className="flex w-full justify-end my-2">
            <Button>
              <CalendarPlus></CalendarPlus>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
