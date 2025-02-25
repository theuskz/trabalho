import React from 'react'

export default function Menu() {
  return (
    <div class="max-w-6xl mx-auto flex justify-between items-center p-4">
        
        <div class="text-2xl font-bold text-purple-600">Minha Logo</div>

        
        <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-600 hover:text-purple-600 transition">Início</a>
            <a href="#" class="text-gray-600 hover:text-purple-600 transition">Sobre</a>
            <a href="#" class="text-gray-600 hover:text-purple-600 transition">Serviços</a>
            <a href="#" class="text-gray-600 hover:text-purple-600 transition">Contato</a>
        </nav>
    </div>
  )
}
