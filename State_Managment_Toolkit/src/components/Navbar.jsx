import { useAppStore } from "../store/appStore"

function Navbar() {
    const user = useAppStore((state) => state.user);
    const theme = useAppStore((state) => state.theme);
    const login = useAppStore((state) => state.login);
    const toggleTheme = useAppStore((state) => state.toggleTheme);
  return (
    <div>
        <span>{theme}</span>
        
    </div>
  )
}

export default Navbar