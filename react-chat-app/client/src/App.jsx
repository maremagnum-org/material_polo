import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './context/AuthProvider';
import { SocketProvider } from './context/SocketProvider';
import { ChatProvider } from './context/ChatProvider';

export const App = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
}
