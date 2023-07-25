import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function LandingPage() {
  return (
    <div>
        LandingPage(Unprotected)
       
<div className="flex gap-5">
    

<Link href="/sign-in">
<Button>
    Sign In
    </Button>
</Link>

<Link href="/sign-up">
<Button>
    Register
    </Button>
</Link>
</div>
    </div>
  )
}
