import create from 'zustand'
import { useSession, signIn, signOut } from "next-auth/react";
interface SessionState {
    session: boolean,
    email: string,
    setemail: (nuemail: string) => void,
    statechange: (by: boolean) => void //flips the boolean value 
    //   increase: (by: number) => void
}

export const useSessionState = create<SessionState>()((set) => ({
    session: false,
    email: '',
    setemail: (nuemail) => set((state)=>({email:nuemail})),
    statechange: (by) => set((state) => ({ session: state.session = !state.session }))
}))