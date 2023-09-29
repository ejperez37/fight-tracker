import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Settings2, Github, X } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function FilterMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings2 />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Sports denoted by colored dot at the top right of each fight card
          </SheetDescription>
        </SheetHeader>
        <div>
          <Separator className="sm:my-4"></Separator>
          <h2 className="underline sm:mb-2">Sport</h2>
          <div className="pe-4">
            <Switch id="MMA" checked={true} />
            <Label htmlFor="MMA"> | Mixed Martial Arts</Label>
          </div>
          <div className="pe-4">
            <Switch id="boxing" />
            <Label htmlFor="boxing"> | Boxing</Label>
          </div>
          <div className="pe-4">
            <Switch id="muay-thai" />
            <Label htmlFor="muay-thai"> | Muay Thai</Label>
          </div>
          <div className="pe-4">
            <Switch id="judo" />
            <Label htmlFor="judo"> | Judo</Label>
          </div>
          <div className="pe-4">
            <Switch id="bjj" />
            <Label htmlFor="bjj"> | Brazilian Jiu-Jitsu</Label>
          </div>
        </div>
        <Separator className="sm:my-4"></Separator>
        <div>
          <h2 className="underline mb-2">League</h2>
          <div className="">
            <Switch id="ufc" />
            <Label htmlFor="ufc"> | UFC</Label>
          </div>
          <div className="">
            <Switch id="pfl" />
            <Label htmlFor="pfl"> | PFL</Label>
          </div>
          <div className="">
            <Switch id="onefc" />
            <Label htmlFor="onefc"> | ONEFC</Label>
          </div>
          <div className="">
            <Switch id="rws" />
            <Label htmlFor="rws"> | Rajadamnern World Series</Label>
          </div>
          <div className="">
            <Switch id="kcl" />
            <Label htmlFor="kcl"> | Karate Combat League</Label>
          </div>
        </div>
        <Separator className="sm:my-4"></Separator>
        <SheetFooter className="pt-64 sm:pt-36">
          <Button asChild>
            <Link href="https://github.com/ejperez37">
              <Github></Github>
            </Link>
          </Button>
          <SheetClose asChild>
            <Button>
              <X></X>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
