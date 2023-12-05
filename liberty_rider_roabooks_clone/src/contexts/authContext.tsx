import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { AuthActionType, AuthReducer, AuthState, initialAuthState } from "../reducers/AuthReducer";

export interface Action<T> {
    type: T;
    payload: never;
}

export const AuthContext = createContext<
  [AuthState, Dispatch<Action<AuthActionType>>]
>([initialAuthState, () => null]);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) =>{
    const [state, dispatch] = useReducer(AuthReducer, initialAuthState);
    return (
        <AuthContext.Provider value={[state, dispatch]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;