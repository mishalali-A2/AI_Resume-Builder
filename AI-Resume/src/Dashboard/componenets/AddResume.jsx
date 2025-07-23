import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../../components/ui/button'

function AddResume() {
    const [openDialog, setOpenDialog]= useState(false)

  return (
    <div className='p-14 py-24 border items-center flex justify-center bg-secondary rounded-b-xl h-[300px] hover:shadow-md cursor-pointer hover:scale-105'
        onClick={()=>setOpenDialog(true)}>
        <div>
           <PlusSquare/>
        </div>

        <Dialog open={openDialog}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Resume</DialogTitle>
                    <DialogDescription>
                        Add the name of your resume.
                    </DialogDescription>
                    <Input className="mt-2 my-2" placeholder="Eg: Web-Dev Resume "/>
                    <div className='flex justify-end gap-5'>
                        <Button onClick={(e)=>{e.stopPropagation(); setOpenDialog(false);}} variant='ghost'>Cancel</Button>
                        <Button>Create</Button>
                    </div>
                </DialogHeader>
            </DialogContent>
            </Dialog>
    </div>
  )
}

export default AddResume