import { UserButton } from "@clerk/nextjs";


export default function DashboardPage() {
  return (
  <>  
  <div>
  <p className='text-red-200'>
    Dashboard (Protected)
  </p>
  <UserButton afterSignOutUrl="/"/>
  </div>
 
  </>
    )
}
