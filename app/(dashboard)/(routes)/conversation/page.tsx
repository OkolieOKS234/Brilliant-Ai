"use client";

import * as z from "zod"
import Heading from '@/components/heading';
import { MessageSquare } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod"

const ConversationPage = () => {


const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues:{
    prompt: ""
  }
})
// Loading action
const isLoading = form.formState.isSubmitting;

// Submission function


  return (
    <div>
        
        <Heading
        title="Conversation"
        description='Your best conversational partner'
        icon={MessageSquare}
        iconColor='text-violet-500'
        bgColor='bg-violet-500/10'
        />
<div className="px-4 lg:px-8">

</div>

        </div>
  )
}

export default ConversationPage;