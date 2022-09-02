import create from 'zustand'

interface SessionState {
    session: boolean
    statechange: (by: boolean) => void //flips the boolean value 
    //   increase: (by: number) => void
}

const useBearStore = create<SessionState>()((set) => ({
    session: false,
    statechange: (by) => set((state)=> ({session : state.session = !state.session}))
}))