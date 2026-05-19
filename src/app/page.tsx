'use client'
import { supabase } from '@/lib/supabase'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    supabase
      .from('leads')
      .select('count', { count: 'exact' , head: true })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-2">Assistant IA - En développement</h1>
      <p className="text-gray-600 mb-6">{new Date().toLocaleDateString()}</p>
      <button disabled className="px-4 py-2 bg-gray-300 rounded cursor-no-allowed"> 
        Fonctionnalité à venir
      </button>
    </main>
  );
}