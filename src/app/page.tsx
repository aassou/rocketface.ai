"use client"

import { useChat } from "ai/react"
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()


  return (
    <div className="pt-4 pb-32">
      <div className="ml-10">
        <RocketLaunchIcon 
          className="inline-block h-10 w-10 text-green-700" 
        />
        <h1 className="font-mono font-semibold inline-block h-10 w-10 text-green-700">RocketFace</h1>
      </div>
      {messages.map((message) => (
        (
          <div 
            key={message.id} 
            className={`border-t border-black/10 ${
              message.role === "assistant" && "bg-gray-50"
            }`}
          >
            <div className="max-w-3xl mx-auto py-6 flex">
              {
                message.role === "assistant" 
                && 
                  <RocketLaunchIcon 
                    className="h-10 w-10 text-black-300" 
                  />
              }
              <span className="ml-3">{message.content}</span>
            </div>
          </div>
        )
      ))}

      <form className="fixed inset-x-0 bottom-10" onSubmit={handleSubmit}>
        <input 
          className="max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background"
          placeholder="Enter message"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
