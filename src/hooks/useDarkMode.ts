export default function useDarkMode(darkMode: boolean) {
  useEffect(() => {
    const { classList } = document.body;

    if (darkMode) {
      classList.add('dark');
    } else {
      classList.remove('dark');
    }
  }, [darkMode]);
}
